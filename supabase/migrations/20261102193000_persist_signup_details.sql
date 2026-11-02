create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    experience_years integer;
    full_name text := nullif(btrim(coalesce(new.raw_user_meta_data ->> 'full_name', '')), '');
    purpose text := nullif(btrim(coalesce(new.raw_user_meta_data ->> 'purpose', '')), '');
    learning_goal text := nullif(btrim(coalesce(new.raw_user_meta_data ->> 'learning_goal', '')), '');
begin
    experience_years := case new.raw_user_meta_data ->> 'developer_experience'
        when 'under-1' then 0
        when '1-3' then 1
        when '4-6' then 4
        when '7-plus' then 7
        else 0
    end;

    insert into public.profiles (id, full_name, role, purpose)
    values (new.id, full_name, 'guest', purpose)
    on conflict (id) do nothing;

    insert into public.experience_levels (user_id, years_of_experience)
    select new.id, experience_years
    where not exists (
        select 1
        from public.experience_levels
        where user_id = new.id
    );

    if learning_goal is not null then
        insert into public.learning_goals (user_id, goal_title)
        select new.id, learning_goal
        where not exists (
            select 1
            from public.learning_goals
            where user_id = new.id
              and goal_title = learning_goal
        );
    end if;

    return new;
end;
$$;

revoke all on function public.handle_new_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

insert into public.profiles (id, full_name, role, purpose)
select
    users.id,
    nullif(btrim(coalesce(users.raw_user_meta_data ->> 'full_name', '')), ''),
    'guest',
    nullif(btrim(coalesce(users.raw_user_meta_data ->> 'purpose', '')), '')
from auth.users as users
on conflict (id) do nothing;

insert into public.experience_levels (user_id, years_of_experience)
select
    users.id,
    case users.raw_user_meta_data ->> 'developer_experience'
        when 'under-1' then 0
        when '1-3' then 1
        when '4-6' then 4
        when '7-plus' then 7
        else 0
    end
from auth.users as users
where not exists (
    select 1
    from public.experience_levels
    where user_id = users.id
);

insert into public.learning_goals (user_id, goal_title)
select
    users.id,
    nullif(btrim(coalesce(users.raw_user_meta_data ->> 'learning_goal', '')), '')
from auth.users as users
where nullif(btrim(coalesce(users.raw_user_meta_data ->> 'learning_goal', '')), '') is not null
  and not exists (
      select 1
      from public.learning_goals
      where user_id = users.id
        and goal_title = nullif(btrim(coalesce(users.raw_user_meta_data ->> 'learning_goal', '')), '')
  );

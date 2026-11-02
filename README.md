# Frontend Interview Prep

## Project Overview

A production-style interview preparation dashboard for **Senior Frontend Engineers** and **Frontend Architects**. Practice questions by topic with structured answers, progress tracking, search, and dark mode.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react
- ESLint, Prettier, Husky, lint-staged, Commitlint
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase Authentication and Signup Data

The app shows sign-in at `/` by default and displays the dashboard after a successful sign-in. Visitors can switch to sign-up from the same screen. Supabase Auth creates and manages user records in `auth.users`; do not insert into `auth.users` through the REST API.

1. In your Supabase project, open **Project Settings → API** and copy the Project URL and publishable key (or legacy anon key).
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
3. Set `NEXT_PUBLIC_APP_URL` to the app's origin (`http://localhost:3000` for local development).
4. In Supabase **Authentication → URL Configuration**, set the Site URL to the app origin and add `<app-origin>/auth/callback` to the allowed redirect URLs.
5. In the Supabase SQL Editor, run `supabase/migrations/20261102193000_persist_signup_details.sql` after creating the `profiles`, `experience_levels`, and `learning_goals` tables.
6. Restart the dev server. If email confirmation is enabled, new users need to confirm their address before they can sign in.

The migration installs an `auth.users` trigger that creates a `profiles` row (with role fixed to `guest`) and an `experience_levels` row on signup. It saves the selected experience range as the lower bound in `years_of_experience` (`under-1` → `0`, `1-3` → `1`, `4-6` → `4`, `7-plus` → `7`). The selected purpose is stored in `profiles.purpose`. A `learning_goals` row is created only when the optional learning-focus field is non-empty. The migration also backfills these rows from existing Auth user metadata, including a signup completed before the trigger was installed.

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm format
pnpm format:check
pnpm typecheck
```

## Features

- Sticky header with search, progress, and theme toggle
- Collapsible sidebar (desktop) + drawer (mobile)
- Topic question lists with status badges
- Question detail with 5 explanation sections
- Previous / Next navigation
- Progress persisted in `localStorage`
- Dark mode persisted in `localStorage`
- Accessibility: skip link, landmarks, labels, focus rings, keyboard search

## Routes

```text
/                         Dashboard
/[topic]                  Topic question list
/[topic]/[questionId]     Question detail
```

## Architecture

```text
src/
├── app/                 # App Router pages
├── components/          # Header, Sidebar, Question views, providers, ui
├── lib/data.ts          # Mock topics + questions
└── types/               # Shared TypeScript types
```

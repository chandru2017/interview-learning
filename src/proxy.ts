import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

import { isMissingAuthSessionError } from '@/lib/supabase/errors';

export const proxy = async (request: NextRequest) => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        return NextResponse.next({ request });
    }

    let response = NextResponse.next({ request });
    const supabase = createServerClient(supabaseUrl, supabaseKey, {
        cookies: {
            getAll() {
                return request.cookies.getAll();
            },
            setAll(cookiesToSet) {
                cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
                response = NextResponse.next({ request });
                cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
            },
        },
    });

    const { error } = await supabase.auth.getUser();
    if (error && !isMissingAuthSessionError(error)) {
        console.error('Unable to refresh the Supabase session.', error);
        return NextResponse.json({ error: 'Unable to verify your session. Please try again.' }, { status: 503 });
    }

    return response;
};

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};

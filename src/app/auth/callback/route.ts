import { NextResponse, type NextRequest } from 'next/server';

import { createClient } from '@/lib/supabase/server';

export const GET = async (request: NextRequest) => {
    const code = request.nextUrl.searchParams.get('code');
    const supabase = await createClient();

    if (!code || !supabase) {
        return NextResponse.redirect(new URL('/?authError=confirmation', request.url));
    }

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
        return NextResponse.redirect(new URL('/?authError=confirmation', request.url));
    }

    return NextResponse.redirect(new URL('/', request.url));
};

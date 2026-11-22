import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const nextQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'nx-16',
        topicId: 'nextjs',
        title: 'What are Route Handlers?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Route Handlers are API endpoints in the App Router.',
                            'You create a route.ts file and export functions like GET and POST.',
                            'They use the standard Web Request and Response objects.',
                            'Used for webhooks, external API access and custom endpoints.',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Route Handlers are defined in **app/.../route.ts** and export functions named after HTTP methods (GET, POST, PUT, PATCH, DELETE).',
                            '**Web standard APIs** - Request/Response, NextRequest/NextResponse for cookies and helpers.',
                            '**Use cases** - webhooks (Stripe), public APIs, file uploads/downloads, OAuth callbacks, proxying third-party APIs, mobile app backends.',
                            '**Dynamic segments** - app/api/users/[id]/route.ts with params (async in recent versions).',
                            '**Caching** - GET handlers were cached by default in Next.js 14; not cached by default since 15.',
                            '**Not needed for** - your own page data (fetch in Server Components) or form mutations from your UI (use Server Actions).',
                            '**Rules** - no page.tsx in the same segment; validate input, authenticate, return proper status codes.',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `// app/api/users/[id]/route.ts
    import { NextResponse } from 'next/server';

    export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await db.user.findUnique({ where: { id } });
    if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(user);
    }

    export async function POST(req: Request) {
    const body = await req.json();
    const parsed = CreateUserSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json(parsed.error.flatten(), { status: 400 });
    const user = await db.user.create({ data: parsed.data });
    return NextResponse.json(user, { status: 201 });
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Each exported function handles one HTTP method, with validation and proper status codes.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'In Archer Review, Route Handlers were used for webhooks and external integrations, while normal UI data came from Server Components and Server Actions.',
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Route Handlers are API endpoints defined in route.ts using the standard Request and Response APIs.',
                            'I use them for webhooks, third-party integrations and public APIs.',
                            'For my own UI I prefer Server Components for reads and Server Actions for writes.',
                            'I validate input and check authentication in every handler.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Stripe needs to call your app when a payment succeeds. How do you build it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Create a POST Route Handler as webhook endpoint.',
                            'Read the raw body and verify the Stripe signature before processing.',
                            'Return 200 quickly and process idempotently.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Developers use Route Handlers just to fetch data for their own pages. What do you advise?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Fetch directly in Server Components instead of calling your own API.',
                            'It removes an extra network hop and code.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['route.ts', 'GET/POST', 'NextResponse', 'Webhooks', 'Validation', 'Server Actions'],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Route Handler-na app/ folder-la route.ts file create panni HTTP methods export pannura server endpoint.',
                            'Webhook, public API, and third-party integrations-ku use pannuven; UI data-ku direct Server Component fetch or Server Action prefer pannuven.',
                            'Input validate panni, auth check seithu, correct status code return pannuven.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Route Handler enna?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'App Router-la app/api/.../route.ts file create pannina server endpoint define pannalam.',
                            'GET, POST, PUT, PATCH, DELETE madhiri HTTP method names-la functions export pannuvom.',
                            'Standard Request and Response APIs use pannalam; NextResponse helper-um irukku.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Eppo use pannalam?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Payment webhook, OAuth callback, public API, or third-party integration-ku Route Handler useful.',
                            'Unga own page data-ku Server Component-la direct-a fetch pannina extra network hop avoid aagum.',
                            'Unga own form mutation-ku Server Action simpler-a irukkalam.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Security and response handling**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Request body validate panni, endpoint-ku authentication and authorization check pannunga.',
                            'Success and failure-ku appropriate HTTP status codes return pannunga.',
                            'External webhook-na signature verify panni duplicate event processing avoid pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-17',
        topicId: 'nextjs',
        title: 'What is Next.js Middleware?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Middleware is code that runs before a request reaches your page.',
                            'It can redirect, rewrite, set headers or check cookies.',
                            'Often used for auth redirects, redirects by country, and A/B tests.',
                            'In Next.js 16 it is renamed to proxy.ts.',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Middleware runs **before a request is completed**, so it can redirect, rewrite, modify headers/cookies or respond early.',
                            '**Matcher** - config.matcher limits which paths it runs on (skip static files and _next).',
                            '**Use cases** - optimistic auth redirects, locale detection, geolocation routing, A/B testing, feature flags, bot/rate-limit checks, security headers.',
                            '**Next.js 16** - middleware.ts is renamed to proxy.ts (exported function named proxy) to make the network boundary clear, and it runs on the Node.js runtime; middleware.ts is deprecated but still works.',
                            '**Runtime limits (older middleware)** - Edge runtime with limited Node APIs, so avoid heavy DB work or big libraries.',
                            '**Not a security boundary alone** - never rely only on it for authorization; verify again near the data (a past vulnerability allowed bypassing middleware via a header).',
                            '**Keep it fast** - it runs on many requests; avoid slow fetches.',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `// proxy.ts (Next.js 16)  - in Next.js 15 and below: middleware.ts with export function middleware
    import { NextResponse, type NextRequest } from 'next/server';

    export function proxy(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
    }

    export const config = {
    matcher: ['/dashboard/:path*'],
    };`,
                    },
                    {
                        type: 'highlight',
                        text: 'Requests to /dashboard without a session cookie are redirected before any page code runs.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'In Archer Review, middleware handled quick redirects for unauthenticated users, while the real permission checks were repeated in the data layer.',
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Middleware, now proxy.ts in Next.js 16, runs before a request completes and can redirect, rewrite or modify headers and cookies.',
                            'I use it for lightweight tasks like optimistic auth redirects, locale routing and A/B tests, limited by a matcher.',
                            'I never use it as the only authorization layer.',
                            'I keep it fast and avoid heavy database work.',
                        ],
                    },
                ],
            },
        ],

        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You want to redirect users to /en or /fr based on the Accept-Language header. Where do you implement it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'In middleware/proxy: read the header, set locale and redirect/rewrite.',
                            'Use a matcher that skips static assets.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Your auth check only exists in middleware. A security reviewer objects. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Middleware can be bypassed or misconfigured (matcher gaps, known bypass bugs).',
                            'Re-check session/permissions in the data access layer, Server Actions and Route Handlers.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['Middleware', 'proxy.ts', 'Matcher', 'Redirect', 'Rewrite', 'Optimistic auth check'],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Middleware request complete aaguradhukku munnaadi run aagi redirect, rewrite, or headers/cookies modify pannum.',
                            'Next.js 16-la idhu proxy.ts nu rename aagirukku; matcher use panni relevant routes-ku mattum run pannalam.',
                            'Lightweight routing and optimistic auth checks-ku use pannuven; authorization-ah data layer-la marubadiyum verify pannuven.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Middleware / Proxy enna seyyum?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Request page or route handler reach aaguradhukku munnaadi code run aagum.',
                            'Request-ah redirect pannalam, rewrite pannalam, headers/cookies modify pannalam, illa response early-a return pannalam.',
                            'Next.js 16-la middleware.ts naming-ku badhila proxy.ts use pannuvanga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Common use cases**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Session cookie irukka nu quick-a check panni login page-ku redirect pannalam.',
                            'Locale routing, feature flags, and A/B testing-ku use pannalam.',
                            'config.matcher use panni static files and unrelated routes skip pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Security limit**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Middleware check mattum authorization-ku podhaadhu; matcher or request path mistakes irukkalam.',
                            'Sensitive data read/write panna munnaadi DAL, Server Action, or Route Handler-la session and permission verify pannunga.',
                            'Ovvoru request-layum run aagalam; adhanaala slow database work avoid pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-18',
        topicId: 'nextjs',
        title: 'How would you implement authentication in Next.js?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Use a proven library or provider like Auth.js (NextAuth), Clerk or Better Auth.',
                            'Store the session in a secure httpOnly cookie.',
                            'Protect pages by checking the session on the server.',
                            'Redirect unauthenticated users to the login page.',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Authentication = verifying who the user is. Prefer a **maintained solution** instead of building crypto/session logic yourself.',
                            '**Options** - Auth.js, Clerk, Better Auth, Auth0, Supabase Auth, or custom sessions for full control.',
                            '**Session strategy** - stateless signed/encrypted JWT in a cookie, or database sessions (easier to revoke).',
                            '**Cookie flags** - httpOnly, secure, sameSite=lax, sensible expiry; never store tokens in localStorage.',
                            '**Flow** - login via credentials/OAuth/magic link, create session, set cookie, redirect.',
                            '**Checks** - proxy/middleware for fast optimistic redirects, but verify the session in a **Data Access Layer** (cached per request) used by Server Components, Server Actions and Route Handlers.',
                            '**Client** - expose minimal user info through a provider or server-passed props; call signOut via Server Action.',
                            '**Extras** - CSRF considerations for Route Handlers, rate limiting, password hashing (argon2/bcrypt), MFA, secure password reset.',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `// lib/dal.ts - verify session close to the data
    import 'server-only';
    import { cache } from 'react';
    import { cookies } from 'next/headers';
    import { redirect } from 'next/navigation';

    export const verifySession = cache(async () => {
    const token = (await cookies()).get('session')?.value;
    const session = token ? await decrypt(token) : null;
    if (!session?.userId) redirect('/login');
    return { userId: session.userId, role: session.role };
    });

    // app/dashboard/page.tsx
    export default async function Dashboard() {
    const { userId } = await verifySession();
    const data = await getUserData(userId);
    return <DashboardView data={data} />;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Every protected page and action calls verifySession on the server, so access does not rely on UI or middleware alone.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'In Archer Review, sessions were stored in httpOnly cookies and verified on the server in a data access layer, so students could only load their own data.',
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'I use a maintained solution like Auth.js or Clerk and store sessions in secure httpOnly cookies.',
                            'I redirect optimistically in proxy/middleware but always verify the session on the server in a data access layer.',
                            'Server Actions and Route Handlers are treated like public endpoints and re-check the session.',
                            'I add rate limiting, proper password hashing and OAuth/MFA where needed.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A teammate stores the JWT in localStorage. What is the problem and the fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'It is readable by JavaScript and exposed to XSS.',
                            'Use httpOnly, secure, sameSite cookies set by the server.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Users stay logged in after you ban them. How do you handle revocation?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use database-backed sessions or short-lived JWT + refresh with a revocation check.',
                            'Verify user status in the DAL on sensitive operations.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You need Google and GitHub login quickly. Approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use Auth.js (or Clerk) with OAuth providers.',
                            'Store users via an adapter and protect routes via session checks on the server.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['Auth.js', 'Session', 'httpOnly cookie', 'JWT', 'Data Access Layer', 'OAuth'],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Authentication-na user yaaru nu verify pannradhu; Auth.js or Clerk madhiri maintained solution prefer pannuven.',
                            'Session-ah secure httpOnly cookie-la store panni, protected data access-ku server-la verify pannuven.',
                            'Proxy redirect UX-ku mattum; Server Actions, Route Handlers, and DAL-la session check repeat panni rate limiting and secure password handling add pannuven.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Authentication-na enna?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'User yaaru nu verify pannradhu authentication.',
                            'Auth.js, Clerk, Better Auth madhiri maintained provider use pannina session and OAuth flow safe-a manage panna help kidaikkum.',
                            'Custom crypto or session logic build pannradha vida established solution use pannradhu safer.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Session handling**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Login success aana session create panni secure cookie-la store pannuvom.',
                            'Cookie-ku httpOnly, secure, and suitable sameSite settings set pannunga.',
                            'Token-ah localStorage-la store panna avoid pannunga; JavaScript access panna mudiyum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Protected data access**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Page render-ku munnaadi server-la session verify panni unauthenticated user-ah login-ku redirect pannalam.',
                            'Proxy check quick redirect-ku useful; aana DAL, Server Action, and Route Handler-layum session verify pannunga.',
                            'Rate limiting, secure password hashing, and MFA madhiri safeguards requirement base panni add pannalam.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-19',
        topicId: 'nextjs',
        title: 'How would you implement authorization?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Authorization decides what a logged-in user is allowed to do.',
                            'Check roles or permissions on the server, not only in the UI.',
                            'Check them in every Server Action, Route Handler and data function.',
                            'Hiding a button is not security.',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Authentication = who you are; **authorization = what you can do**. It must be enforced on the server at every access point.',
                            '**Models** - RBAC (roles: admin, editor), ABAC/permissions (owner of resource, plan, org), or policy engines (CASL, Oso, OpenFGA).',
                            '**Where to enforce** - in the Data Access Layer close to the data, in Server Actions, Route Handlers, and page-level checks.',
                            '**Do not rely on** - layouts only (they do not re-render on every navigation), client checks, or middleware alone.',
                            '**Resource ownership** - always filter queries by userId/orgId (where: { id, ownerId }) to prevent IDOR.',
                            '**Server Actions are public endpoints** - validate input and authorize each action.',
                            '**UI** - use permissions to hide/disable controls for UX, but treat as cosmetic.',
                            '**Multi-tenant** - include tenantId in every query; test authorization with automated tests.',
                            'Return 403/notFound() appropriately and log denied attempts.',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `// lib/authz.ts
    export function can(user: { id: string; role: string }, action: 'edit' | 'delete', post: { authorId: string }) {
    if (user.role === 'admin') return true;
    return post.authorId === user.id && action === 'edit';
    }

    // Server Action
    'use server';
    export async function deletePost(id: string) {
    const user = await verifySession();
    const post = await db.post.findUnique({ where: { id } });
    if (!post || !can(user, 'delete', post)) throw new Error('Forbidden');
    await db.post.delete({ where: { id } });
    revalidatePath('/posts');
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'The permission check runs on the server inside the action, so it cannot be bypassed from the browser.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'In Archer Review, role checks (student vs admin) and ownership filters were enforced in server functions, while UI only hid unavailable actions.',
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Authorization is enforced on the server at every access point: data access layer, Server Actions and Route Handlers.',
                            'I use RBAC or permission-based checks plus ownership filters on queries.',
                            'I never rely on UI hiding, layouts or middleware alone.',
                            'For complex rules I use a policy library and write tests for permission cases.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: "**A user changes the ID in the URL (/orders/123 to /orders/124) and sees another user's order. Fix?**",
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Always query with ownership: where { id, userId }.',
                            'Return notFound() or 403 when it does not belong to the user.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Admin-only page is protected only by a check in layout.tsx. Is that enough?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No; layouts are not re-run on every client navigation and data can be fetched through actions/handlers.',
                            'Check the role in each page, action and data function.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['RBAC', 'ABAC', 'Permissions', 'IDOR', 'Data Access Layer', 'Server Actions'],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Authorization-na authenticated user enna action panna allowed nu decide pannradhu.',
                            'Role or permission checks-ah server-side-la DAL, Server Actions, and Route Handlers-la enforce pannuven.',
                            'Resource query-la userId/tenantId ownership filter add panni, UI hiding or middleware mattum security-nu rely panna maatten.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Authentication vs authorization**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Authentication user yaaru nu identify pannum.',
                            'Authorization andha user enna resource access panna or enna action seiya mudiyum nu decide pannum.',
                            'Role-based permissions (admin/editor) or resource ownership base panni rule set pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Server-la enforce pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Data access layer-la permission check pannina data source pakkathula enforcement irukkum.',
                            'Ovvoru Server Action and Route Handler-um public endpoint madhiri treat panni input and permissions check pannunga.',
                            'UI-la button hide pannradhu user experience-ku mattum; direct request-ah adhu block pannaadhu.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Ownership and multi-tenant data**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Record fetch pannumbodhu id mattum check pannaama userId or tenantId-um query filter-la include pannunga.',
                            'Layout or middleware check mattum nambi irukka koodadhu; actual data/action path-layum authorize pannunga.',
                            'Allow/deny cases-ku automated tests ezhuthi access control verify pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-20',
        topicId: 'nextjs',
        title: 'How would you optimize a large Next.js application?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Send less JavaScript: use Server Components and split code.',
                            'Cache data and use static pages where possible.',
                            'Optimize images, fonts and third-party scripts.',
                            'Measure first with Lighthouse and the bundle analyzer.',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Start by **measuring** (Lighthouse, Web Vitals, bundle analyzer, server traces), then fix the biggest bottlenecks.',
                            '**JavaScript** - Server Components by default, push "use client" to leaves, next/dynamic for heavy components, remove unused dependencies, analyze with @next/bundle-analyzer.',
                            '**Rendering** - static/ISR for shared content, Partial Prerendering/Cache Components, streaming with Suspense, avoid fully dynamic pages without need.',
                            '**Data** - parallel fetching, caching with tags, avoid waterfalls, DB indexes, DAL with request memoization.',
                            '**Assets** - next/image, next/font, next/script with proper strategy, CDN.',
                            '**Navigation** - Link prefetching, route-level splitting, avoid huge layouts.',
                            '**Build and DX** - Turbopack (default in Next.js 16), monorepo caching (Turborepo), incremental builds, React Compiler where suitable.',
                            '**Infrastructure** - CDN, regional DB/data close to server, shared cache for multi-instance, monitoring (Sentry, OpenTelemetry).',
                            '**Process** - performance budgets in CI.',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `// Lazy-load a heavy client component
    import dynamic from 'next/dynamic';
    const Chart = dynamic(() => import('./Chart'), {
    loading: () => <p>Loading chart...</p>,
    });

    // next.config.ts - analyze bundle
    // ANALYZE=true next build  (with @next/bundle-analyzer)

    // Stream slow section
    <Suspense fallback={<Skeleton />}>
    <Recommendations />
    </Suspense>`,
                    },
                    {
                        type: 'highlight',
                        text: 'Heavy code loads only when needed and slow sections stream so the rest of the page appears quickly.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'In Archer Review, we used the bundle analyzer to find heavy client libraries, lazy-loaded them, cached shared queries and moved data fetching to the server.',
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'I measure first with Lighthouse, Web Vitals and the bundle analyzer.',
                            'Then I reduce client JavaScript with Server Components and dynamic imports, use static/ISR and caching, and avoid data waterfalls with parallel fetching and streaming.',
                            'I optimize images, fonts and third-party scripts using Next.js built-ins.',
                            'I also set performance budgets in CI and monitor in production.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Dashboard route loads 2MB of JavaScript. What steps do you take?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Analyze the bundle to find heavy libraries.',
                            'Move logic to Server Components, lazy-load charts/editors, and replace heavy libs with lighter ones.',
                            'Check that "use client" is not at the page level.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Build times for 20k pages are too long. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Pre-render only key pages and generate the rest on demand.',
                            'Use Turbopack, build caching and parallelism.',
                            'Split into multiple apps or packages if the domain allows.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Server response time is slow under traffic. Where do you look?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Profile slow data calls, add caching and DB indexes.',
                            'Move static content to the CDN/ISR and stream dynamic parts.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: [
                            'Bundle analyzer',
                            'Server Components',
                            'Dynamic import',
                            'Streaming',
                            'Caching',
                            'Web Vitals',
                        ],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'First Lighthouse, Web Vitals, bundle analyzer, and server traces use panni bottleneck measure pannuven.',
                            'Client JavaScript reduce panni, static/ISR and cache use pannuven; independent requests parallel-a fetch panni slow sections stream pannuven.',
                            'Images, fonts, third-party scripts, and database queries optimize panni CI-la performance budget and production monitoring set pannuven.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Measure first**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Guess panni optimize pannaama Lighthouse, Web Vitals, bundle analyzer, and server traces-la actual bottleneck identify pannunga.',
                            'Large JavaScript bundle, slow database call, image size, or build time nu problem enga irukku nu measure pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Runtime performance**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Server Components default-a use panni client JavaScript reduce pannunga; heavy chart/editor-ai dynamic import-la load pannalam.',
                            'Shared content-ku static or ISR and caching use pannunga; independent data requests-ah parallel-a run pannunga.',
                            'Slow page sections-ah Suspense moolama stream pannunga; images/fonts-ku Next.js optimizations use pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Scale and prevent regressions**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Slow DB queries profile panni index and cache improve pannunga; multi-instance deployment-ku shared cache consider pannunga.',
                            'Build time adhigama irundha pre-render panna vendiya pages-ah limit panni incremental build/cache use pannunga.',
                            'CI-la performance budget set panni production Web Vitals monitor pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),
];

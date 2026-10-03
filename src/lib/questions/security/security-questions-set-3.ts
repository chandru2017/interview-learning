import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const securityQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'sc-11',
        topicId: 'security',
        title: 'How would you secure a Next.js application?',
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
                            'Check authentication and authorization on the server, not only in the UI.',
                            'Keep secrets in server-only environment variables.',
                            'Add security headers and a Content Security Policy.',
                            'Validate all input and keep Next.js and dependencies updated.',
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
                            'Use **defense in depth** across auth, data, headers, input, dependencies and infrastructure.',
                            '**Authentication** - maintained solution (Auth.js, Clerk, etc.), HttpOnly Secure SameSite session cookies, rotation and logout/revocation.',
                            '**Authorization** - verify session and permissions in a Data Access Layer used by Server Components, Server Actions and Route Handlers. Do not rely only on middleware/proxy or layouts (a past middleware bypass, CVE-2025-29927, showed the risk).',
                            '**Server Actions and Route Handlers are public endpoints** - validate input (Zod), authorize each call, rate limit, protect against CSRF (Server Actions check Origin; Route Handlers need their own protection).',
                            '**Secrets** - only NEXT_PUBLIC_ variables reach the browser; keep secrets server-only, use the server-only package, never serialize sensitive data into props passed to Client Components.',
                            '**Headers** - CSP with nonces, HSTS, X-Content-Type-Options: nosniff, Referrer-Policy, Permissions-Policy, frame-ancestors/X-Frame-Options.',
                            '**XSS** - avoid dangerouslySetInnerHTML, sanitize rich content, validate URLs.',
                            '**Dependencies** - keep Next.js and React patched (critical issues have occurred, e.g. RSC vulnerability CVE-2025-55182), use npm audit/Dependabot, lockfiles, review third-party scripts.',
                            '**Data layer** - parameterized queries/ORM, least-privilege DB user, avoid IDOR by filtering by owner, tenant isolation.',
                            '**Operations** - rate limiting/WAF, logging and monitoring, error pages that do not leak details, secure CI/CD secrets.',
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
                        text: `// next.config.ts - security headers
    const securityHeaders = [
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    { key: 'Content-Security-Policy', value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'" },
    ];
    export default { async headers() { return [{ source: '/(.*)', headers: securityHeaders }]; } };

    // Server Action: validate and authorize every call
    'use server';
    export async function updateProfile(formData: FormData) {
    const { userId } = await verifySession();                  // authentication
    const data = ProfileSchema.parse(Object.fromEntries(formData));   // validation
    await db.user.update({ where: { id: userId }, data });     // scoped to the user
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Headers harden the browser side, and the Server Action verifies the session, validates input and scopes the query to the user.',
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
                        text: 'In Archer Review, auth checks lived in a server-side data access layer, secrets stayed server-only, and security headers plus CSP were added globally.',
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
                            'I treat Server Components, Server Actions and Route Handlers as the security boundary and check authentication and authorization on the server in a data access layer, not only in middleware.',
                            'I validate input with a schema, keep secrets server-only, and avoid leaking data through props.',
                            'I add security headers and CSP, prevent XSS and CSRF, and use ORM parameterization with least privilege.',
                            'I keep Next.js, React and dependencies patched and add rate limiting and monitoring.',
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
                        text: '**A security review finds that /admin is protected only by middleware. What do you recommend?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Re-check the session and role in the page, Server Actions, Route Handlers and data layer.',
                            'Keep Next.js patched; treat middleware as an optimistic early redirect only.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Someone put an API secret in NEXT_PUBLIC_API_KEY. What is the problem?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'NEXT_PUBLIC_ values are inlined in the client bundle and visible to everyone.',
                            'Rotate the key, move the call to the server, and use a non-public env variable.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A Server Component passes a full user object (with password hash) as a prop to a Client Component. Issue?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Props to Client Components are serialized into the HTML/RSC payload and exposed to the browser.',
                            'Pass only the fields needed (DTO) and use server-only to prevent accidental imports.',
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
                            'Data Access Layer',
                            'Server Actions',
                            'NEXT_PUBLIC_',
                            'CSP',
                            'Security headers',
                            'Input validation',
                            'Dependencies',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'sc-12',
        topicId: 'security',
        title: 'How would you protect sensitive frontend data?',
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
                            'Do not store secrets or sensitive data in frontend code or localStorage.',
                            'Keep sensitive logic and data on the server.',
                            'Send only the data the user needs.',
                            'Use HTTPS and avoid logging or exposing sensitive information.',
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
                            'Assume **anything sent to the browser can be seen** (DevTools, source, network). Protect data by not sending it, and by limiting exposure.',
                            '**Minimize** - return only needed fields (DTOs); mask data (show last 4 digits); paginate; do not ship whole records.',
                            '**No secrets in the client** - API keys, private tokens, credentials belong on the server; use a backend/BFF proxy; public keys are fine; restrict keys by domain/scope.',
                            '**Storage** - avoid sensitive data in localStorage/sessionStorage/IndexedDB; use HttpOnly cookies; clear data on logout; keep short-lived in-memory where required.',
                            '**Transport** - HTTPS everywhere, HSTS, no sensitive data in URLs/query strings (they end up in history, logs, referrers).',
                            '**Caching** - Cache-Control: no-store for sensitive responses; clear on logout; avoid caching in shared CDNs/service workers.',
                            '**Logging and analytics** - scrub PII/tokens from console logs, error trackers (Sentry), session replay and analytics (mask inputs).',
                            '**Forms and autofill** - proper autocomplete attributes, input type=password, mask sensitive fields, disable screen-recorder capture of fields.',
                            '**Client-side encryption** - gives limited protection (keys are exposed too); use it only for specific end-to-end designs.',
                            '**Source maps and bundle** - do not expose source maps publicly if they reveal sensitive logic; obfuscation is not security.',
                            '**Authorization on the server** - hiding fields in the UI is cosmetic; enforce access control in the API.',
                            '**Third parties** - minimize scripts, use CSP and SRI to avoid data exfiltration.',
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
                        text: `// Server: send only what the UI needs
    function toUserDto(user) {
    return {
    id: user.id,
    name: user.name,
    cardLast4: user.card.number.slice(-4),   // masked
    // passwordHash, ssn, internal flags are NOT included
    };
    }

    // Client: never keep secrets in env vars exposed to the browser
    // BAD:  const key = process.env.NEXT_PUBLIC_STRIPE_SECRET   (visible to everyone)
    // GOOD: call your own API route which uses the secret on the server

    // Sensitive response headers
    Cache-Control: no-store
    Referrer-Policy: strict-origin-when-cross-origin

    // Mask inputs in error/session tools
    Sentry.init({ beforeSend(event) { delete event.request?.cookies; return event; } });`,
                    },
                    {
                        type: 'highlight',
                        text: 'The server sends only masked/necessary fields, secrets stay server-side, responses are not cached, and monitoring tools are scrubbed.',
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
                        text: 'In Archer Review, the API returned only the fields each screen needed, secrets stayed in server-side environment variables, and error logs were scrubbed of personal data.',
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
                            'I assume anything sent to the browser can be seen, so I send only the minimum data and keep secrets and sensitive logic on the server.',
                            'I avoid storing sensitive data in localStorage, use HttpOnly cookies, HTTPS and no-store caching for sensitive responses.',
                            'I keep sensitive data out of URLs, logs and analytics, and mask it in the UI.',
                            'Access control is enforced on the server, and I reduce XSS and third-party risk with CSP.',
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
                        text: '**Developer hid the "salary" column in the UI for non-admins, but it is still in the API response. Problem?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Anyone can see it in the Network tab; UI hiding is not security.',
                            "Remove the field on the server based on the user's permissions.",
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Sensitive data appears in the URL (e.g., /reset?token=...&email=...). What are the risks?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'URLs are stored in browser history, server logs and sent in Referer headers.',
                            'Use POST bodies or short-lived one-time tokens, set Referrer-Policy and avoid putting PII in URLs.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Session replay and error tracking tools capture form fields containing PII. How do you fix it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mask/block sensitive inputs in the tool configuration (data-mask attributes) and scrub events before sending.',
                            'Review what is collected and apply data retention rules.',
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
                            'Data minimization',
                            'DTO',
                            'Secrets',
                            'no-store',
                            'HTTPS',
                            'PII',
                            'Server-side authorization',
                        ],
                    },
                ],
            },
        ],
    }),
];

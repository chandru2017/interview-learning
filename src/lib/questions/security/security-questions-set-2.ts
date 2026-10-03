import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const securityQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'sc-6',
        topicId: 'security',
        title: 'CORS vs CSRF.',
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
                            'CORS is a browser rule about which sites can read responses from your server.',
                            'CSRF is an attack that tricks a logged-in user into sending a request.',
                            'CORS does not stop CSRF by itself.',
                            'You need both correct CORS settings and CSRF protection.',
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
                            '**CORS** - a **browser security mechanism** (a relaxation of SOP) controlling cross-origin **reading** of responses.',
                            "**CSRF** - an **attack** that abuses automatically attached credentials to make a victim's browser **send** state-changing requests.",
                            '**Direction** - CORS is about who can read data; CSRF is about who can cause actions.',
                            '**Why CORS does not stop CSRF** - simple cross-site requests (form POST) are sent anyway; CORS only blocks the attacker from reading the response, but the action already happened.',
                            '**Where CORS helps** - non-simple requests (custom headers, JSON) trigger a preflight, so a correct CORS policy blocks many forged JSON requests, but this is incidental, not a CSRF defense to rely on.',
                            '**Where CORS hurts** - a permissive config (reflect origin + credentials) lets attacker pages read authenticated responses, which is worse than CSRF.',
                            '**Defenses** - CORS: strict allowlist; CSRF: SameSite cookies, CSRF tokens, Origin checks, safe GET.',
                            '**Remember** - neither protects against XSS, which can bypass both.',
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
                        text: `Aspect          | CORS                               | CSRF
    ----------------|------------------------------------|------------------------------------
    What is it      | Browser mechanism (SOP relaxation) | Attack on authenticated sessions
    Controls        | Who can READ cross-origin response | Who can TRIGGER actions
    Configured by   | Server response headers            | Server design (tokens, SameSite)
    Stops CSRF?     | No (request is still sent)         | n/a
    Risk if wrong   | Data leak to other origins         | Unauthorized actions as the user
    Main defenses   | Origin allowlist, no wildcard+creds| SameSite, CSRF token, Origin check`,
                    },
                    {
                        type: 'highlight',
                        text: 'The two solve different problems: CORS governs reads, CSRF protection governs unwanted writes.',
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
                        text: 'In Archer Review, we configured CORS with a strict allowlist for reads and separately added SameSite cookies and CSRF tokens for write requests.',
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
                            "CORS is a browser mechanism controlling which origins can read cross-origin responses, while CSRF is an attack that makes a victim's browser send unwanted state-changing requests.",
                            'CORS does not prevent CSRF because simple requests are still sent, even if the response cannot be read.',
                            'I configure CORS with a strict allowlist and protect writes with SameSite, CSRF tokens and Origin checks.',
                            'A permissive CORS config can leak data, so it needs care.',
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
                        text: '**Interviewer: "We have strict CORS, so we are safe from CSRF, right?" What do you answer?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No. Cross-site form posts are simple requests and still reach the server with cookies.',
                            'We also need SameSite cookies, CSRF tokens or Origin checks.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: "**Attacker site can read your user's profile via fetch from evil.com. Is this CORS or CSRF?**",
                    },
                    {
                        type: 'bullets',
                        items: [
                            'CORS misconfiguration (data leak): server allowed the attacker origin with credentials.',
                            'Fix by allowlisting only trusted origins.',
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
                        items: ['CORS', 'CSRF', 'Same-Origin Policy', 'Read vs write', 'Preflight', 'SameSite'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'sc-7',
        topicId: 'security',
        title: 'What is Content Security Policy?',
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
                            'CSP is a security header that tells the browser what content is allowed to load on your page.',
                            'You can allow scripts, images and styles only from trusted sources.',
                            'It helps stop XSS attacks.',
                            'If a script is not allowed, the browser blocks it.',
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
                            'CSP is an HTTP response header (or meta tag) defining an **allowlist of sources for each resource type**; the browser blocks anything else.',
                            '**Key directives** - default-src, script-src, style-src, img-src, connect-src, font-src, frame-src, object-src, base-uri, form-action, frame-ancestors (clickjacking protection).',
                            '**XSS mitigation** - blocks inline scripts and eval unless explicitly allowed, so injected scripts do not run.',
                            "**Nonces and hashes** - allow specific inline scripts via a per-request random nonce (script-src 'nonce-xyz') or hash; 'strict-dynamic' lets trusted scripts load others.",
                            "**Avoid** - 'unsafe-inline' and 'unsafe-eval', and wildcard or broad CDN allowlists that attackers can abuse.",
                            '**Report-Only mode** - Content-Security-Policy-Report-Only plus report-to to test without breaking the site, then enforce.',
                            "**Trusted Types** - require-trusted-types-for 'script' to lock down DOM XSS sinks.",
                            '**Limits** - defense in depth only; it does not fix vulnerable code, and misconfigured policies give false confidence.',
                            '**Next.js** - set via headers in config or a proxy/middleware with a nonce; nonces require dynamic rendering.',
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
                        text: `// Example header (strict, nonce-based)
    Content-Security-Policy:
    default-src 'self';
    script-src 'self' 'nonce-R4nd0m' 'strict-dynamic';
    style-src 'self' 'nonce-R4nd0m';
    img-src 'self' data: https://cdn.example.com;
    connect-src 'self' https://api.example.com;
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
    object-src 'none';

    // Test first without breaking users
    Content-Security-Policy-Report-Only: default-src 'self'; report-to csp-endpoint

    // Next.js: nonce generated per request in proxy/middleware
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');`,
                    },
                    {
                        type: 'highlight',
                        text: 'Only scripts with the correct nonce and allowed sources run; framing and plugin content are blocked.',
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
                        text: 'In Archer Review, we rolled out CSP in report-only mode first, fixed violations from third-party scripts and then enforced a nonce-based policy.',
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
                            'CSP is a header that tells the browser which sources of scripts, styles, images and connections are allowed.',
                            'It mainly mitigates XSS by blocking inline and unauthorized scripts, using nonces or hashes for approved inline code.',
                            'I roll it out in report-only mode first, avoid unsafe-inline and broad allowlists, and use frame-ancestors against clickjacking.',
                            'It is defense in depth and does not replace fixing the vulnerability.',
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
                        text: '**After enabling CSP, the site breaks because of inline scripts and analytics. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use Report-Only to see violations, then move inline scripts to files or add nonces/hashes.',
                            'Allow only the specific analytics origins you need.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: "**Team wants to add 'unsafe-inline' to make CSP work. Your response?**",
                    },
                    {
                        type: 'bullets',
                        items: [
                            'It defeats XSS protection; use nonces or hashes instead.',
                            'Refactor inline handlers and styles into files or use a nonce.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You need to prevent your site from being embedded in iframes (clickjacking). How?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            "Use CSP frame-ancestors 'none' or 'self'.",
                            'X-Frame-Options can be added for legacy browsers.',
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
                            'CSP',
                            'script-src',
                            'Nonce',
                            'strict-dynamic',
                            'Report-Only',
                            'frame-ancestors',
                            'Trusted Types',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'sc-8',
        topicId: 'security',
        title: 'Where should authentication tokens be stored?',
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
                            'Best choice for most web apps: an HttpOnly, Secure, SameSite cookie set by the server.',
                            'Avoid localStorage for tokens because JavaScript (and XSS attackers) can read it.',
                            'Short-lived tokens can be kept in memory.',
                            'Always use HTTPS.',
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
                            'There is **no perfect place**; choose based on threats (XSS vs CSRF) and architecture.',
                            '**HttpOnly + Secure + SameSite cookie (recommended)** - JavaScript cannot read it, so XSS cannot steal the token directly (XSS can still make requests as the user). Needs CSRF protection (SameSite + token/Origin).',
                            '**localStorage/sessionStorage** - easy but readable by any script; one XSS exposes the token. Avoid for sensitive tokens.',
                            '**In-memory (JS variable)** - not persisted, harder to steal after the fact, but lost on refresh; pair with a refresh mechanism.',
                            '**Common secure pattern** - short-lived access token in memory + refresh token in an HttpOnly cookie with rotation and reuse detection.',
                            '**BFF (Backend for Frontend)** - the server/Next.js holds tokens and the browser only has a session cookie; tokens never reach JS. Strong option for SPAs/OAuth.',
                            '**Cookie flags** - HttpOnly, Secure, SameSite=Lax/Strict, narrow Path/Domain, short Max-Age, __Host- prefix.',
                            '**Also** - never put tokens in URLs, logs or analytics; keep expiries short; support revocation/logout; enable CSP to reduce XSS.',
                            'Mobile apps use platform secure storage (Keychain/Keystore), not browser storage.',
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
                        text: `// Server sets the session cookie (JS cannot read it)
    Set-Cookie: __Host-session=eyJ...; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=900

    // Refresh token cookie scoped to the refresh endpoint
    Set-Cookie: refresh=abc...; Path=/auth/refresh; Secure; HttpOnly; SameSite=Strict; Max-Age=1209600

    // Client: let the browser send the cookie
    fetch('/api/me', { credentials: 'include' });

    // Avoid
    localStorage.setItem('token', jwt);     // readable by any injected script`,
                    },
                    {
                        type: 'highlight',
                        text: 'Cookies with HttpOnly and Secure keep tokens away from JavaScript, and the refresh token is limited to one path.',
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
                        text: 'In Archer Review, sessions lived in HttpOnly Secure SameSite cookies set by the server, so no token was ever exposed to client-side JavaScript.',
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
                            'I prefer HttpOnly, Secure, SameSite cookies because JavaScript cannot read them, combined with CSRF protection.',
                            'I avoid localStorage for tokens because XSS can steal them.',
                            'A common pattern is short-lived access tokens in memory with a refresh token in an HttpOnly cookie, or a BFF that keeps tokens server-side.',
                            'I keep expiry short, support revocation, and reduce XSS risk with CSP.',
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
                        text: '**Existing SPA stores JWT in localStorage. How do you migrate with minimal disruption?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Move to a server-set HttpOnly cookie (or BFF) and add CSRF protection.',
                            'Support both temporarily, then remove localStorage usage and revoke old tokens.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You must keep an access token in JS for a third-party API. How do you limit risk?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Keep it in memory, short-lived, with minimal scopes.',
                            'Use refresh rotation via HttpOnly cookie, strict CSP and avoid logging it.',
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
                        items: ['HttpOnly', 'Secure', 'SameSite', 'localStorage', 'Refresh token', 'BFF', 'XSS'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'sc-9',
        topicId: 'security',
        title: 'JWT vs session-based authentication.',
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
                            'Session auth: the server stores session data and gives the browser a session ID cookie.',
                            'JWT auth: the server gives a signed token containing user info, and the client sends it with each request.',
                            'Sessions are easy to revoke; JWTs are easy to scale but harder to revoke.',
                            'Both can be used securely if implemented correctly.',
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
                            '**Session-based (stateful)** - server keeps session state (memory/Redis/DB); browser holds an opaque ID in a cookie. Logout, ban or role change takes effect immediately.',
                            '**JWT (stateless)** - signed (JWS) token with claims (sub, exp, role); server verifies signature without a lookup. Easy to scale across services and APIs.',
                            '**Revocation** - sessions: delete the record. JWT: hard until expiry; solve with short expiry + refresh tokens, a denylist, or token versioning.',
                            '**Size and transport** - session ID is small; JWT is larger and sent on every request.',
                            '**Security pitfalls (JWT)** - weak secrets, accepting alg none/algorithm confusion, no expiry/long expiry, sensitive data in payload (it is only encoded, not encrypted), storing in localStorage, not validating iss/aud/exp.',
                            '**Scaling** - sessions need a shared store for multiple servers; JWT works well for microservices and third-party APIs.',
                            '**Use sessions for** - traditional web apps, same-site apps, when immediate revocation matters.',
                            '**Use JWT for** - service-to-service auth, mobile/API clients, OAuth/OIDC tokens (short-lived).',
                            '**Hybrid is common** - session cookie for browser (BFF) and JWT internally between services.',
                            'JWT is a token format; "JWT vs cookies" is a false comparison, as a JWT can be stored in a cookie too.',
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
                        text: `// Session: opaque ID, state on the server
    Set-Cookie: sid=9f8a7c...; HttpOnly; Secure; SameSite=Lax
    server: sessions.get('9f8a7c...') -> { userId: 42, role: 'user' }
    logout: sessions.delete('9f8a7c...')       // immediate revocation

    // JWT: signed claims, verified without a lookup
    import jwt from 'jsonwebtoken';
    const token = jwt.sign({ sub: '42', role: 'user' }, process.env.JWT_SECRET, {
    algorithm: 'HS256', expiresIn: '15m', issuer: 'api.example.com', audience: 'web',
    });
    const payload = jwt.verify(token, process.env.JWT_SECRET, {
    algorithms: ['HS256'], issuer: 'api.example.com', audience: 'web',   // always pin algorithm
    });`,
                    },
                    {
                        type: 'highlight',
                        text: 'Sessions keep state on the server and can be revoked instantly; JWTs are self-contained, so keep them short-lived and verify algorithm, issuer and audience.',
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
                        text: 'In Archer Review, browser authentication used server-side sessions in secure cookies for easy revocation, while short-lived signed tokens were used for service-level calls.',
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
                            'Sessions are stateful: the server stores data and the client holds an opaque ID, so revocation is immediate.',
                            'JWTs are stateless signed tokens that scale well across services, but revocation is hard, so I keep them short-lived with refresh tokens.',
                            'JWT pitfalls include weak secrets, algorithm confusion, no expiry, sensitive data in the payload and localStorage storage.',
                            'I choose sessions for typical web apps and JWT for APIs and service-to-service auth, sometimes combined.',
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
                        text: '**A user is banned but can still call the API for 30 minutes. Why, and how do you fix it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Their JWT is valid until expiry and the server does not check state.',
                            'Use shorter access token expiry, a denylist/token version check, or move to server sessions for that flow.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Microservices need to trust the caller identity without a shared session store. Approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Issue signed short-lived JWTs (with iss, aud, exp) verified by each service using public keys (JWKS).',
                            'Keep tokens minimal and rotate keys.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Someone proposes putting user email and role permissions in the JWT payload. Is that fine?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'The payload is only encoded, so anyone can read it; avoid sensitive data.',
                            'Keep claims minimal and re-check permissions server-side for sensitive actions.',
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
                        items: ['Session', 'JWT', 'Stateless', 'Revocation', 'Refresh token', 'Claims', 'Signature'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'sc-10',
        topicId: 'security',
        title: 'What is OAuth?',
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
                            'OAuth lets an app access your data on another service without knowing your password.',
                            'Example: "Login with Google" or letting an app read your GitHub repos.',
                            'You approve access, and the app gets a token with limited permissions.',
                            'OAuth is about authorization; OpenID Connect adds login (authentication).',
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
                            'OAuth 2.0 is an **authorization framework for delegated access**: a user grants a client limited access to resources without sharing credentials.',
                            '**Roles** - Resource Owner (user), Client (your app), Authorization Server (issues tokens), Resource Server (API).',
                            '**Authorization Code flow with PKCE** - recommended for web, SPA and mobile apps: redirect to authorize, receive a code, exchange it (with PKCE code_verifier) for tokens at the token endpoint.',
                            '**Tokens** - access token (short-lived, used on APIs), refresh token (get new access tokens, rotate it), scopes limit permissions.',
                            '**OpenID Connect (OIDC)** - identity layer on OAuth 2.0 that adds an ID token (JWT) and userinfo for **authentication** ("who is the user").',
                            '**Security essentials** - exact redirect URI matching, state parameter (CSRF), PKCE, validate ID token (iss, aud, exp, nonce), HTTPS, least-privilege scopes, secure token storage (BFF/server-side).',
                            '**Avoid** - Implicit flow and Resource Owner Password flow (deprecated); client secrets in frontend code.',
                            '**Other flows** - Client Credentials (machine-to-machine), Device Code (TVs/CLIs).',
                            'OAuth alone is not authentication; use OIDC for login.',
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
                        text: `// 1. Redirect user to the authorization server (with PKCE and state)
    const authUrl = 'https://auth.example.com/authorize?' + new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: 'https://app.example.com/callback',
    scope: 'openid profile email',
    state: randomState,                 // CSRF protection
    code_challenge: challenge,          // PKCE
    code_challenge_method: 'S256',
    });

    // 2. Callback: exchange the code for tokens (preferably on the server)
    POST https://auth.example.com/token
    grant_type=authorization_code&code=...&redirect_uri=...&client_id=...&code_verifier=...

    // 3. Call the API with the access token
    GET /api/resource   Authorization: Bearer <access_token>`,
                    },
                    {
                        type: 'highlight',
                        text: 'The user authenticates at the provider, the app gets a one-time code, and exchanges it for tokens using PKCE.',
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
                        text: 'In Archer Review, social login used Authorization Code flow with PKCE through a maintained auth library, with token exchange handled on the server.',
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
                            "OAuth 2.0 is an authorization framework that lets an app access resources on a user's behalf using scoped tokens, without sharing the password.",
                            'I use Authorization Code flow with PKCE, with state, exact redirect URIs and short-lived access tokens with refresh rotation.',
                            'OpenID Connect builds on OAuth to provide authentication through an ID token.',
                            'I avoid the implicit flow and never put client secrets in frontend code.',
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
                        text: '**Your SPA uses the Implicit flow and returns tokens in the URL. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Migrate to Authorization Code flow with PKCE; tokens in URLs leak via history and logs.',
                            'Prefer a BFF to keep tokens off the browser.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**OAuth callback accepts any redirect_uri. What is the risk?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Open redirect lets attackers steal authorization codes/tokens.',
                            'Register exact redirect URIs and validate them strictly; also verify the state parameter.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Team says "we use OAuth for login", but only access tokens are checked. Is that right?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'OAuth alone is for authorization; for login use OpenID Connect and validate the ID token.',
                            'Check iss, aud, exp and nonce.',
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
                            'OAuth 2.0',
                            'Authorization Code + PKCE',
                            'Scopes',
                            'Access token',
                            'Refresh token',
                            'OIDC',
                            'Redirect URI',
                        ],
                    },
                ],
            },
        ],
    }),
];

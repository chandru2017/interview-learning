import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const bwaQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'br-6',
        topicId: 'browser-web-api',
        title: 'What is HTTP/3?',
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
                            'HTTP/3 is the newest HTTP version.',
                            'It uses QUIC over UDP instead of TCP.',
                            'It is faster on slow or unstable networks like mobile.',
                            'Connections start faster and handle packet loss better.',
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
                            'HTTP/3 maps HTTP semantics onto **QUIC**, a transport built on UDP with TLS 1.3 integrated.',
                            '**No transport head-of-line blocking** - each stream is independent, so a lost packet only delays its own stream.',
                            '**Faster setup** - transport + TLS handshake combined (1 RTT, 0-RTT for resumed connections).',
                            '**Connection migration** - connection ID survives network changes (Wi-Fi to mobile data).',
                            '**Always encrypted** - TLS 1.3 is built in.',
                            '**QPACK** - header compression adapted to out-of-order streams.',
                            '**Discovery** - browsers learn about h3 via the Alt-Svc header (or HTTPS DNS records) and fall back to HTTP/2 if UDP is blocked.',
                            '**Trade-offs** - UDP may be blocked or rate limited in some networks, higher CPU use on servers, needs CDN/server support.',
                            'Biggest gains are on high-latency, lossy mobile networks.',
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
                        text: `# Server announces HTTP/3 support
    HTTP/2 200 OK
    alt-svc: h3=":443"; ma=86400

    # Test
    curl --http3 -I https://example.com

    # DevTools Network tab -> Protocol column shows "h3"`,
                    },
                    {
                        type: 'highlight',
                        text: 'The server advertises h3 with Alt-Svc, and the browser upgrades on later connections.',
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
                        text: 'In Archer Review, enabling HTTP/3 on the CDN helped mobile users on unstable connections, with automatic fallback to HTTP/2 when needed.',
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
                            'HTTP/3 runs HTTP over QUIC, which uses UDP and has TLS 1.3 built in.',
                            'It avoids transport-level head-of-line blocking, connects faster and supports connection migration.',
                            'It is advertised via Alt-Svc and browsers fall back to HTTP/2 if blocked.',
                            'It benefits mobile and lossy networks the most.',
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
                        text: '**You enabled HTTP/3 but DevTools still shows h2. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'First visit uses h2 and learns h3 through Alt-Svc; later requests may use h3.',
                            'UDP 443 might be blocked by a firewall or network, so the browser falls back.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Mobile users switch between Wi-Fi and 4G and downloads keep restarting on HTTP/2. What helps?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'HTTP/3 connection migration keeps the connection alive across network changes.',
                            'Enable h3 at the CDN.',
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
                        items: ['QUIC', 'UDP', 'Head-of-line blocking', '0-RTT', 'Connection migration', 'Alt-Svc'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-7',
        topicId: 'browser-web-api',
        title: 'What is browser caching?',
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
                            'The browser stores copies of files like CSS, JS and images.',
                            'Next time, it reuses them instead of downloading again.',
                            'This makes pages load faster and saves data.',
                            'The server controls caching with headers like Cache-Control.',
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
                            'Browser (HTTP) caching stores responses locally according to **HTTP caching headers**.',
                            '**Cache-Control** - max-age, no-cache (revalidate each time), no-store (never store), public/private, immutable, stale-while-revalidate.',
                            '**Validation** - ETag/If-None-Match and Last-Modified/If-Modified-Since: server answers **304 Not Modified** without a body.',
                            '**Freshness** - while fresh, the browser uses the cache without any request; after expiry, it revalidates.',
                            '**Strategy** - hashed assets (app.3f2a1.js) cached for a year with immutable; HTML with no-cache or short max-age so new deployments are picked up.',
                            '**Vary** - cache key depends on headers like Accept-Encoding.',
                            '**Other caches** - memory cache, disk cache, Service Worker Cache API, back/forward cache (bfcache), CDN/shared caches.',
                            '**Pitfalls** - stale assets after deploy (no versioning), caching private data on shared caches (use private/no-store).',
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
                        text: `# Hashed static assets: cache for 1 year
    Cache-Control: public, max-age=31536000, immutable

    # HTML: always revalidate
    Cache-Control: no-cache
    ETag: "v123"

    # Sensitive API data
    Cache-Control: no-store

    # Conditional request / response
    GET /app.js
    If-None-Match: "abc123"
    -> 304 Not Modified`,
                    },
                    {
                        type: 'highlight',
                        text: 'Long cache for versioned files, revalidation for HTML, and no storage for sensitive data.',
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
                        text: 'In Archer Review, build output had hashed filenames with long-term caching while HTML was revalidated, so deployments were picked up immediately and repeat visits were fast.',
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
                            'Browser caching stores responses locally, controlled by headers like Cache-Control, ETag and Last-Modified.',
                            'Versioned assets get long max-age with immutable, and HTML uses no-cache or short caching.',
                            'Revalidation with ETag returns 304 without downloading the body again.',
                            'It reduces latency, bandwidth and server load.',
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
                        text: '**You deployed a fix but users still see the old JavaScript. Why and how do you fix it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'The old file is cached with a long max-age under the same name.',
                            'Use content-hashed filenames and keep HTML uncached or revalidated; as a stop-gap, purge CDN and rename the file.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A banking page shows account data after logout when pressing Back. How do you prevent it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Send Cache-Control: no-store for sensitive responses.',
                            'Also clear sensitive client state on logout.',
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
                        items: ['Cache-Control', 'ETag', '304', 'max-age', 'immutable', 'Revalidation'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-8',
        topicId: 'browser-web-api',
        title: 'Explain cookies, localStorage, and sessionStorage.',
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
                            'Cookies are small data stored by the browser and sent to the server with every request.',
                            'localStorage stores data in the browser permanently until you clear it.',
                            'sessionStorage stores data only for one tab and clears when the tab closes.',
                            'Use cookies for sessions, and storage for simple client-side data.',
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
                            '**Cookies** - ~4KB each, sent automatically with matching requests, can be set by server (Set-Cookie) or JS. Attributes: Expires/Max-Age, Domain, Path, **HttpOnly**, **Secure**, **SameSite**.',
                            '**localStorage** - ~5MB per origin, persistent, synchronous API, accessible to any JS on the origin, never sent to the server automatically.',
                            '**sessionStorage** - same API, scoped to the tab/session; cleared when the tab closes.',
                            '**Security** - HttpOnly cookies cannot be read by JS (protects from XSS token theft); localStorage is exposed to XSS, so do not store auth tokens there; SameSite helps against CSRF.',
                            '**Performance** - cookies add bytes to every request; localStorage is synchronous and can block the main thread.',
                            '**Strings only** - Web Storage stores strings, so JSON.stringify/parse.',
                            '**Alternatives** - IndexedDB for large structured data, Cache API for responses.',
                            '**Use cases** - cookies: auth sessions, server-needed preferences; localStorage: theme, UI state; sessionStorage: wizard/form drafts per tab.',
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
                        text: `// Server-set secure session cookie
    Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=86400

    // localStorage (persistent, string only)
    localStorage.setItem('theme', 'dark');
    const theme = localStorage.getItem('theme');
    localStorage.setItem('prefs', JSON.stringify({ lang: 'en' }));

    // sessionStorage (cleared when tab closes)
    sessionStorage.setItem('draft', 'Hello');`,
                    },
                    {
                        type: 'highlight',
                        text: 'The auth cookie is hidden from JavaScript, while harmless preferences live in Web Storage.',
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
                        text: 'In Archer Review, auth used an HttpOnly cookie, theme and UI preferences used localStorage, and in-progress exam answers used sessionStorage per tab.',
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
                            'Cookies are sent with every matching request and can be HttpOnly, Secure and SameSite, so they suit authentication sessions.',
                            'localStorage is persistent per origin, about 5MB, and not sent to the server.',
                            'sessionStorage is scoped to a tab and clears when it closes.',
                            'I avoid storing sensitive tokens in Web Storage because XSS can read them.',
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
                        text: '**A teammate stores the JWT access token in localStorage. What do you recommend?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'It can be stolen via XSS. Prefer an HttpOnly, Secure, SameSite cookie set by the server.',
                            'Also harden against XSS with CSP and input sanitization.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Your site feels slow and requests carry 8KB of headers. What could be the reason?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Too many or large cookies are sent with every request, including static asset requests on the same domain.',
                            'Reduce cookie size, scope them with Path/Domain, and serve static files from a cookieless domain/CDN.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**User opens the same form in two tabs and the data mixes up. Which storage was used?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Probably localStorage (shared across tabs).',
                            'Use sessionStorage for per-tab state, or namespace keys by tab/form id.',
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
                        items: ['Cookie', 'HttpOnly', 'SameSite', 'localStorage', 'sessionStorage', 'XSS', 'CSRF'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-9',
        topicId: 'browser-web-api',
        title: 'What is the Same-Origin Policy?',
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
                            'It is a browser security rule that stops a page from reading data of another website.',
                            'Two URLs have the same origin only if protocol, domain and port are the same.',
                            'It protects your logged-in data from malicious sites.',
                            'CORS is the way to safely allow exceptions.',
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
                            'An **origin = scheme + host + port**. Same-Origin Policy (SOP) restricts how a document or script from one origin can interact with resources from another.',
                            "**Blocks** - reading cross-origin responses via fetch/XHR, accessing another origin's DOM (iframes), reading its storage.",
                            '**Allows** - **embedding** cross-origin resources: img, script, link, iframe (display), form submissions, and sending requests (that is why CSRF exists).',
                            '**Examples** - https://a.com vs http://a.com (different), https://a.com vs https://a.com:8443 (different), https://a.com vs https://api.a.com (different, subdomain).',
                            '**Controlled relaxations** - CORS headers, postMessage, document.domain (deprecated), JSONP (old).',
                            '**Related protections** - CSP, X-Frame-Options/frame-ancestors, SameSite cookies, COOP/COEP.',
                            'SOP protects reading, not sending: the request may still reach the server, so servers must not rely on SOP for security.',
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
                        text: `// Page at https://app.example.com
    fetch('https://app.example.com/api/me');        // same origin - OK
    fetch('https://api.example.com/me');            // different subdomain - blocked unless CORS allows
    fetch('http://app.example.com/api/me');         // different scheme - blocked unless CORS allows

    // Cross-origin communication between windows (safe way)
    iframe.contentWindow.postMessage({ type: 'ping' }, 'https://widget.example.com');`,
                    },
                    {
                        type: 'highlight',
                        text: 'Only the exact same scheme, host and port can freely read responses; others need explicit permission.',
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
                        text: 'In Archer Review, the front end and API were on different subdomains, so we configured CORS properly instead of disabling browser security.',
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
                            'The Same-Origin Policy stops scripts from one origin from reading data from another origin, where origin means scheme, host and port.',
                            'It still allows embedding resources like images and scripts and sending requests.',
                            'CORS is the controlled way to relax it.',
                            'I never rely on SOP alone for server security because requests can still be sent.',
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
                        text: '**Is http://example.com the same origin as https://example.com?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No, the scheme differs, so they are different origins.',
                            'The same applies to different ports and subdomains.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: "**Malicious site tries to read your logged-in user's data from your API using fetch. What stops it?**",
                    },
                    {
                        type: 'bullets',
                        items: [
                            'SOP/CORS blocks the response from being read by the other origin.',
                            'Also use SameSite cookies and CSRF protection since the request itself may still be sent.',
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
                        items: ['Origin', 'Scheme/host/port', 'Cross-origin', 'CORS', 'postMessage', 'CSRF'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-10',
        topicId: 'browser-web-api',
        title: 'What is CORS?',
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
                            'CORS means Cross-Origin Resource Sharing.',
                            'It lets a server say which other websites may access its data.',
                            'The server sends headers like Access-Control-Allow-Origin.',
                            'If the headers are missing, the browser blocks the response from JavaScript.',
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
                            'CORS is an **HTTP-header based protocol** that lets servers opt in to cross-origin reads, relaxing the Same-Origin Policy.',
                            '**Simple requests** - GET/HEAD/POST with basic headers and content types: sent directly; browser checks Access-Control-Allow-Origin on the response.',
                            '**Preflight** - for other methods (PUT, DELETE, PATCH), custom headers (Authorization) or JSON content type, browser first sends an **OPTIONS** request with Access-Control-Request-Method/Headers; server must reply with Allow-Methods/Allow-Headers.',
                            '**Key headers** - Access-Control-Allow-Origin, -Methods, -Headers, -Credentials, -Max-Age (cache preflight), -Expose-Headers.',
                            '**Credentials** - to send cookies use credentials: "include" on the client and Allow-Credentials: true on the server; Allow-Origin cannot be * in that case, it must be a specific origin.',
                            '**Fixes belong on the server** (or a proxy) - not in the front end. Dev proxies hide it locally but production still needs headers.',
                            '**Gotchas** - CORS errors can also come from a failed/404/500 preflight or missing headers on error responses; add Vary: Origin when reflecting origins.',
                            'CORS is enforced by browsers only; it does not protect the server from curl/other clients.',
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
                        text: `// Client
    fetch('https://api.example.com/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer token' },
    credentials: 'include',
    body: JSON.stringify({ name: 'Book' }),
    });

    // Express server
    app.use(cors({
    origin: ['https://app.example.com'],     // allowlist, not '*' with credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 600,
    }));`,
                    },
                    {
                        type: 'highlight',
                        text: 'The browser sends a preflight first, and the server must explicitly allow the origin, method and headers.',
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
                        text: 'In Archer Review, the API allowlisted the front-end origins, handled OPTIONS preflight and cached it with Max-Age, which fixed errors without using a wildcard.',
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
                            'CORS lets a server declare which origins may read its responses, relaxing the Same-Origin Policy.',
                            'Non-simple requests trigger an OPTIONS preflight that the server must answer correctly.',
                            'With cookies, the origin must be explicit and credentials allowed.',
                            'The fix is on the server or proxy; CORS is enforced only by browsers.',
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
                        text: '**Frontend gets "blocked by CORS policy" but the API works in Postman. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Postman is not a browser, so it does not enforce CORS.',
                            'The server must send the correct Access-Control-* headers for the front-end origin.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You set Access-Control-Allow-Origin: * and cookies still do not work. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'With credentials, wildcard origin is not allowed.',
                            'Return the specific origin, set Allow-Credentials: true, and use credentials: "include" on the client.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Preflight requests slow down every API call. What can you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Set Access-Control-Max-Age to cache preflight responses.',
                            'Reduce non-simple headers or serve the API on the same origin/through a reverse proxy.',
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
                            'CORS',
                            'Preflight',
                            'OPTIONS',
                            'Access-Control-Allow-Origin',
                            'Credentials',
                            'Allowlist',
                        ],
                    },
                ],
            },
        ],
    }),
];

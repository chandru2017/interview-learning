import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const bwaQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'br-1',
        topicId: 'browser-web-api',
        title: 'What happens when you enter a URL into the browser?',
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
                            'The browser checks the URL and finds the server address using DNS.',
                            'It connects to the server (TCP, and TLS for HTTPS) and sends an HTTP request.',
                            'The server replies with HTML, and the browser downloads CSS, JS and images.',
                            'The browser builds the page and shows it on the screen.',
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
                            'It is a chain of steps across network and rendering. Know the order and where time is spent.',
                            '**1. URL parsing** - scheme, host, port, path; browser may apply HSTS to upgrade to HTTPS.',
                            '**2. Cache check** - HTTP cache, service worker, or bfcache may answer without the network.',
                            '**3. DNS lookup** - domain resolved to an IP address.',
                            '**4. TCP connection** - 3-way handshake (QUIC/UDP for HTTP/3).',
                            '**5. TLS handshake** - certificate verification and key exchange for HTTPS.',
                            '**6. HTTP request/response** - GET request; server may go through CDN, load balancer, app server, database; response with status, headers, HTML.',
                            '**7. Parsing and rendering** - HTML to DOM, CSS to CSSOM, render tree, layout, paint, composite; JS can block or modify.',
                            '**8. Subresources** - CSS, JS, fonts, images fetched (often in parallel); the page becomes interactive after JS runs.',
                            'Performance levers at each step: DNS prefetch, preconnect, CDN, caching, compression, critical CSS, async/defer.',
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
                        text: `// Where the time goes (Navigation Timing API)
    const [nav] = performance.getEntriesByType('navigation');
    console.log({
    dns:  nav.domainLookupEnd - nav.domainLookupStart,
    tcp:  nav.connectEnd - nav.connectStart,       // includes TLS time for HTTPS
    tls:  nav.secureConnectionStart ? nav.connectEnd - nav.secureConnectionStart : 0,
    ttfb: nav.responseStart - nav.requestStart,
    dom:  nav.domContentLoadedEventEnd - nav.responseEnd,
    load: nav.loadEventEnd - nav.startTime,
    });`,
                    },
                    {
                        type: 'highlight',
                        text: 'The Navigation Timing API shows how long DNS, connection, TLS, server response and DOM processing took.',
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
                        text: 'In Archer Review, when the first page load was slow, we used the Network tab and Navigation Timing to see whether time went to DNS, server response (TTFB) or JavaScript, and fixed the largest part first.',
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
                            'The browser parses the URL, checks caches, resolves DNS, opens a TCP connection and TLS handshake, then sends an HTTP request.',
                            'The server returns HTML and the browser builds the DOM and CSSOM, creates the render tree, then does layout, paint and composite.',
                            'Subresources like CSS, JS and images load in parallel and JS can block rendering.',
                            'I optimize each stage using CDN, caching, preconnect, compression and critical CSS.',
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
                        text: '**Users in another country report that your site takes 6 seconds to load. Where do you start?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check the waterfall: DNS, connection, TTFB and download time.',
                            'Use a CDN and edge caching to bring content closer.',
                            'Reduce payload with compression and caching, and use preconnect for third-party hosts.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**TTFB is high but the front-end bundle is small. What does that tell you?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'The delay is on the server side (app, database, or network distance).',
                            'Add caching, optimize queries, use a CDN or edge rendering.',
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
                        items: ['DNS', 'TCP', 'TLS', 'HTTP request', 'DOM', 'Render tree', 'TTFB'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-2',
        topicId: 'browser-web-api',
        title: 'Explain DNS lookup.',
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
                            'DNS converts a domain name like example.com into an IP address.',
                            'Browsers need the IP address to connect to the server.',
                            'The result is cached so the next lookup is faster.',
                            'Think of DNS as the phone book of the internet.',
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
                            'DNS (Domain Name System) is a distributed, hierarchical database mapping names to records.',
                            '**Cache order** - browser cache, OS cache (and hosts file), then the configured recursive resolver (ISP, 8.8.8.8, 1.1.1.1).',
                            '**Recursive resolution** - resolver asks a root server, then the TLD server (.com), then the authoritative name server of the domain, which returns the answer.',
                            '**Record types** - A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT (verification/SPF), NS (name servers).',
                            '**TTL** - how long answers can be cached; low TTL helps fast failover, high TTL reduces lookups.',
                            '**Performance** - DNS adds latency to the first connection per hostname; use fewer distinct domains, dns-prefetch and preconnect.',
                            '**Security and privacy** - DNSSEC (integrity), DoH/DoT (encrypted queries), DNS poisoning risks.',
                            '**GeoDNS / CDN** - DNS can return different IPs based on user location.',
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
                        text: `<!-- Resolve the domain early -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    
    <!-- Resolve DNS + connect + TLS early (use for critical origins) -->
    <link rel="preconnect" href="https://cdn.example.com" crossorigin>
    
    # Command line
    nslookup example.com
    dig example.com A +short`,
                    },
                    {
                        type: 'highlight',
                        text: 'dns-prefetch only resolves the name; preconnect also opens TCP and TLS so the first request is faster.',
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
                        text: 'In Archer Review, we added preconnect for the CDN and font hosts, which reduced the time before the first asset downloads started.',
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
                            'DNS translates a domain name into an IP address.',
                            'The browser checks its cache and the OS cache, then asks a recursive resolver, which queries root, TLD and authoritative servers.',
                            'Results are cached based on TTL.',
                            'I reduce DNS cost with fewer third-party domains, dns-prefetch and preconnect.',
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
                        text: '**After changing your server IP, some users still reach the old server. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'DNS records are cached until their TTL expires (in resolvers, OS, browser).',
                            'Lower the TTL before planned changes, then increase it again.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Your page uses 10 different third-party domains and loads slowly. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Reduce third-party domains or self-host critical assets.',
                            'Use preconnect for the critical ones and dns-prefetch for the rest.',
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
                        items: ['DNS', 'Resolver', 'A record', 'CNAME', 'TTL', 'dns-prefetch', 'preconnect'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-3',
        topicId: 'browser-web-api',
        title: 'Explain TCP and TLS at a high level.',
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
                            'TCP creates a reliable connection between browser and server.',
                            'It makes sure data arrives complete and in the right order.',
                            'TLS adds encryption on top of TCP, so no one can read or change the data.',
                            'This is what makes HTTPS secure.',
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
                            '**TCP** - reliable, ordered, connection-based transport. Uses a **3-way handshake** (SYN, SYN-ACK, ACK) which costs one round trip.',
                            '**TCP features** - retransmission of lost packets, ordering, flow control, congestion control (slow start).',
                            '**TLS** - provides encryption, authentication and integrity on top of TCP.',
                            '**TLS handshake** - client and server agree on version and cipher, server sends its certificate, keys are exchanged (ECDHE), then traffic is encrypted with a symmetric session key.',
                            '**TLS 1.3** - needs one round trip (and 0-RTT resume is possible); TLS 1.2 needs two.',
                            '**Certificates** - signed by a trusted Certificate Authority; browser verifies chain, domain name and expiry.',
                            '**Extensions** - SNI (which hostname), ALPN (negotiates HTTP/1.1, h2 or h3).',
                            '**Cost** - new connection = DNS + TCP + TLS round trips; reuse connections (keep-alive), HTTP/2 multiplexing, TLS session resumption.',
                            'HTTP/3 replaces TCP + TLS with QUIC (UDP-based, integrated TLS 1.3).',
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
                        text: `Client                         Server
                            | -- SYN ---------------------> |   TCP handshake
                            | <-------------- SYN, ACK ---- |   (1 round trip)
                            | -- ACK ---------------------> |
                            | -- ClientHello -------------> |   TLS 1.3 handshake
                            | <-- ServerHello, Certificate  |   (1 round trip)
                            | <-- Finished ---------------- |
                            | -- Finished + HTTP request -> |   encrypted application data
                            | <------------ HTTP response - |`,
                    },
                    {
                        type: 'highlight',
                        text: 'A new HTTPS connection needs about two round trips before the first request, which is why connection reuse and preconnect help.',
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
                        text: 'In Archer Review, enabling keep-alive, TLS 1.3 and HTTP/2 on the CDN reduced connection overhead for repeat requests.',
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
                            'TCP provides reliable, ordered delivery using a 3-way handshake.',
                            'TLS sits on top, authenticating the server with a certificate and encrypting data using a negotiated session key.',
                            'A new connection costs round trips, so I rely on keep-alive, HTTP/2 and TLS 1.3 to reduce latency.',
                            'HTTP/3 uses QUIC to combine transport and encryption.',
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
                        text: '**Users see "Your connection is not private". What could be wrong?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Expired or mismatched certificate (wrong domain), or missing intermediate certificate.',
                            'Check with the browser security panel or openssl and renew/fix the certificate chain.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**First request to your API is much slower than later ones. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'The first request pays for DNS, TCP and TLS setup.',
                            'Later requests reuse the connection (keep-alive/HTTP/2). Use preconnect to hide this cost.',
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
                        items: ['TCP handshake', 'TLS', 'Certificate', 'Round trip', 'ALPN', 'Session key'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-4',
        topicId: 'browser-web-api',
        title: 'How does HTTP/HTTPS work?',
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
                            'HTTP is a request and response protocol: the browser asks, the server answers.',
                            'A request has a method (GET, POST), URL and headers.',
                            'A response has a status code (200, 404, 500), headers and a body.',
                            'HTTPS is HTTP over TLS, so the data is encrypted.',
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
                            'HTTP is **stateless** application-layer protocol: each request carries everything needed (cookies/tokens for state).',
                            '**Request** - method, path, headers (Host, Accept, Cookie, Authorization), optional body.',
                            '**Response** - status line, headers (Content-Type, Cache-Control, Set-Cookie), body.',
                            '**Methods** - GET (read, safe/idempotent), POST (create), PUT/PATCH (update), DELETE; idempotency matters for retries.',
                            '**Status codes** - 2xx success, 3xx redirect, 4xx client error (401 vs 403, 404), 5xx server error.',
                            '**HTTPS** - HTTP inside TLS: confidentiality, integrity and server authentication. Protects against sniffing and tampering (man-in-the-middle).',
                            '**HSTS** - header telling browsers to always use HTTPS for the domain.',
                            '**Versions** - HTTP/1.1 (keep-alive, text), HTTP/2 (multiplexing), HTTP/3 (QUIC).',
                            'Mixed content (HTTP resources on an HTTPS page) is blocked or warned.',
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
                        text: `GET /api/users/42 HTTP/1.1
    Host: api.example.com
    Accept: application/json
    Authorization: Bearer eyJ...
    
    HTTP/1.1 200 OK
    Content-Type: application/json
    Cache-Control: private, max-age=60
    Strict-Transport-Security: max-age=31536000; includeSubDomains
    
    { "id": 42, "name": "Asha" }`,
                    },
                    {
                        type: 'highlight',
                        text: 'A simple request/response exchange, with headers controlling content type, caching and HTTPS enforcement.',
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
                        text: 'In Archer Review, we enforced HTTPS with HSTS, used proper status codes for API errors (401 vs 403 vs 404), and set Cache-Control per response type.',
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
                            'HTTP is a stateless request/response protocol with methods, headers, status codes and an optional body.',
                            'HTTPS is HTTP over TLS, adding encryption, integrity and server authentication.',
                            'I use HSTS to enforce HTTPS and correct status codes and caching headers for APIs.',
                            'State is maintained using cookies or tokens.',
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
                        text: '**A POST request to create an order times out. Is it safe for the client to retry automatically?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'POST is not idempotent, so retries can create duplicate orders.',
                            'Use an idempotency key so the server can deduplicate.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Page loaded over HTTPS shows a warning and some images are missing. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mixed content: images are requested over http://.',
                            'Update URLs to https or use protocol-relative/relative paths, and add upgrade-insecure-requests CSP if needed.',
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
                        items: ['HTTP methods', 'Status codes', 'Headers', 'Stateless', 'HTTPS', 'HSTS'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-5',
        topicId: 'browser-web-api',
        title: 'What is HTTP/2?',
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
                            'HTTP/2 is a faster version of HTTP.',
                            'It can send many requests at the same time over one connection.',
                            'It compresses headers to save data.',
                            'Websites load faster without code changes.',
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
                            'HTTP/2 keeps the same semantics as HTTP/1.1 but changes how data is **transported**.',
                            '**Binary framing** - messages split into frames instead of text.',
                            '**Multiplexing** - many parallel streams over a single TCP connection, which removes the HTTP/1.1 limit of ~6 connections per host and application-level head-of-line blocking.',
                            '**Header compression (HPACK)** - repeated headers like cookies are compressed.',
                            '**Stream prioritization** - hints for important resources first.',
                            '**Server push** - was designed to send resources early but is rarely used and removed from major browsers; prefer preload/103 Early Hints.',
                            '**Requires HTTPS in practice** in browsers.',
                            '**Limitation** - it still runs on TCP, so one lost packet blocks all streams (TCP-level head-of-line blocking), which HTTP/3 solves.',
                            '**Impact on practices** - HTTP/1.1 hacks (domain sharding, sprite sheets, huge concatenated bundles) matter less; smaller granular files cache better.',
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
                        text: `# Check protocol used in Chrome DevTools: Network tab -> Protocol column (h2)
    curl -I --http2 https://example.com
    
    # nginx example
    server {
    listen 443 ssl http2;
    ssl_certificate     /path/fullchain.pem;
    ssl_certificate_key /path/privkey.pem;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Enabling HTTP/2 is a server/CDN setting; browsers negotiate it automatically using ALPN during TLS.',
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
                        text: 'In Archer Review, serving through a CDN with HTTP/2 enabled improved loading of many small assets compared to HTTP/1.1, with no application code change.',
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
                            'HTTP/2 is a binary, multiplexed version of HTTP that sends many requests over one TCP connection.',
                            'It also compresses headers with HPACK and supports prioritization.',
                            'It removes the need for old HTTP/1.1 hacks like domain sharding.',
                            'Its limitation is TCP head-of-line blocking, which HTTP/3 addresses.',
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
                        text: '**A teammate says "bundle everything into one JS file because requests are expensive". Is that still true on HTTP/2?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Less so: multiplexing makes many small requests cheap.',
                            'Split by route/vendor for better caching, but avoid excessive tiny files.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Your site is on HTTP/1.1 and has many images. What quick wins do you get by upgrading?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Enable HTTP/2 on the server/CDN for multiplexing and header compression.',
                            'Verify with the DevTools protocol column.',
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
                            'Multiplexing',
                            'Binary framing',
                            'HPACK',
                            'Single connection',
                            'Head-of-line blocking',
                            'ALPN',
                        ],
                    },
                ],
            },
        ],
    }),
];

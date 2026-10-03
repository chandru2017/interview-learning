import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const gitCiCdQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'gc-1',
        topicId: 'git-cicd',
        title: 'Git merge vs rebase.',
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
                            'Both combine changes from one branch into another.',
                            'Merge keeps the full history and adds a merge commit.',
                            'Rebase moves your commits on top of the latest branch, making a straight, linear history.',
                            'Do not rebase branches that other people are using.',
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
                            '**Merge** - joins two histories with a **merge commit** (or fast-forwards if possible). History is non-destructive and shows when branches were integrated.',
                            '**Rebase** - **replays** your commits on top of another base, creating new commits (new hashes). History becomes linear and easier to read.',
                            '**Merge pros/cons** - safe for shared branches, preserves context; but history can become noisy with many merge commits.',
                            '**Rebase pros/cons** - clean linear history, easy bisect and revert; but rewrites history, so it can cause trouble if the branch is shared, and conflicts may repeat per commit.',
                            '**Golden rule** - never rebase commits that have been pushed and used by others (public/shared branches). Rebase your own local/feature branch only.',
                            '**Typical workflow** - rebase your feature branch onto main to update it (git pull --rebase / git rebase main), then merge via PR (squash merge, rebase merge or merge commit per team policy).',
                            '**Safe force push** - after rebasing a pushed personal branch, use git push --force-with-lease, not --force.',
                            '**Squash merge** - combine all branch commits into one on main; clean main history but loses individual commit detail.',
                            'Choose based on team policy; consistency matters more than the choice.',
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
                        text: `# Merge main into your feature branch (history preserved, merge commit)
    git checkout feature/login
    git merge main
    
    # Rebase your feature branch onto latest main (linear history)
    git checkout feature/login
    git fetch origin
    git rebase origin/main
    # resolve conflicts, then:
    git add .
    git rebase --continue
    git push --force-with-lease      # only for your own branch
    
    # Pull with rebase to avoid needless merge commits
    git pull --rebase`,
                    },
                    {
                        type: 'highlight',
                        text: 'Merge adds a merge commit, while rebase rewrites your commits on top of the latest main and needs a safe force push.',
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
                        text: 'In Archer Review, developers rebased their own feature branches on main before opening a PR, and PRs were squash-merged so main stayed clean and easy to revert.',
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
                            'Merge combines branches with a merge commit and preserves history, while rebase replays my commits on top of another branch to create a linear history.',
                            'I rebase my own local feature branches to stay up to date, and never rebase shared branches.',
                            'After rebasing a pushed branch I use force-with-lease.',
                            'For main I follow the team policy, commonly squash merge for a clean history.',
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
                        text: '**You rebased a branch that your teammate was also working on, and now their history is broken. What happened and how do you fix it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Rebase rewrote the commits (new hashes), so their local copy diverged.',
                            'Coordinate: they can rebase their work onto the new branch (git rebase --onto) or reset to the new remote.',
                            'Prevent: agree not to rebase shared branches.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Your feature branch is 40 commits behind main. Merge or rebase?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'For my own branch, rebase (or merge main) after fetching; resolve conflicts once.',
                            'If the branch is shared with others, merge main into it instead of rebasing.',
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
                            'Merge',
                            'Rebase',
                            'Linear history',
                            'Fast-forward',
                            'force-with-lease',
                            'Squash merge',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'gc-2',
        topicId: 'git-cicd',
        title: 'How do you resolve complex merge conflicts?',
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
                            'First understand what both sides changed and why.',
                            'Open the conflicted files and choose or combine the correct code.',
                            'Run the tests to confirm everything still works.',
                            'Ask the other developer if you are not sure.',
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
                            'A conflict happens when two branches change the same lines (or one deletes what the other edits). Resolve with **understanding, not guessing**.',
                            '**Prepare** - make sure working tree is clean, fetch latest, know what each branch intends (PR descriptions, git log, git blame).',
                            '**Understand** - git status, git diff --name-only --diff-filter=U, git log --merge -p; enable diff3/zdiff3 conflict style to see the common ancestor (git config merge.conflictstyle zdiff3).',
                            '**Resolve** - edit markers (<<<<<<<, =======, >>>>>>>), combine both intents; use a merge tool (VS Code, git mergetool); for generated files (lockfiles) regenerate instead of hand-merging.',
                            '**ours vs theirs** - meanings flip during rebase (ours = branch being rebased onto, theirs = your commit being replayed); be careful with git checkout --ours/--theirs.',
                            '**Verify** - build, lint, typecheck and run tests; conflicts can compile but break logic (semantic conflicts).',
                            '**Communicate** - talk to the author of the other change for complex logic.',
                            '**Safety nets** - git merge --abort / git rebase --abort, git reflog to recover, git rerere to reuse past resolutions.',
                            '**Prevent** - small PRs, frequent rebases/merges from main, clear module ownership, avoid reformatting unrelated code, format on commit to avoid noise.',
                            'Large rebases with many commits: consider squashing first to resolve conflicts once.',
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
                        text: `# Start
    git fetch origin
    git merge origin/main          # or: git rebase origin/main
    
    # See conflicts
    git status
    git diff --name-only --diff-filter=U
    
    # Better conflict markers (shows the common ancestor)
    git config --global merge.conflictstyle zdiff3
    
    # Reuse previous resolutions automatically
    git config --global rerere.enabled true
    
    # Resolve files, then
    git add src/components/Form.tsx
    git merge --continue           # or: git rebase --continue
    
    # Regenerate lockfile instead of hand-merging
    git checkout origin/main -- package-lock.json && npm install
    
    # Bail out safely
    git merge --abort              # or: git rebase --abort`,
                    },
                    {
                        type: 'highlight',
                        text: 'Show conflicts clearly, resolve with context, verify with tests, and keep abort/reflog as safety nets.',
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
                        text: 'In Archer Review, a big refactor of the form components conflicted with feature work; we resolved it by talking to the other developer, resolving file by file, regenerating the lockfile and running the full test suite before pushing.',
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
                            "I first understand both sides' intent using the PR, git log and blame, and enable diff3 markers to see the common ancestor.",
                            'I resolve file by file, regenerate generated files like lockfiles, and use a merge tool for complex ones.',
                            'I run build, lint and tests because semantic conflicts can still break behavior.',
                            'I use abort, reflog and rerere as safety nets and prevent conflicts with small PRs and frequent updates from main.',
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
                        text: '**package-lock.json has hundreds of conflict lines. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Do not hand-edit it: take the version from main, then re-run npm install to regenerate it.',
                            'Commit the regenerated lockfile and verify the install works.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**After resolving conflicts the code compiles but a feature behaves wrongly. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'A semantic conflict: both changes were valid alone but incompatible together.',
                            'Run tests, review both intents with the other author and add a test covering the combined behavior.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You are mid-rebase and realize you made a mess. How do you recover?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use git rebase --abort to return to the pre-rebase state.',
                            'If already completed, use git reflog to find the earlier commit and reset to it.',
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
                            'Conflict markers',
                            'diff3',
                            'git mergetool',
                            'rerere',
                            'ours/theirs',
                            'Reflog',
                            'Semantic conflict',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'gc-3',
        topicId: 'git-cicd',
        title: 'What is Git cherry-pick?',
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
                            'Cherry-pick copies one specific commit from one branch to another.',
                            'It creates a new commit with the same changes.',
                            'It is useful for hotfixes.',
                            'You can pick one commit without merging the whole branch.',
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
                            'git cherry-pick <hash> **applies the changes introduced by a commit onto the current branch** as a new commit (different hash).',
                            '**Use cases** - backport a bug fix to a release branch, move a commit made on the wrong branch, grab one commit from an unfinished feature.',
                            '**Options** - -x adds "(cherry picked from commit ...)" to the message for traceability; -n (--no-commit) applies without committing; ranges A..B; -m 1 for merge commits.',
                            '**Conflicts** - can occur if the target branch differs; resolve then git cherry-pick --continue; use --abort to cancel.',
                            '**Caveats** - duplicates the commit in history (same change, different hash), which may cause confusing conflicts or duplicates when branches merge later; dependent commits may be missing so the pick may not work alone.',
                            '**Prefer merge/rebase** when you need all the commits of a branch; use cherry-pick sparingly for targeted changes.',
                            '**Undo** - git revert on the picked commit, or reset if not pushed.',
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
                        text: `# Hotfix was committed on main (abc123); backport to release branch
    git checkout release/2.4
    git cherry-pick -x abc123
    
    # Several commits
    git cherry-pick abc123 def456
    git cherry-pick abc123^..def456      # inclusive range
    
    # Apply changes but do not commit yet
    git cherry-pick -n abc123
    
    # Conflict handling
    git cherry-pick --continue
    git cherry-pick --abort
    
    # Find the commit you need
    git log --oneline main`,
                    },
                    {
                        type: 'highlight',
                        text: 'The fix is copied to the release branch with a reference to the original commit.',
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
                        text: 'In Archer Review, a critical production bug fix was cherry-picked from main into the release branch so it could be deployed without shipping unfinished features.',
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
                            'Cherry-pick applies the changes of a specific commit onto my current branch as a new commit.',
                            'I use it for hotfix backports or moving a commit from the wrong branch, usually with -x for traceability.',
                            'The downsides are duplicated history and missing dependent commits.',
                            'If I need a whole set of changes, I prefer merge or rebase.',
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
                        text: '**You committed a fix on the wrong branch. How do you move it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Switch to the correct branch and cherry-pick the commit.',
                            'Then remove it from the wrong branch (git reset --hard HEAD~1 if not pushed, otherwise git revert).',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Cherry-picked commit conflicts heavily because it depends on earlier commits. What now?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Cherry-pick the needed earlier commits too, or re-implement the fix manually for the target branch.',
                            'Consider whether merging the branch is cleaner.',
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
                        items: ['cherry-pick', 'Backport', 'Hotfix', '-x flag', 'New commit hash', 'Release branch'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'gc-4',
        topicId: 'git-cicd',
        title: 'How do you maintain clean Git history?',
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
                            'Make small commits with clear messages.',
                            'Keep each pull request focused on one thing.',
                            'Rebase or squash noisy commits before merging.',
                            'Use a consistent commit message format.',
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
                            'Clean history makes **review, debugging (bisect), revert and release notes** easier.',
                            '**Atomic commits** - each commit is one logical change that builds and passes tests.',
                            '**Good messages** - Conventional Commits (feat, fix, chore, docs, refactor) with a short imperative subject and explanation of why in the body.',
                            '**Small focused PRs** - one purpose per PR; avoid mixing refactors, formatting and features.',
                            '**Tidy before merge** - interactive rebase (git rebase -i) to squash/fixup/reword; git commit --fixup with --autosquash.',
                            '**Merge strategy** - agreed policy: squash merge or rebase merge for linear main, merge commits only when needed.',
                            '**Protect main** - branch protection, required reviews and checks, no direct pushes, optionally require linear history.',
                            '**Automation** - commitlint + Husky to validate messages, semantic-release/changesets for versioning and changelogs.',
                            '**Never rewrite shared history** - use git revert on main instead of reset; use force-with-lease only for your own branches.',
                            '**Hygiene** - .gitignore, no build artifacts or secrets in commits (if leaked, rotate and remove with git filter-repo), meaningful branch names (feature/, fix/).',
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
                        text: `# Conventional Commit message
    feat(auth): add Google login
    
    Use Authorization Code flow with PKCE. Closes #123.
    
    # Clean up local commits before opening a PR
    git rebase -i origin/main
    #  pick  a1b2c3 feat(auth): add Google login
    #  fixup d4e5f6 fix typo
    #  fixup 7a8b9c wip
    
    # Fixup a specific earlier commit automatically
    git commit --fixup a1b2c3
    git rebase -i --autosquash origin/main
    
    # commitlint.config.js
    export default { extends: ['@commitlint/config-conventional'] };
    
    # Husky hook (commit-msg)
    npx --no -- commitlint --edit "$1"`,
                    },
                    {
                        type: 'highlight',
                        text: 'Commits follow a standard format, noisy commits are squashed before merge, and hooks enforce the rules.',
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
                        text: 'In Archer Review, we used Conventional Commits with commitlint, small PRs and squash merges, so main history was readable and changelogs were generated automatically.',
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
                            'I keep commits atomic with Conventional Commit messages and PRs small and focused.',
                            'Before merging I tidy local history with interactive rebase and fixup, and the team uses squash or rebase merge to keep main linear.',
                            'I protect main with required reviews and checks, and enforce message format with commitlint and Husky.',
                            'On shared branches I use revert instead of rewriting history.',
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
                        text: '**A teammate\'s PR has 30 commits like "wip", "fix", "fix again". What do you suggest?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Squash/fixup into a few meaningful commits with interactive rebase, or use squash merge with a good final message.',
                            'Share the team commit guidelines and add commitlint.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Someone committed an API key to the repository. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Rotate/revoke the key immediately; removing it from history is secondary.',
                            'Remove it from history with git filter-repo or BFG, force push coordinated with the team, and add secret scanning (e.g., gitleaks) to CI.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A bad commit reached main and others have pulled. Reset or revert?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Revert: it adds a new commit undoing the change without rewriting shared history.',
                            "Reset on main would break everyone's local copies.",
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
                            'Conventional Commits',
                            'Atomic commits',
                            'Interactive rebase',
                            'Squash',
                            'commitlint',
                            'Branch protection',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'gc-5',
        topicId: 'git-cicd',
        title: 'What should happen in a frontend CI pipeline?',
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
                            'Install dependencies, then check code quality: lint, format and types.',
                            'Run tests.',
                            'Build the app to make sure it compiles.',
                            'Block merging if any step fails.',
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
                            'CI gives **fast, automated feedback on every PR** so only healthy code reaches main. Order stages from fast to slow (fail fast) and run independent jobs in parallel.',
                            '**Setup** - checkout, set Node version, install with lockfile (npm ci / pnpm install --frozen-lockfile), cache dependencies and build caches.',
                            '**Static checks** - ESLint, Prettier check, TypeScript type check (tsc --noEmit), commitlint, secret scanning.',
                            '**Tests** - unit/component tests (Vitest/Jest + Testing Library) with coverage thresholds; integration tests; **e2e** (Playwright/Cypress) on a preview or built app; accessibility checks (axe).',
                            '**Build** - production build; fail on errors/warnings policy; check **bundle size** budgets (size-limit).',
                            '**Quality and performance** - Lighthouse CI, visual regression (Storybook/Chromatic/Playwright snapshots).',
                            '**Security** - npm audit/Dependabot/Snyk, SAST (CodeQL), license checks.',
                            '**Artifacts and reports** - upload build, coverage and test reports; PR comments; **preview deployment** per PR.',
                            '**Gates** - required status checks via branch protection, required reviews, merge queue.',
                            '**Efficiency** - concurrency cancel of outdated runs, test sharding, only affected packages in monorepos (Turborepo/Nx).',
                            'Keep the pipeline fast (target under ~10 minutes) or developers will bypass it.',
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
                        text: `# .github/workflows/ci.yml
    name: CI
    on:
    pull_request:
    push:
    branches: [main]
    concurrency:
    group: ci-\${{ github.ref }}
    cancel-in-progress: true
    
    jobs:
    quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npm run lint -- --max-warnings 0
      - run: npm run format:check
      - run: npm run typecheck
      - run: npm test -- --coverage
      - run: npm run build
      - run: npx size-limit
    
    e2e:
    needs: quality
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run test:e2e`,
                    },
                    {
                        type: 'highlight',
                        text: 'Fast quality checks run first, e2e runs after, outdated runs are cancelled and dependencies are cached.',
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
                        text: 'In Archer Review, each PR ran lint, type check, unit tests and build, then a preview deployment and e2e tests, and merging was blocked until all checks passed.',
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
                            'On every PR I install with a locked, cached install, then run lint, format check, type check, unit tests and a production build, with bundle size checks.',
                            'Then e2e, accessibility and optionally Lighthouse and visual regression, plus security scans.',
                            'I publish a preview deployment, enforce results via required status checks, and keep the pipeline fast with parallel jobs, caching and fail-fast ordering.',
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
                        text: '**CI takes 25 minutes and developers are frustrated. How do you speed it up?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Cache dependencies and build outputs, run jobs in parallel, shard tests.',
                            'Run only affected tests/packages (Turborepo/Nx), fail fast on cheap checks first, cancel outdated runs.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**E2E tests are flaky and people re-run until they pass. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Find and fix root causes: waits on conditions not timeouts, isolated test data, stable selectors.',
                            'Quarantine truly flaky tests, track flake rate and keep e2e focused on critical flows.',
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
                            'CI',
                            'npm ci',
                            'Type check',
                            'Unit tests',
                            'E2E',
                            'Preview deployment',
                            'Required checks',
                        ],
                    },
                ],
            },
        ],
    }),
];

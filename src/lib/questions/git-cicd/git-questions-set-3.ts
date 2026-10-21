import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const gitCiCdQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'gc-11',
        topicId: 'git-cicd',
        title: 'Explain the CI/CD pipeline.',
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
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'CI/CD stands for Continuous Integration and Continuous Delivery or Deployment.',
                            'CI automatically checks our code by running linting, tests and builds whenever we push code or create a Pull Request.',
                            'CD helps us release or deploy the tested code to different environments, such as staging and production.',
                            'In React and Next.js projects, I can use GitHub Actions for automated checks and Vercel for deployment. This process improves code quality, reduces manual errors and makes releases faster and more reliable.',
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
                        text: 'CI/CD என்றால் என்ன?',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'CI — Continuous Integration',
                            'CD — Continuous Delivery அல்லது Continuous Deployment',
                            'எளிமையாகச் சொன்னால், நாம் எழுதும் code-ஐத் தானாகவே test செய்து, build செய்து, website-ஐ release அல்லது deploy செய்வதற்கான process தான் CI/CD.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'ஒரு உதாரணம் பார்ப்போம்.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'நீங்கள் Archer Review website-ல் ஒரு புதிய feature உருவாக்குகிறீர்கள்.',
                            'அதை GitHub-ல் push செய்ததும், ஒவ்வொரு முறையும் நீங்களாக build செய்து test செய்ய வேண்டிய அவசியமில்லாமல், CI/CD pipeline அந்த வேலைகளைத் தானாகச் செய்ய உதவும்.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'CI/CD எப்படி வேலை செய்கிறது?',
                    },
                    {
                        type: 'code',
                        text: `1. Developer writes code
                        React / Next.js feature உருவாக்குதல்

                        2. Push code to GitHub
                        Feature branch-ல் code push அல்லது Pull Request உருவாக்குதல்

                        3. CI Pipeline runs
                        Lint → Type Check → Tests → Build

                        Failure
                        Error இருந்தால் சரிசெய்து மீண்டும் push செய்ய வேண்டும்.

                        Success
                        Checks pass ஆனால் அடுத்த stage-க்குச் செல்லலாம்.

                        4. Deploy
                        Preview / Staging / Production environment-க்கு deploy செய்தல்`,
                    },
                    {
                        type: 'paragraph',
                        text: 'முக்கியமாக, எல்லா project-களிலும் இந்த stages ஒரே மாதிரி இருக்காது. உங்கள் team அமைத்துள்ள pipeline-ஐப் பொறுத்து steps மாறும்.',
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'CI என்றால் என்ன? (Continuous Integration)',
                    },
                    {
                        type: 'paragraph',
                        text: 'CI என்பது developers எழுதும் code-ஐ அடிக்கடி ஒரே codebase-ல் சேர்த்து, automatic checks மூலம் code சரியாக இருக்கிறதா என்று பரிசோதிக்கும் முறை.',
                    },
                    {
                        type: 'paragraph',
                        text: 'உதாரணமாக, நீங்கள் ஒரு React project-ல் வேலை செய்கிறீர்கள் என்று வைத்துக்கொள்வோம்.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Developer A — Login page உருவாக்குகிறார்.',
                            'Developer B — Dashboard உருவாக்குகிறார்.',
                            'Developer C — API integration செய்கிறார்.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'அவர்கள் தங்களுடைய code-ஐ GitHub-ல் push செய்கிறார்கள். Pull Request உருவாக்கும்போது CI pipeline தானாகவே:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Code-ல் lint errors இருக்கிறதா என்று பார்க்கும்.',
                            'TypeScript errors இருக்கிறதா என்று சரிபார்க்கும்.',
                            'Unit tests இயக்கும்.',
                            'Project build ஆகிறதா என்று பார்க்கும்.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'ஏதேனும் முக்கியமான check fail ஆனால், team-க்கு உடனடியாகத் தெரியும்.',
                    },
                    {
                        type: 'paragraph',
                        text: 'CI-ன் முக்கிய நோக்கம்: Code பிரச்சினைகளை early-ஆகக் கண்டுபிடிப்பது.',
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'CD என்றால் என்ன?',
                    },
                    {
                        type: 'paragraph',
                        text: 'CD-க்கு இரண்டு பொதுவான அர்த்தங்கள் உள்ளன.',
                    },
                    {
                        type: 'code',
                        text: `Continuous Delivery
Code தானாகவே test செய்யப்பட்டு, deploy செய்யத் தயாரான நிலையில் வைக்கப்படும். Production-க்கு release செய்வதற்கு பொதுவாக மனிதரின் approval தேவைப்படும்.

Continuous Deployment
எல்லா required checks-ம் pass ஆன பிறகு, code தானாகவே Production-க்கு deploy ஆகும். தனியாக manual approval தேவையில்லை.`,
                    },
                    {
                        type: 'paragraph',
                        text: '**நினைவில் வைத்துக்கொள்ளுங்கள்:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'CI = Code-ஐ integrate செய்து test செய்வது.',
                            'Continuous Delivery = Release செய்யத் தயாராக வைத்திருப்பது.',
                            'Continuous Deployment = Checks pass ஆனதும் Production-க்கு தானாக deploy செய்வது.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'React / Next.js project-ல் CI/CD எப்படி பயன்படுத்துவோம்?',
                    },
                    {
                        type: 'paragraph',
                        text: 'உதாரணமாக, Archer Review website-ல் புதிய Video Library feature உருவாக்குகிறோம் என்று வைத்துக்கொள்வோம்.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Feature branch உருவாக்கி code எழுதுவோம்.',
                            'Code-ஐ GitHub-ல் push செய்து Pull Request உருவாக்குவோம்.',
                            'CI pipeline ESLint, TypeScript, tests மற்றும் production build ஆகியவற்றை இயக்கும்.',
                            'Checks pass ஆனதும் reviewer code-ஐ review செய்து approve செய்வார்.',
                            'Merge செய்த பிறகு configured workflow-ஐப் பொறுத்து Preview அல்லது Staging-ல் deploy செய்வோம்.',
                            'QA testing முடிந்ததும் Production-க்கு release செய்வோம். Continuous Deployment அமைக்கப்பட்டிருந்தால் இந்த deployment தானாகவும் நடக்கலாம்.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'இதனால் code quality மேம்படும்; manual mistakes குறையும்; deployment process ஒரே மாதிரியாக இருக்கும்.',
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'CI/CD-க்கு என்னென்ன tools பயன்படுத்துவோம்?',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**GitHub Actions:** GitHub repository-ல் code push அல்லது Pull Request வந்ததும் automated workflow-களை இயக்கலாம்.',
                            '**Jenkins:** Build, testing மற்றும் deployment jobs-ஐ automate செய்யப் பயன்படும்.',
                            '**GitLab CI/CD:** GitLab-ல் code integration, testing மற்றும் deployment pipeline-களை அமைக்கலாம்.',
                            '**Vercel:** Next.js project-களுக்கு Git integration, Preview Deployments மற்றும் Production Deployments வழங்குகிறது.',
                        ],
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**GitHub Actions-ல் CI pipeline எப்படி எழுதுவது?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Next.js project-ல் basic CI workflow அமைப்பதற்கான simple example.',
                    },
                    {
                        type: 'paragraph',
                        text: '.github/workflows/ci.yml',
                    },
                    {
                        type: 'code',
                        text: `name: Frontend CI

                        on:
                        pull_request:
                        push:
                            branches: [main]

                        jobs:
                        build:
                            runs-on: ubuntu-latest

                            steps:
                            - name: Checkout code
                                uses: actions/checkout@v4

                            - name: Setup Node.js
                                uses: actions/setup-node@v4
                                with:
                                node-version: 20

                            - name: Install dependencies
                                run: npm ci

                            - name: Run lint
                                run: npm run lint

                            - name: Build project
                                run: npm run build`,
                    },
                    {
                        type: 'paragraph',
                        text: 'இந்த example என்ன செய்கிறது?',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'on — எந்த event வந்தால் workflow இயங்க வேண்டும் என்பதைச் சொல்கிறது.',
                            'checkout — Repository code-ஐ runner-க்கு எடுத்துக்கொள்கிறது.',
                            'npm ci — Lock file-ஐப் பயன்படுத்தி dependencies install செய்கிறது.',
                            'npm run lint — Code quality-ஐச் சரிபார்க்கிறது.',
                            'npm run build — Production build சரியாக உருவாகிறதா என்று பார்க்கிறது.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'இந்த workflow ஒரு basic CI example மட்டுமே. Unit tests, type checking, security scans மற்றும் deployment steps-ஐ உங்கள் project தேவைக்கேற்ப சேர்க்கலாம். npm run lint போன்ற scripts package.json-ல் இருக்க வேண்டும்.',
                    },
                ],
            },
        ],
    }),
];

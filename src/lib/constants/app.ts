export const APP_NAME = 'Frontend Learning Platform';

export const TECH_STACK = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'] as const;

export type TechStackItem = (typeof TECH_STACK)[number];

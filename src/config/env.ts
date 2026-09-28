/**
 * Public environment variables available in the browser.
 * Keep this module minimal — expand validation in later phases.
 */
export interface IPublicEnv {
    appName: string;
    appUrl: string;
}

export const publicEnv: IPublicEnv = {
    appName: process.env.NEXT_PUBLIC_APP_NAME ?? 'Frontend Learning Platform',
    appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
};

/**
 * Future home for runtime environment validation (e.g. Zod schemas).
 * Call from server entry points once secrets / server-only vars are introduced.
 */
export const assertEnv = (): void => {
    // Intentionally minimal for Phase 1.
};

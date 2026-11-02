export const isMissingAuthSessionError = (error: { name: string } | null): boolean =>
    error?.name === 'AuthSessionMissingError';

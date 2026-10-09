import dotenvFlow from 'dotenv-flow';

export type Environment = {
    baseUrl: string;
    adminUsername: string;
    adminPassword: string;
    apiBaseUrlPath: string;
    defaultTimeout: number;
};

let cachedEnvironment: Environment | null = null;
let isLoaded = false;

function loadEnvFiles(): void {
    if (isLoaded) return;
    dotenvFlow.config();
    isLoaded = true;
}

export function getEnvironment(): Environment {
    if (cachedEnvironment) {
        return cachedEnvironment;
    }

    loadEnvFiles();

    cachedEnvironment = {
        baseUrl: getRequired('BASE_URL'),
        adminUsername: getRequired('ADMIN_USERNAME'),
        adminPassword: getRequired('ADMIN_PASSWORD'),
        apiBaseUrlPath: process.env.API_BASE_URL_PATH || '/web/index.php/api/v2',
        defaultTimeout: Number(process.env.DEFAULT_TIMEOUT) || 30000,
    };

    return cachedEnvironment;
}

function getRequired(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(
            `Missing required environment variable: ${key}. ` +
            `Check your .env.${process.env.NODE_ENV || 'qa'} file, or .env.local overrides.`
        );
    }
    return value;
}






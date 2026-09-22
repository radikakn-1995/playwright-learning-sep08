import { getEnvironment } from '../core/config/environment';

export type LoginScenarioData = {
    username: string;
    password: string;
    expectedErrorMessage?: string;
};

export function createValidLoginScenario(
    overrides?: Partial<LoginScenarioData>): LoginScenarioData {
    const environment = getEnvironment();
  return {
    username: environment.adminUsername,
    password: environment.adminPassword,
    ...overrides,
  };
}

export function createInvalidLoginScenario(
    overrides?: Partial<LoginScenarioData>): LoginScenarioData {
    return {
        username: 'InvalidUser',
        password: 'WrondPassword',
        expectedErrorMessage: 'Invalid credentials',
        ...overrides
    };
}

export type NegativeLoginCase = {
    name: string;
    username: string;
    password: string;
    expectedErrorMessage: string;
}

export const negativeLoginScenarios: NegativeLoginCase[] = [
    {
        name: 'TC_001_empty_username',
        username: '',
        password: 'admin123',
        expectedErrorMessage: 'Required'
    },
    {
        name: 'TC_002_empty_password',
        username: 'Admin',
        password: '',
        expectedErrorMessage: 'Required'
    },

    {
        name: 'TC_003_empty_username_password',
        username: '',
        password: '',
        expectedErrorMessage: 'Required'
    },
    {
        name: 'TC_004_wrong_password',
        username: 'Admin',
        password: 'wrong',
        expectedErrorMessage: 'Invalid credentials'
    }

]



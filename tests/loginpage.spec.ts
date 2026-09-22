
import { test, expect } from "../src/fixtures/page.fixture";
import { LoginPage } from "../src/pages/LoginPage";
import { createValidLoginScenario } from "../src/testdata/login-scenarios-data";
import { negativeLoginScenarios } from "../src/testdata/login-scenarios-data";

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.gotoLogin();

    });

    test('valid login', { tag: '@smoke' }, async ({ loginPage }) => {
        const scenario = createValidLoginScenario();
        await loginPage.login(scenario.username, scenario.password);
    });

    for (const scenario of negativeLoginScenarios) {
        test(`${scenario.name }: shows "${scenario.expectedErrorMessage}"`, { tag: '@negative' }, async ({ loginPage }) => {
            await loginPage.login(scenario.username, scenario.password);
            const errorMessage = await loginPage.getErrorMessage();
            expect(errorMessage).toContain(scenario.expectedErrorMessage);
        });
    }
})
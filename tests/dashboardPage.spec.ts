
import { test, expect } from "../src/fixtures/page.fixture";
import { DashboardPage } from "../src/pages/DashboardPage";

test.describe('Dashboard Tests', () => {


    test.beforeEach(async ({ loginPage }) => {
        await loginPage.gotoLogin();
        await loginPage.login('Admin', 'admin123');
    });

    test('Click Upgrade button', async ({ page }) => {
        const dashboardPage= new DashboardPage(page);

        const upgradePage= await dashboardPage.clickUpgrade();

        await expect(dashboardPage.page).toHaveURL(/upgrade-to-advanced/);
    });


})

import { test, expect } from "../src/fixtures/page.fixture";
import { LoginPage } from "../src/pages/LoginPage";


test.describe('PIM page', ()=>{

     test.beforeEach(async ({ loginPage }) => {
        await loginPage.gotoLogin();
        await loginPage.login('Admin', 'admin123');
    });

    test ('Employee list  search with all fields',async ({pimPage})=>{
        
    await pimPage.clickPIMMenu();
    await pimPage.enterEmployeeName('John');
    await pimPage.enterEmployeeId('0452');
    await pimPage.selectEmployeeStatus('Full-time')
    await pimPage.selecteincludeDropdown('Current Employees Only');
    await pimPage.enterSupervisorName('Amelia Brown');
    await pimPage.selectjobtitleDropdown('Automation Tester');
    await pimPage.selectsubunitDropdown('Engineer');
    await pimPage.clickSearchbutton();
});

});
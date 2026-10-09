import { Locator, Page } from "@playwright/test"
import { BasePage } from "./BasePage"

export class PIMPage extends BasePage{
    readonly Pimmenu: Locator;
    readonly employeeName: Locator;
    readonly employeeId: Locator;
    readonly employeestatusDropdown: Locator;
    readonly includeDropdown: Locator;
    readonly supervisorName: Locator;
    readonly jobTitleDropdown: Locator;
    readonly subunitDropdown: Locator;
    readonly searchButton: Locator;

     constructor(page: Page){
        super(page)
        this.Pimmenu=page.getByRole('link', {name: 'PIM'});
        this.employeeName= page.getByPlaceholder('Type for hints...');
        this.employeeId= page.locator('//div[@class="oxd-grid-item oxd-grid-item--gutters"]/div/div/input');
        this.employeestatusDropdown= page.locator('(//div[contains(@class,"oxd-select-text")])[1]');
        this.includeDropdown= page.getByText('Current Employees Only');
        this.supervisorName=page.getByPlaceholder('Type for hints...');
        this.jobTitleDropdown=page.locator('(//div[@class="oxd-select-text-input"])[3]');
        this.subunitDropdown= page.locator('(//div[@class="oxd-select-text-input"])[4]');
        this.searchButton= page.getByRole('button',{name:'  Search '});

     }

     async clickPIMMenu(): Promise<void>{
        await this.waitForElement(this.Pimmenu);
        await this.click(this.Pimmenu);

     }
    
     async enterEmployeeName(name:string): Promise<void>{
        await this.fill(this.employeeName, name);
     }

     async enterEmployeeId(id: string): Promise<void>{
        await this.fill(this.employeeId, id);
     }

     async enterSupervisorName(name:string): Promise<void>{
        await this.fill(this.supervisorName, name);

     }

     async selectEmployeeStatus(status:string): Promise<void>{
        await this.employeestatusDropdown.click();
        await this.page.getByText(status, {exact: true}).click();
 
    }

    async selecteincludeDropdown(option:string): Promise<void>{
        await this.includeDropdown.click();
        await this.page.getByText(option, {exact: true}).click();
    }

    async selectjobtitleDropdown(jobTitle: string): Promise<void>{
        await this.jobTitleDropdown.click();
        await this.page.getByText(jobTitle, {exact:true}).click();
    }

    async selectsubunitDropdown(subunit: string): Promise<void>{
        await this.subunitDropdown.click();
        await this.page.getByText(subunit, {exact: true}).click();

    }

    async clickSearchbutton(): Promise<void> {
        await this.searchButton.click();
        
    }
}

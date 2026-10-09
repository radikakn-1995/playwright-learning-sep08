import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage{
    readonly upgradeButton: Locator;

    constructor(page: Page){
        super(page);
        this.upgradeButton= page.getByRole('link', {name: ' Upgrade', exact: true});
    }

    async clickUpgrade(): Promise<Page>{
        const newPagePromise= this.page.waitForEvent('popup');
        
        await this.click(this.upgradeButton);

        const newPage=await  newPagePromise;

        await newPage.waitForLoadState('domcontentloaded');

        const allowAll= this.page.getByRole('link', {name:'Allow all', exact: true});

        
     if(await allowAll.isVisible({timeout:3000}).catch(()=>false)){
        await allowAll.click();
     }

      return newPage;
    }


   


}
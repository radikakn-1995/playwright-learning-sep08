import { Page, Locator, expect} from "@playwright/test";

export class BasePage{
    readonly page: Page;
     
    constructor(page: Page){
        this.page= page;

    }

    async goto(path: string= '/'): Promise<void>{
        await this.page.goto(path);        
    }

    async waitForElement(locator: Locator): Promise<void>{
        await locator.waitFor({state: 'visible'});
    }

    async fill(locator: Locator, value: string): Promise<void>{
        await this.waitForElement(locator);
        await locator.fill(value);
    }

    async click(locator: Locator): Promise<void>{
        await locator.waitFor({state: 'visible'});
        await locator.scrollIntoViewIfNeeded();
        await expect(locator).toBeEnabled();
        await locator.click();
    }

    async getText(locator: Locator): Promise<string>{
        await this.waitForElement(locator);
        return(await locator.textContent())?.trim()??'';
    }

    
    }




import { Page, Locator } from "@playwright/test";
import {BasePage} from './BasePage';
import { getEnvironment } from '../core/config/environment';

export class LoginPage extends BasePage{
    readonly UsernameInput: Locator;
    readonly PasswordInput: Locator;
    readonly LoginButton: Locator;
    readonly ErrorMessage: Locator;
    readonly invalidCredsErrorMessage: Locator;

    constructor(page: Page){
        super(page);
        this.UsernameInput= page.getByPlaceholder('Username');
        this.PasswordInput= page.getByPlaceholder('Password');
        this.LoginButton = page.getByRole('button', {name: 'Login'});
        this.ErrorMessage= page.locator('//input[@name="password"]/parent::div/parent::div/child::span');
        this.invalidCredsErrorMessage= page.locator('//div[@class="orangehrm-login-error"]/div/div/p');
    }

    async gotoLogin(): Promise<void>{
        const environment = getEnvironment();
        await this.goto(`${environment.baseUrl}/web/index.php/auth/login`);

    }

    async login(username: string, password: string): Promise<void>{
        await this.fill(this.UsernameInput, username);
        await this.fill(this.PasswordInput, password);
        await this.click(this.LoginButton);
    }

    async getErrorMessage(): Promise<string>{
        await this.waitForElement(this.ErrorMessage);
        return await this.getText(this.ErrorMessage);
    }
        
    

}
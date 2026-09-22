import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PIMPage } from '../pages/PIMPage';

type Pages ={
    loginPage : LoginPage;
    dashboardPage: DashboardPage;
    pimPage: PIMPage;
};

export const test= base.extend<Pages>({
    loginPage: async({page}, use)=>{
        await use(new LoginPage(page));

    },

    dashboardPage: async ({page}, use)=>{
        await use(new DashboardPage(page));

    },

    pimPage: async({page}, use)=>{
        await use(new PIMPage(page));
    }
});

export const expect= test.expect;
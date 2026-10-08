import { Login } from "./loginPagesf";

export class Homepagesf extends Login{


    async clickAppLauncher(){

        await this.page.getByRole('button',{name:'App Launcher'}).click()
    }

    async clickOnViewALl(){

         await this.page.getByRole('button',{name:'View All Applications'}).click() //clicking viwewall applications

    }

    async searchForLeads(){

        await this.page.getByRole('combobox',{name:'Search apps or items...'}).fill('Leads')
        await this.page.getByRole('combobox',{name:'Search apps or items...'}).press('Enter')

    }

    async navigateToLeads(){

        await this.page.locator('//mark[text()="Leads"]').click()

    }





}
import { playwrightWrapperSF } from "../helpersf/PlaywrightWrapperSF";


export class Homepagesf extends playwrightWrapperSF{


    async clickAppLauncher(){

        await this.clickonElement(this.page.getByRole('button',{name:'App Launcher'}))
    }

    async clickOnViewALl(){

         await this.clickonElement(this.page.getByRole('button',{name:'View All Applications'})) //clicking viwewall applications

    }

    async searchForLeads(){

        await this.clearAndFill(this.page.getByRole('combobox',{name:'Search apps or items...'}),'Leads')
        await this.pressEnter(this.page.getByRole('combobox',{name:'Search apps or items...'}))

    }

    async navigateToLeads(){

        await this.clickonElement(this.page.locator('//mark[text()="Leads"]'))

    }





}
import { Homepagesf } from "./HomePagesf";
import { expect } from "@playwright/test";

export class LeadPagesf extends Homepagesf{


    async clickNew(){

         await this.page.getByRole('button',{name:'New'}).click() 

    }

    async enterMandatoryFields(){

        await this.page.getByRole('combobox',{name:'Salutation'}).click()
        await this.page.locator('[aria-label="Salutation"] lightning-base-combobox-item[data-value="Mr."]').click()
        await this.page.getByRole('textbox',{name:'First Name'}).fill('Test User fname 01')
        await this.page.getByRole('textbox',{name:'Last Name'}).fill('Test User lname 01')
        await this.page.getByRole('textbox',{name:'Company'}).fill('Test Company')

    }

    async createLead(){

         await this.page.locator('[name="SaveEdit"]').click() //Creating Lead

    }

    async verifyLead(){

         expect.soft(await this.page.locator('[class="toastMessage slds-text-heading--small forceActionsText"]').textContent()).toContain('created')//validating toast message

    }



}
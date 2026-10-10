import { playwrightWrapperSF } from "../helpersf/PlaywrightWrapperSF";
import { expect } from "@playwright/test";
import {faker} from '@faker-js/faker'

export class LeadPagesf extends playwrightWrapperSF{


    async clickNew(){

         await this.clickonElement(this.page.getByRole('button',{name:'New'}))

    }

    async enterMandatoryFields(){
          
        await this.clickonElement(this.page.getByRole('combobox',{name:'Salutation'}))
        await this.clickonElement(this.page.locator('[aria-label="Salutation"] lightning-base-combobox-item[data-value="Mr."]'))
        let firstName = faker.person.firstName()
        await this.clearAndFill(this.page.getByRole('textbox',{name:'First Name'}),firstName)
        let lastName = faker.person.lastName()
        await this.clearAndFill(this.page.getByRole('textbox',{name:'Last Name'}),lastName)
        let companyName = faker.company.name()
        await this.clearAndFill(this.page.getByRole('textbox',{name:'Company'}),companyName)

    }

    async createLead(){

         await this.clickonElement(this.page.locator('[name="SaveEdit"]')) //Creating Lead

    }

    async verifyLead(){

         expect.soft(await this.page.locator('[class="toastMessage slds-text-heading--small forceActionsText"]').textContent()).toContain('created')//validating toast message

    }



}
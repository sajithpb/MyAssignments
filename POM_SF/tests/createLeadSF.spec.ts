import {test} from "@playwright/test"
import { LeadPagesf } from "../pages_sf/LeadPagesf"

test.use(
    {
       storageState:'Data/sf-storage.json' 
    }
)

test('create account using POM',async ({page}) => {

  let lp = new LeadPagesf(page)
  await lp.loadUrl('https://orgfarm-40a42d5208-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')
  await lp.clickAppLauncher()
  await lp.clickOnViewALl()
  await lp.searchForLeads()
  await lp.navigateToLeads()
  await lp.clickNew()
  await lp.enterMandatoryFields()
  await lp.createLead()
  await lp.verifyLead()

})
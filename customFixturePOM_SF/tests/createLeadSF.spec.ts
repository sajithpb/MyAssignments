import {test} from '../helpersf/customFixtureSF'

test.use(
    {
       storageState:'Data/sf-storage.json' 
    }
)

test('create account using POM',async ({


    loginfix,
    homefix,
    leadpagefix




}) => {

  
  await loginfix.loadUrl('https://orgfarm-40a42d5208-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')
  await homefix.clickAppLauncher()
  await homefix.clickOnViewALl()
  await homefix.searchForLeads()
  await homefix.navigateToLeads()
  await leadpagefix.clickNew()
  await leadpagefix.enterMandatoryFields()
  await leadpagefix.createLead()
  await leadpagefix.verifyLead()

})
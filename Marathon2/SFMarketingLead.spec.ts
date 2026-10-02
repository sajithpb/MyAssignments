import {test,expect} from "@playwright/test"
import data from '../../Data/MarketingLead.json'


test.use(
    {
       storageState:'Data/sf-storage.json' 
    }
)

test('Creating Marketing Lead & Converting it as an Opportunity',async({page})=>{


 await page.goto("https://orgfarm-40a42d5208-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
 await page.getByRole('button',{name:'App Launcher'}).click()
 await page.getByRole('button',{name:'View All Applications'}).click() //clicking viwewall applications
 await page.getByRole('combobox',{name:'Search apps or items...'}).fill('Marketing')
 await page.getByRole('combobox',{name:'Search apps or items...'}).press('Enter')
 await page.locator('//mark[text()="Marketing"]').click()
 expect(await page.locator('[title="Marketing CRM Classic"]').textContent()).toContain('Marketing') //verifying user is in marketing page
 await page.getByRole('link',{name:'Leads'}).click()
 await expect(page.locator('//h1[text()="Leads"]').first()).toBeVisible() //verifying user is in my leads page
 await page.getByRole('button',{name:'New'}).click() 
 await expect.soft(page.locator('//h2[text()="New Lead"]')).toBeVisible() //verifying new lead window opens
 await page.getByRole('combobox',{name:'Salutation'}).click()
 await page.locator('[aria-label="Salutation"] lightning-base-combobox-item[data-value="Mr."]').click()
 await page.getByRole('textbox',{name:'First Name'}).fill(`${data.firstName}${data.number}`)
 await page.getByRole('textbox',{name:'Last Name'}).fill(`${data.lastName}${data.number}`)
 await page.getByRole('textbox',{name:'Company'}).fill(`${data.companyName}${data.number}`)
 await page.getByRole('textbox',{name:'Title'}).fill(`${data.leadTitle}${data.number}`)
 await page.locator('[name="SaveEdit"]').click() //Creating Lead
 expect.soft(await page.locator('[class="toastMessage slds-text-heading--small forceActionsText"]').textContent()).toContain('created')//validating toast message
 await page.getByRole('button',{name:'Show more actions'}).click()
 await page.locator('//a[@role="menuitem"]/span[text()="Convert"]').click()
 await page.getByRole('button',{name:`${data.companyName}${data.number}-`}).click()
 await page.getByRole('textbox',{name:'Opportunity Name *'}).fill("")
 await page.getByRole('textbox',{name:'Opportunity Name *'}).fill(`${data.oppurtunityName}${data.number}`)
 await page.getByRole('button',{name:'Convert'}).click() //Converting lead to opportunity
expect.soft(await page.getByRole('heading',{name:'Your lead has been converted'}).textContent()).toContain('converted')//Validating the success message
 await page.getByRole('button',{name:'Go to Leads'}).click()
await page.getByRole('searchbox',{name:'Search this list...'}).fill(`${data.leadTitle}${data.number}`)
await page.getByRole('searchbox',{name:'Search this list...'}).press('Enter')
expect(await page.locator('//span[@aria-label="Recently Viewed"]').textContent()).toContain('0 items •') //Validating lead search result is empty
await page.getByRole('link',{name:'Opportunities'}).click()
await page.getByRole('searchbox',{name:'Search this list...'}).fill(`${data.oppurtunityName}${data.number}`)
await page.getByRole('searchbox',{name:'Search this list...'}).press('Enter')
await page.getByRole('link',{name:`${data.oppurtunityName}${data.number}`}).click()
await expect(page.locator('lightning-formatted-text',{hasText:`${data.oppurtunityName}${data.number}`})).toBeVisible();//Validating the opportunity created
await expect(page.getByRole('button',{name:'Mark Stage as Complete'})).toBeVisible()






















})
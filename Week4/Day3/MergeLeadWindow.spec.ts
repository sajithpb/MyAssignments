import {expect, test} from "@playwright/test"

test("Multiple Windows MergeLeads",async({page,context})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('demosalesmanager')
    await page.locator('label+input').nth(1).fill('crmsfa')
    await page.locator('[type="submit"]').click()
    await page.locator('[src="/opentaps_images/integratingweb/crm.png"]').click()
    await page.locator("//a[text()='Leads']").click()
    await page.getByRole('link',{name:'Merge Leads'}).click()
    let[newpage] = await Promise.all([context.waitForEvent('page'),page.getByAltText('Lookup').first().click()])
    await newpage.locator('(//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]//a[@class="linktext"])[1]').click()
    let[newpage2] = await Promise.all([context.waitForEvent('page'),page.getByAltText('Lookup').nth(1).click()])
    await newpage2.locator('(//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]//a[@class="linktext"])[2]').click()
    
    page.once('dialog',async(alert)=>{
        let alertType = alert.type()
        let alertMessage = alert.message()
        await alert.accept()
        console.log(alertType,alertMessage);
        })
   
    await page.locator('[class="buttonDangerous"]').click()
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(10000);
    await expect(page).toHaveTitle('View Lead | opentaps CRM')

})
import {test} from "@playwright/test"

test("Dropdown Testing",async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('label+input').nth(1).fill('crmsfa')
    await page.locator('[type="submit"]').click()
    await page.locator('[src="/opentaps_images/integratingweb/crm.png"]').click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('[name="dataSourceId"]').click()
    let options= page.locator('[id="createLeadForm_dataSourceId"] option')
    for(let i=0;i<await options.count();i++){
          
        console.log((await options.nth(i).innerText()))
        
    }
    })
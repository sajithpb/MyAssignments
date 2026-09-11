import {test} from "@playwright/test"

test("Creating Lead in Salesforce",async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('[type="email"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator('[class="slds-icon-waffle"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('[title="Manage your sales process with accounts, leads, opportunities, and more"]').click()
    await page.locator('a[title="Leads"]').click()
    await page.locator('div[title="New"]').click()
    await page.locator('[name="salutation"]').click()
    await page.locator('[aria-label="Salutation"] lightning-base-combobox-item[data-value="Mr."]').click()
    await page.locator('[placeholder="Last Name"]').fill("Test LastName")
    await page.locator('[name="Company"]').fill("Test Company")
    await page.locator('[name="SaveEdit"]').click()
    let message = await page.locator('[class="toastMessage slds-text-heading--small forceActionsText"]').textContent()
    console.log(message);
    
})
import {test} from "@playwright/test"

test("Editing a Lead in Leaftaps",async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('label+input').nth(1).fill('crmsfa')
    await page.locator('[type="submit"]').click()
    await page.locator('[src="/opentaps_images/integratingweb/crm.png"]').click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('#createLeadForm_companyName').fill('Test Company')
    await page.locator('#createLeadForm_firstName').fill('Test FirstName')
    await page.locator('#createLeadForm_lastName').fill('Test LastName')
    await page.locator('[name="submitButton"]').click()
    await page.locator('//div//a[text()="Edit"]').click()
    await page.locator('input[id="updateLeadForm_companyName"]').fill('')
    await page.locator('input[id="updateLeadForm_companyName"]').fill('Test Company Edited')
    await page.locator('[value="Update"]').click()


})
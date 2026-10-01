import {test} from "@playwright/test"
test('auth file to skip the login',async({page})=>{

    await page.goto('https://login.salesforce.com/')
    await page.locator('#username').fill('sajnair06.a89d1abf3623@agentforce.com')
    await page.locator('#Login').click()
    await page.locator('#password').fill('Sarika@12003933')
    await page.locator('#Login').click()
    await page.waitForTimeout(30000)
    await page.context().storageState({path:'Data/sf-storage.json'})
    

})
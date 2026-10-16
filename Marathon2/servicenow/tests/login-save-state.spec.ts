import {test} from "@playwright/test"
test('auth file to skip the login',async({page})=>{

    await page.goto('https://dev416068.service-now.com/login')
    await page.locator('#user_name').fill('admin')
    await page.locator('#user_password').fill('gx*K6SOt2oO=')
    await page.locator('#sysverb_login').click()
    await page.waitForTimeout(30000)
    await page.context().storageState({path:'Data/snow-storage.json'})
    

})
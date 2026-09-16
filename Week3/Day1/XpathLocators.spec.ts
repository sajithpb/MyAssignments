import {test} from "@playwright/test"

test("Advanced Xpath techniques",async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator("//div[@id='usernamegroup']//input[1]").fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

})
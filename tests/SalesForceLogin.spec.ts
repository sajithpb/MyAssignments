import {test} from "@playwright/test"

test("SalesForceLoginCheck",async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('[type="email"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.locator('#password').fill('TestLeaf@2025')
     await page.locator('#Login').click()
     //await page.waitForLoadState('domcontentloaded')
     await page.waitForTimeout(5000)
     const pageTitle=await page.title()
    console.log(pageTitle);
    await page.locator('a[title="Leads"]').click()
    await page.locator('div[title="New"]').click()
    await page.locator('[aria-controls="dropdown-element-1108"]').click()
    let values =await page.locator('[aria-controls="dropdown-element-1108"]').textContent()
    console.log(values);
    
     
})
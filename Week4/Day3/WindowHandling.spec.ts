import {test} from "@playwright/test"

test("Window Handling",async({page,context})=>{

    await page.goto('https://leafground.com/window.xhtml')
    let pagePromise = context.waitForEvent('page')
    await page.locator('//span[text()="Open"]').click()
    let childPage = await pagePromise
    await childPage.waitForLoadState('domcontentloaded')
    let childTitle = await childPage.title()
    console.log(childTitle);
    await childPage.locator('//input[@name="email"]').fill('sajnair06@gmail.com')
    await childPage.locator('//textarea[@name="message"]').fill('message')
    page.bringToFront()
    let parentTitle = await page.title()
    console.log(parentTitle);  

})
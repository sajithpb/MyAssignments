import {test} from '@playwright/test'

test("Alerts Home Assignment",async({page})=>{

await page.goto('https://www.leafground.com/alert.xhtml')

page.once('dialog',async(alert)=>{

await alert.accept('Playwright')

})

await page.locator('(//span[text()="Show"])[5]').click()

})
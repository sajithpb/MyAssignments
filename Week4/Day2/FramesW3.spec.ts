import {test,expect} from '@playwright/test'


test("Frames",async({page})=>{

await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
await page.waitForLoadState('domcontentloaded')
page.once('dialog',async(alert)=>{

await alert.accept()
console.log(alert.message())
console.log(alert.type())

})

await page.frameLocator('[id="iframeResult"]').locator('//button[text()="Try it"]').click()
let text = await page.frameLocator('[id="iframeResult"]').locator('[id="demo"]').innerText()
expect(text).toContain('OK')

})
import {test,expect} from '@playwright/test'

test("Fileupload",async({page,browser})=>{

await page.goto('https://www.leafground.com/file.xhtml')
await page.waitForLoadState('domcontentloaded')
await page.waitForTimeout(3000)
console.log(await page.title());
let upload =page.locator('input[type="file"]').nth(0)
await upload.setInputFiles('Data/sampleimage.jpg')
expect(page.locator('[class="ui-fileupload-filename"]')).toContainText('sampleimage')

})

test.only("fileupload using evenlistner",async({page})=>{

await page.goto('https://the-internet.herokuapp.com/upload')
await page.waitForLoadState('domcontentloaded')
await page.waitForTimeout(3000)
console.log(await page.title());
let uploadReference = page.waitForEvent('filechooser')
await page.locator('[id="drag-drop-upload"]').click()
const upload=await uploadReference
await upload.setFiles('Data/sampleimage.jpg')
expect(page.locator('(//div[@class="dz-filename"])[1]')).toHaveText('sampleimage.jpg')

})
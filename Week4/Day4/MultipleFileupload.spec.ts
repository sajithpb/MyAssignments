import {test,expect} from '@playwright/test'
import path from 'node:path'

test("Fileupload",async({page,browser})=>{

await page.goto('https://www.leafground.com/file.xhtml')
await page.waitForLoadState('domcontentloaded')
await page.waitForTimeout(3000)
let upload = page.locator('input[type="file"]').nth(1)
await upload.setInputFiles([path.join(__dirname,'../../../Data/sampleimage.jpg'),path.join(__dirname,'../../../Data/sampleimage2.jpg')])
let texts = await page.locator('div[class="ui-fileupload-filename"]').allInnerTexts()
expect(texts).toContain('sampleimage.jpg')
expect(texts).toContain('sampleimage2.jpg')



})
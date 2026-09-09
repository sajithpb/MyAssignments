import {test,chromium,webkit} from "playwright/test"
test("Validations in edge browser",async()=>{

    const browser=await chromium.launch({headless:false,channel:"msedge"})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.redbus.in/")
    const pageTitle =await page.title()
    const currentUrl=page.url()
    console.log(pageTitle);
    console.log(currentUrl);
})

test("Validations in Safari browser",async()=>{
   const browser=await webkit.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
     await page.goto("https://www.flipkart.com/")
    const pageTitle =await page.title()
    const currentUrl=page.url()
    console.log(pageTitle);
    console.log(currentUrl);

})
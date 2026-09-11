import {test} from "@playwright/test"

test("Select Dropdown",async({page})=>{

    await page.goto('https://www.leafground.com/select.xhtml')
    await page.locator('select.ui-selectonemenu').click()
    //await page.locator('select.ui-selectonemenu').selectOption({index:1})

    let options = page.locator('select.ui-selectonemenu')
    let count = await options.count();
    for(let index=0;index<count;index++){
        console.log(await options.nth(index).innerText());
        
    }
    
})
import {expect, test} from "@playwright/test";

test('Assertions',async({page})=>{
    

    await page.goto('https://leafground.com/input.xhtml')
    let disabledTextbox= page.locator('[placeholder="Disabled"]')
    await expect(disabledTextbox).toBeDisabled()
    let enabledTextbox = page.locator('[placeholder="Babu Manickam"]')
    await expect(enabledTextbox).toBeEditable()
    enabledTextbox.fill('sajith')
    await expect.soft(enabledTextbox).toBeDisabled({timeout:8000})
    await enabledTextbox.fill('')
    await enabledTextbox.fill('playwrigt learning')
    console.log("Hello");
    







})
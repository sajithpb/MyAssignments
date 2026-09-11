import {test} from "@playwright/test"

test("Creating Individual in Salesforce",async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('[type="email"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator('[class="slds-icon-waffle"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('//span//p[text()="Individuals"]').click()
    await page.locator('a div[title="New"]').click()
    await page.locator('.lastName').fill('Test LastName')
    await page.locator('button[title="Save"] span').click()
    let message = await page.locator('.toastMessage').textContent()
    let lastName = await page.locator('div[title="Test LastName"] span').textContent()
    console.log(message);
    console.log(lastName);

})


test.only("Editing Individual in Salesforce",async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('[type="email"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator('[class="slds-icon-waffle"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('//span//p[text()="Individuals"]').click()
    await page.locator('[name="Individual-search-input"]').fill('Test LastName')
    await page.locator('[name="Individual-search-input"]').press('Enter')
    await page.locator('a[title="Test LastName"]').click()
    await page.locator('div[title="Edit"]').click()
    await page.locator('a[class="select"]').nth(0).click()
    await page.locator('a[title="Mr."]').click()
    await page.locator('[placeholder="First Name"]').fill('Test FirstName')
    await page.locator('button[title="Save"] span').click()
    let message = await page.locator('.toastMessage').textContent()
    let firstName= await page.locator('div span[class="uiOutputText"]').nth(0).textContent()
    console.log(message);
    console.log(firstName);
    
    
    

})

//div span[class="uiOutputText"]
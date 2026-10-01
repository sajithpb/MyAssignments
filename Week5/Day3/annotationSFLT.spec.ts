import {test,expect} from "@playwright/test"



test.describe('Salesforce actions',{ tag:'@SmokeTesting'},async()=>{

test.use(
    {
       storageState:'Data/sf-storage.json' 
    }
)

test.beforeEach('Navigating to homepage',async({page})=>{ //This will run before every Test

     await page.goto("https://orgfarm-40a42d5208-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")

})

test('Storage state login validation', async ({page}) => {

    expect(page.url()).toContain('Welcome')

})

test('Reusing session and verifying homepage',async({page})=>{

    await expect(page.locator('[aria-label="Search"]')).toBeVisible() //asserting search box in homepage is visible

})

test.only('Navigating to services page',async({page})=>{

    test.slow()  //Using slow() since the page is taking too much time to load
    await page.getByRole('button',{name:'App Launcher'}).click()
    await page.locator('//p[text()="Service"]').click()
    expect(await page.locator('//span[@title="Service"]').textContent()).toContain('Service')

})

test.fail('invalid session',async({page})=>{

    await page.locator('//[invalidlocator]').click()//putting invalid locator to make test fail

})

})


test.describe('Leaftap actions',{ tag:'@SanityTesting'},async()=>{  //Created another suite for leaftap application


test('Homepage Validation of application',async({page})=>{

await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('democsr2')
await page.locator('label+input').nth(1).fill('crmsfa')
await page.getByRole('button',{name:'Login'}).click()
await page.getByRole('link',{name:'CRM/SFA'}).click()
await page.waitForLoadState('domcontentloaded')
await expect(page.getByRole('link',{name:'Profile'})).toBeVisible()//validation of homepage whether profile link is visible

})

test.fail('Invalid Login',async({page})=>{

await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('democsr2')
await page.locator('label+input').nth(1).fill('WrongPassword') //Wrong password entered
await page.getByRole('button',{name:'Login'}).click()
await page.getByRole('link',{name:'CRM/SFA'}).click()

})

test.fixme('Incomplete flow',async({page})=>{

await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('democsr2')  //unable to enter password and flow is broken

})



})
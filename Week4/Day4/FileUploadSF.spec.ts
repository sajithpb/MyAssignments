import {test,expect} from "@playwright/test"

test.use(
    {
       storageState:'Data/sflogin.json' 
    }
)
test('fileUpload in SalesForce',async({page})=>{

await page.goto("https://orgfarm-40a42d5208-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
await page.waitForLoadState('domcontentloaded')
console.log(await page.title());
console.log(page.url());
await page.waitForLoadState('domcontentloaded')
await page.locator('[class="slds-icon-waffle"]').click()
await page.getByLabel('View All Applications').click()
await page.locator('[placeholder="Search apps or items..."]').click()
await page.locator('[placeholder="Search apps or items..."]').fill('Accounts')
await page.locator('[placeholder="Search apps or items..."]').press('Enter')
await page.waitForLoadState('domcontentloaded')
await page.getByText('Accounts',{exact:true}).click()
await page.getByRole('button',{name:'New'}).click()
await page.getByRole('textbox',{name:'Account Name'}).fill('Test Account')
await page.getByRole('combobox',{name:'Rating'}).click()
await page.locator('[data-value="Warm"]').click()
let element = page.getByRole('combobox',{name:'Type'})
await element.scrollIntoViewIfNeeded()
await page.getByRole('combobox',{name:'Type'}).press('Enter')
await page.getByRole('combobox',{name:'Type'}).press('ArrowDown')
await page.getByRole('combobox',{name:'Type'}).press('Enter')
await page.getByRole('combobox',{name:'Industry'}).click()
await page.locator('[data-value="Banking"]').click()
await page.getByRole('combobox',{name:'Ownership'}).click()
await page.locator('[data-value="Public"]').click()
await page.locator('[name="SaveEdit"]').click()
let text = await page.locator('[name="primaryField"]').nth(0).innerText()
expect.soft(text).toContain('Test')

let fileupload =  page.locator('//input[@type="file"]')
await fileupload.setInputFiles('Data/sampleimage.jpg')
await page.getByRole('button',{name:'Done'}).click()
let title = await page.locator('[title="sampleimage"]').textContent()
expect(title).toContain('sampleimage')




})
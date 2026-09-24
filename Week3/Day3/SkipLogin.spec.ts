import {test} from "@playwright/test"


test.use(
    {
       storageState:'Data/sflogin.json' 
    }
)

test('auth file to skip the login', async ({page}) => {

await page.goto("https://orgfarm-40a42d5208-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
await page.waitForLoadState('domcontentloaded')
console.log(await page.title());
console.log(page.url());

})
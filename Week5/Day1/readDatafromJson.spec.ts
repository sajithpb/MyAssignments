import {test} from "@playwright/test"
import data from "../../../Data/login.json"
for(let credentials of data){

    

test(`Read data from Json ${credentials.tcid}`,async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('[type="email"]').fill(credentials.username)
    await page.locator('#Login').click()
    await page.locator('#password').fill(credentials.password)
     await page.locator('#Login').click()
})
}
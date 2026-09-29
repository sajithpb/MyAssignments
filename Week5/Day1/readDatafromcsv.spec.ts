import {test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from 'fs'
import path from 'path'

const filepath = path.join(__dirname,"../../../utils/loginData.csv")
let value:any[]=parse(fs.readFileSync(filepath),{columns:true,skip_empty_lines:true})

for (let credentials of value){
test(`Read data from csv ${credentials.tcid}`,async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(credentials.username)
    await page.locator('label+input').nth(1).fill(credentials.password)
    await page.locator('[type="submit"]').click()
   


})
}







/* test("Dropdown Testing",async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('label+input').nth(1).fill('crmsfa')
    await page.locator('[type="submit"]').click()

}) */
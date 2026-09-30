import {test} from '@playwright/test'
import dotenv from 'dotenv'



let filename = process.env.envfile || "QA" || "Prod"
dotenv.config({path:`utils/data/${filename}.env`})



let URL = process.env.if_url as string
let UserName = process.env.if_username as string
let Password = process.env.if_password as string


test("Read data from env",async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(UserName)
    await page.locator('label+input').nth(1).fill(Password)
    await page.locator('[type="submit"]').click()
})



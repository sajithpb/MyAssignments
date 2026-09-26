import {test,expect} from '@playwright/test'
import { title } from 'node:process'

test("Decathlon Products",async({page})=>{

await page.goto('https://www.decathlon.in/')
await page.waitForLoadState('domcontentloaded')
await expect.soft(page).toHaveTitle('Buy Sporting Goods, Sportswear and Equipments | Download App')
let searchBox=page.locator('[type="search"]')
await searchBox.click()
await searchBox.fill('shoes')
await searchBox.press('Enter')
await page.waitForLoadState('networkidle')
let pageTitle = await page.title()
console.log(pageTitle)
await expect.soft(page).toHaveTitle('Search | shoes')
await page.waitForLoadState('domcontentloaded')
await page.getByTestId('title:Sport').click()
await page.getByTestId('filter-sidebar:item-text').filter({hasText:"Running"}).first().click()
await page.getByTestId('title:Gender').click()
await page.getByTestId('filter-sidebar:item-text').filter({hasText:"Men"}).first().click()
await page.getByTestId('title:Size').click()
await page.getByTestId('filter-sidebar:item-text').filter({hasText:"10.5"}).first().click()
await page.getByTestId('sort-bar-desktop:dropdown-button').click()
await page.getByTestId('sort-option-dsi_pim_migration_price_asc').click()
await page.getByTestId('product-card:product-card:title').first().click()
await page.getByTestId('pdp-size-option-text-6').click()
await page.getByTestId('pdp:add-to-cart-button').click()
await page.getByTestId('header-desktop:cart-link').click()
console.log(await page.getByTestId('cart:product-selling-price').innerText())

})
import {test,expect} from '@playwright/test'

test("Pvr Ticket Booking",async({page})=>{

await page.goto('https://www.pvrcinemas.com/')
await page.waitForLoadState('domcontentloaded')
await page.locator('//h6[@class="cities-name pointer" and text()="Chennai"]').click()
await page.locator('//p[text()="Quick Book"]/following::span[text()="Cinema"]').click()
await page.locator('//span[text()="Select Cinema"]').click()
await page.locator('//li[@class="p-dropdown-item"]',{hasText:"INOX National,Virugambakkam Chennai"}).click()
await page.locator('//li[@class="p-dropdown-item"]',{hasText:"Tomorrow"}).click()
await page.locator('//li[@class="p-dropdown-item"]',{hasText:"THE PARADISE"}).click()
await page.locator('//li[@class="p-dropdown-item"]',{hasText:"10:45 PM"}).click()
await page.locator('[aria-label="Submit"] span').click()
await page.locator('//button[text()="Accept"]').click()
await page.locator('//button[text()="Accept"]').click()
await page.locator('[id="SL.SILVER|D:8"]').click()
let seatInfo=await page.locator('(//div[@class="seat-info"]//p)[2]').textContent()
expect(seatInfo).toBe('D8')
let ticketPrice = (await page.locator('//div[@class="tax-fees"]//h6').innerText()).trim()
expect(ticketPrice).toEqual('202.49')
expect(page).toHaveTitle('PVR Cinemas')
})
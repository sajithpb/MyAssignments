import {test,expect} from '@playwright/test'
import data from '../../Data/Chatter.json'

test.use(
    {
       storageState:'Data/sf-storage.json' 
    }
)

test('Creating a new case',async({page})=>{

    await page.goto("https://orgfarm-40a42d5208-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
    await expect(page.locator('[aria-label="Search"]')).toBeVisible() //asserting search box in homepage is visible
    await page.getByRole('button',{name:'App Launcher'}).click()
    await page.locator('//p[text()="Service"]').click()
    expect.soft(await page.locator('//span[@title="Service"]').textContent()).toContain('Service')
    await page.getByRole('link',{name:'Cases'}).click()
    await page.getByRole('button',{name:'New'}).click()
    await page.getByRole('combobox',{name:'Contact Name'}).click()
    await page.getByRole('option',{name:'Add New Contact'}).click()
    await page.getByRole('combobox',{name:'Salutation'}).click()
    await page.getByText('Mr.',{exact:true}).click()
    await page.getByRole('textbox',{name:'First Name'}).fill(`${data.firstname}${data.number}`)
    await page.getByRole('textbox',{name:'Last Name'}).fill(`${data.firstname}${data.number}`)
    await page.getByRole('button',{name:'Save'}).click()//Saving Contact
    expect.soft(await page.locator('.toastMessage').textContent()).toContain('created')//validating contact created successfully
    await page.getByRole('combobox',{name:'Account Name'}).click()
    await page.getByRole('option',{name:'Add New Account'}).click()
    await page.locator('[name="Name"]').fill(`${data.accountName}${data.number}`)
    await page.getByRole('textbox',{name:'Account Number'}).fill(`${data.accountNumber}${data.number}`)
    await page.getByRole('combobox',{name:'Rating'}).click()
    await page.getByRole('option',{name:'Hot'}).click()
    await page.getByRole('button',{name:'Save'}).click() //Saving Account
    expect.soft(await page.locator('.toastMessage').textContent()).toContain('created')//validating account created successfully
    expect.soft(page.getByRole('combobox',{name:'Priority'})).toBeVisible()
    await page.getByRole('combobox',{name:'Priority'}).click()
    await page.getByRole('option',{name:'High'}).click()
    await page.getByRole('combobox',{name:'Case Origin'}).click()
    await page.getByRole('option',{name:'Email'}).click()
    await page.getByRole('textbox',{name:'Subject'}).fill('Product Return Request')
    await page.getByRole('textbox',{name:'Description'}).fill('return for a defective product')
    await page.getByRole('button',{name:'Save'}).first().click()//Saving Case
    expect.soft(await page.locator('.toastMessage').textContent()).toContain('created')//validating case is created successfully
    await page.getByRole('button',{name:'Cancel and close'}).click()//closing the window
    await page.locator('[title="Edit"]').click()
    await page.getByRole('combobox',{name:'Status'}).click()
    await page.getByRole('option',{name:'Escalated'}).click()
    await page.getByRole('button',{name:'Save'}).first().click()//Editing the status to escalated and saved
    expect(await page.locator('//lightning-formatted-text[text()="Escalated"]').first().textContent()).toContain('Escalate')//Validating the status has changed to escalated
    await page.getByRole('button',{name:'Cancel and close'}).click()
    await page.getByRole('button',{name:'Show more actions'}).click()
    await page.getByRole('button',{name:'Share an update...'}).click()
    await page.getByRole('textbox',{name:'Share an update...'}).fill(`Case Updated ${data.number}`)
    await page.getByRole('button',{name:'Share'}).click()//Shared the update
    await page.getByRole('tab',{name:'Poll'}).click()//switching between the tabs just to refresh the feed
    await page.getByRole('tab',{name:'Post'}).first().click()
    await page.getByText('Latest Posts',{exact:true}).first().click() //filtered latest posts
    await page.getByRole('link',{name:'Actions for this Feed Item'}).first().click()    
    await page.getByText('Like on Chatter',{exact:true}).first().click() //Liked the case
    expect.soft(await page.locator('.toastMessage').first().textContent()).toContain('liked')//validating toast message
    await page.getByRole('link',{name:'Chatter'}).click()
    expect(await page.locator('[title="Unlike"]').first().innerText()).toContain('Liked')//validating whether  the post has got like in the chatter page
    
})


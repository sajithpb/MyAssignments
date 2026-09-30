import {expect, test} from "@playwright/test"
import data from '../../../Data/dropdown.json'
import {parse} from "csv-parse/sync"
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path:'utils/data/Dropdown.env'})
const filepath = path.join(__dirname,"../../../utils/dropDown.csv")
let value:any[]=parse(fs.readFileSync(filepath),{columns:true,skip_empty_lines:true})
let State = process.env.if_state as string


test("Creating Lead using data param",async({page})=>{
    
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox',{name:"Username"}).fill('democsr2')
    await page.getByRole('textbox',{name:"Password"}).fill('crmsfa')
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole('link',{name:"CRM/SFA"}).click()
    await page.getByRole('link',{name:"Leads"}).click()
    await page.getByRole('link',{name:"Create Lead"}).click()
    await page.getByRole('textbox',{name:""}).nth(0).fill('Test Company')
    await page.locator('#createLeadForm_firstName').fill('Test First Name')
    await page.locator('#createLeadForm_lastName').fill('Test Last Name')
    let sourceDropdownOptions =  page.locator('#createLeadForm_dataSourceId') //selecting dropdown
    let optionlist= await page.locator('//select[@name="marketingCampaignId"]/option').allInnerTexts() // for fetching proper count
    let newlist =optionlist.filter(list=>list.slice(1))//filtering nbsp empty entry
    console.log(newlist.length);
    await sourceDropdownOptions.selectOption({label:data.sourceDropdown})//reading data from json
    let marketingDropdownOptions = page.locator('#createLeadForm_marketingCampaignId')
    await marketingDropdownOptions.selectOption({value:value[0].marketing_dropdown})//reading data from csv
    for(let i =0; i<await sourceDropdownOptions.count();i++){

        
        console.log(await marketingDropdownOptions.nth(i).innerText()); //printing all the dropdown options
        
    }
    await page.waitForLoadState('domcontentloaded')
    let currencyOptions =  page.locator('#createLeadForm_currencyUomId')
    await currencyOptions.scrollIntoViewIfNeeded()
    await currencyOptions.selectOption({value:'INR'})
    let countryOptions= page.locator('#createLeadForm_generalCountryGeoId')
    await countryOptions.selectOption({value:'IND'})
    let stateOptions = page.locator('#createLeadForm_generalStateProvinceGeoId')
    await stateOptions.selectOption({value:State}) //reading data from env variables
    let stateOptionsList= await page.locator('#createLeadForm_generalStateProvinceGeoId option').allInnerTexts()//for fetchingproper count
    let listofStates =stateOptionsList.filter(statelist=>statelist.slice(1))//filtering nbsp empty entry
    console.log(listofStates.length)
      for(let i =0; i<await stateOptions.count();i++){

        
        console.log(await stateOptions.nth(i).innerText()); //printing all states from dropdown
        
    }
    
    await page.locator('[name="submitButton"]').click()
    expect(await page.locator('#viewLead_companyName_sp').innerText()).toContain('Test Company')//validating created lead
    
    
    
    
    



})
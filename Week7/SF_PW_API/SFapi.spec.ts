import {test,request, expect} from '@playwright/test'

    let ac_token:any
    let to_type :any
    let inst_url:any
    let contact_id:any
    let account_id:any 
    let case_id:any


test.describe.serial("Running in serial mode",()=>{

test("Create Token",async()=>{


const apiContext = await request.newContext();
const responseBody = await apiContext.post('https://orgfarm-40a42d5208-dev-ed.develop.my.salesforce.com/services/oauth2/token', {

    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
        'grant_type': 'client_credentials',
        'client_id': '3MVG97Tt9.zIfTDutp0JVYGFi1UZTTZhy4EsipIxnWvfQV_mUrQBR_m.xBSTyNCjg.9p.wmXzfUsCeX5XnXeR',
        'client_secret': '084D9F8B424BC9E9CC8760C6417C3C18D5C9DD1619400E9BF2C720BE63069338'
    }
})

    
    const jsonData = await responseBody.json();
    console.log(jsonData)
    await expect(responseBody).toBeOK()
    expect(responseBody.status()).toBe(200)
   
    ac_token = jsonData.access_token
    to_type = jsonData.token_type
    inst_url = jsonData.instance_url

    console.log(ac_token)
    console.log(to_type)
    console.log(inst_url)


})


test ("Creating a new Contact",async({request})=>{


    let responseBody = await request.post(`${inst_url}/services/data/v57.0/sobjects/Contact`,{
        headers:{
            'Authorization':`${to_type} ${ac_token}`,
            'Content-Type': 'application/json'
        },
        data: {
            "LastName":"TestUser LastName Postman",
            "FirstName":"TestUser FirstName Postman"
        }

    })

    const jsonData = await responseBody.json();
    console.log(jsonData)
    await expect(responseBody).toBeOK()
    expect(responseBody.status()).toBe(201)
    contact_id = jsonData.id
    expect(jsonData).toHaveProperty('id')
    expect(responseBody.statusText()).toBe('Created')

    })

test("Creating a new Account",async({request})=>{


    let responseBody = await request.post(`${inst_url}/services/data/v65.0/sobjects/Account`,{
        headers:{
            'Authorization':`${to_type} ${ac_token}`,
            'Content-Type': 'application/json'
        },
        data: {
            "Name":"TestUser Account Postman"
        }

    })

    const jsonData = await responseBody.json();
    console.log(jsonData)
    await expect(responseBody).toBeOK()
    expect(responseBody.status()).toBe(201)
    account_id = jsonData.id
    expect(jsonData).toHaveProperty('id')
    expect(responseBody.statusText()).toBe('Created')


})



test("Creating a new Case",async({request})=>{



    let responseBody = await request.post(`${inst_url}/services/data/v65.0/sobjects/Case`,{
        headers:{
            'Authorization':`${to_type} ${ac_token}`,
            'Content-Type': 'application/json'
        },
        data: {
        
            "ContactId":`${contact_id}`,
            "AccountId":`${account_id}`,
            "Status":"New",
            "Origin":"Phone"
        }

    })

    const jsonData = await responseBody.json();
    console.log(jsonData)
    await expect(responseBody).toBeOK()
    expect(responseBody.status()).toBe(201)
    expect(jsonData).toHaveProperty('id')
    expect(responseBody.statusText()).toBe('Created')
    case_id = jsonData.id

})

test("Updating a Case",async({request})=>{

    let responseBody = await request.patch(`${inst_url}/services/data/v65.0/sobjects/Case/${case_id}`,{
        headers:{
            'Authorization':`${to_type} ${ac_token}`,
            'Content-Type': 'application/json'
        },
        data: { 

            "Status":"Escalated"
        
        }
    })

    expect(responseBody.status()).toBe(204)
    expect(responseBody.statusText()).toBe('No Content')
})

test("Fetching Case Details",async({request})=>{

    let responseBody = await request.get(`${inst_url}/services/data/v65.0/sobjects/Case/${case_id}`,{
        headers:{
            'Authorization':`${to_type} ${ac_token}`,
            'Content-Type': 'application/json'
        }

    })

    const jsonData = await responseBody.json();
    console.log(jsonData)
    await expect(responseBody).toBeOK()
    expect(responseBody.status()).toBe(200)
    expect(jsonData).toHaveProperty('Status')
    expect(jsonData.Status).toBe('Escalated')


    })


test("Deleting a Case",async({request})=>{

    let responseBody = await request.delete(`${inst_url}/services/data/v65.0/sobjects/Case/${case_id}`,{
        headers:{
            'Authorization':`${to_type} ${ac_token}`,
            'Content-Type': 'application/json'
        }

    })

    expect(responseBody.status()).toBe(204)
    expect(responseBody.statusText()).toBe('No Content')

})

})

import {expect, test} from '@playwright/test'
import data from '../../../Data/client_cred.json'
let access_token:string
let bearer:string
let problem_sys_id:string
let problem_number:string

test.describe.serial('Running in Serial Mode',()=>{
test('Snow API - Authentication', async ({request}) => {
    const responseBody = await request.post('https://dev416068.service-now.com/oauth_token.do',{

        headers:{
            'Accept':'application/x-www-form-urlencoded'
        },

        form:{
            

            "grant_type":"password",
            "client_id":data.client_id,
            "client_secret":data.client_secret,
            "username":data.username,
            "password":data.password

    }
})

const jsonResponse = await responseBody.json()
console.log(jsonResponse)
expect(responseBody.status()).toBe(200)
console.log(responseBody.status())
expect(responseBody.statusText()).toBe('OK')
console.log(responseBody.statusText())
access_token = jsonResponse.access_token
bearer=jsonResponse.token_type


})

test('Snow API - Problem Creation', async ({request}) => {   
    
    

    let responseBody = await request.post('https://dev416068.service-now.com/api/now/table/problem',{
        headers:{

            'Authorization':`${bearer} ${access_token}`,
            'Content-Type':'application/json',
        },

        data:{
            
            "short_description": "Repeated login failures in Salesforce",
            "description": "Creating Using PW_API",
}

    })

        const jsonResponse = await responseBody.json()
        console.log(jsonResponse)
        expect(responseBody.status()).toBe(201)
        console.log(responseBody.status())
        expect(responseBody.statusText()).toBe('Created')
        console.log(responseBody.statusText())
        problem_sys_id = jsonResponse.result.sys_id
        console.log(problem_sys_id)
        problem_number = jsonResponse.result.number
        console.log(problem_number)

})

test('Snow API - Problem Update', async ({request}) => {

    let responseBody = await request.patch(`https://dev416068.service-now.com/api/now/table/problem/${problem_sys_id}`,{
        headers:{

            'Authorization':`${bearer} ${access_token}`,
            'Content-Type':'application/json',

        },
        data:{
                    
             "description":"Updated using patch"

        }

    })

    let jsonResponse = await responseBody.json()
    console.log(jsonResponse)
    expect(responseBody.status()).toBe(200)
    console.log(responseBody.status())
    expect(responseBody.statusText()).toBe('OK')
    console.log(responseBody.statusText())

})

test ('Snow API - Problem Fetch', async ({request}) => {


    let responseBody = await request.get(`https://dev416068.service-now.com/api/now/table/problem/${problem_sys_id}`,{
        headers:{
            
            'Authorization':`${bearer} ${access_token}`,
            'Content-Type':'application/json'
        }

    })

    let jsonResponse = await responseBody.json()
    console.log(jsonResponse)
    expect(responseBody.status()).toBe(200)
    console.log(responseBody.status())
    expect(responseBody.statusText()).toBe('OK')
    console.log(responseBody.statusText())  


})


test ('Snow API - Problem Delete', async ({request}) => {

    let responseBody = await request.delete(`https://dev416068.service-now.com/api/now/table/problem/${problem_sys_id}`,{
        headers:{   

                'Authorization':`${bearer} ${access_token}`,
                'Content-Type':'application/json'
        }

    })

    expect(responseBody.status()).toBe(204)
    console.log(responseBody.status())
    expect(responseBody.statusText()).toBe('No Content')
    console.log(responseBody.statusText())  

})

test('UI',async ({page}) => {
    
    await page.goto('https://dev416068.service-now.com/login')
    await page.locator('#user_name').fill('admin')
    await page.locator('#user_password').fill('gx*K6SOt2oO=')
    await page.locator('#sysverb_login').click()
    await page.getByRole('menuitem', { name: 'All' }).click() 
    await page.locator('#filter').fill('problem.list')
    await page.locator('#filter').press('Enter')
    let frame = page.frameLocator('#gsft_main')   
    await expect(frame.locator(`text=${problem_number}`)).toBeHidden()

    
})  

})
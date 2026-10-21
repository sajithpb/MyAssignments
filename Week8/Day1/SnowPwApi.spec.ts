import {expect, test} from '@playwright/test'
let access_token:string
let bearer:string
let change_request_sys_id:string

test.describe.serial('Running in Serial Mode',()=>{
test('Snow API - Authentication', async ({request}) => {
    const responseBody = await request.post('https://dev416068.service-now.com/oauth_token.do',{

        headers:{
            'Accept':'application/x-www-form-urlencoded'
        },

        form:{
            

            "grant_type":"password",
            "client_id":"7ed23a2d5aab40ac90068960fd647731",
            "client_secret":"^$vP9vupe^#[t#}*W~qWHslQa3sPqP;U",
            "username":"admin",
            "password":"gx*K6SOt2oO="

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

test('Snow API - Change Request Creation', async ({request}) => {   
    
    

    let responseBody = await request.post('https://dev416068.service-now.com/api/now/table/change_request',{
        headers:{

            'Authorization':`${bearer} ${access_token}`,
            'Content-Type':'application/json',
        },

        data:{
            
            "short_description": "Email not working",
            "description": "Creating Using Post",
            "comments": "Updated via POSTMAN",
            "work_notes": "Checked mail server logs",
            "subcategory": "Email",
            "impact": "2",
            "urgency": "2"
}

    })

        const jsonResponse = await responseBody.json()
        console.log(jsonResponse)
        expect(responseBody.status()).toBe(201)
        console.log(responseBody.status())
        expect(responseBody.statusText()).toBe('Created')
        console.log(responseBody.statusText())
        change_request_sys_id = jsonResponse.result.sys_id
        console.log(change_request_sys_id)

})

test('Snow API - Change Request Update', async ({request}) => {

    let responseBody = await request.put(`https://dev416068.service-now.com/api/now/table/change_request/${change_request_sys_id}`,{
        headers:{

            'Authorization':`${bearer} ${access_token}`,
            'Content-Type':'application/json',

        },
        data:{
                    
             "description":"Updated using put"

        }

    })

    let jsonResponse = await responseBody.json()
    console.log(jsonResponse)
    expect(responseBody.status()).toBe(200)
    console.log(responseBody.status())
    expect(responseBody.statusText()).toBe('OK')
    console.log(responseBody.statusText())

})

test ('Snow API - Change Request Fetch', async ({request}) => {


    let responseBody = await request.get(`https://dev416068.service-now.com/api/now/table/change_request/${change_request_sys_id}`,{
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


test ('Snow API - Change Request Delete', async ({request}) => {

    let responseBody = await request.delete(`https://dev416068.service-now.com/api/now/table/change_request/${change_request_sys_id}`,{
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

})
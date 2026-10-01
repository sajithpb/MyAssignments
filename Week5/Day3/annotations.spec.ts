import {test} from '@playwright/test'


test.describe('Test case groupings',{ tag:'@regression'},async()=>{

    test('first test case',async()=>{

        console.log("First test case executed successfully");
        

    })


    test('second test case',{
        annotation:{
            type:'Requirement',
            description:'user id : 100'
        }},
            async()=>{

        console.log("Second test case executed successfully");
        

    })


    test.fail('Third test case - Known issue',async()=>{

        console.log("Second test case executed successfully");
        

    })


})
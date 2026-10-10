import {test as base} from '@playwright/test'
import { Login } from '../pages_sf/loginPagesf'
import { Homepagesf } from '../pages_sf/HomePagesf'
import { LeadPagesf } from '../pages_sf/LeadPagesf'



type myFixtures={

    loginfix:Login
    homefix:Homepagesf
    leadpagefix:LeadPagesf


}

export const test = base.extend<myFixtures>({

loginfix : async({page},use)=>{

 let objlp = new Login(page)
 await use(objlp)

},

homefix : async({page},use)=>{

 let objhp = new Homepagesf(page)
 await use(objhp)

},

leadpagefix : async({page},use)=>{

 let objleadp = new LeadPagesf(page)
 await use(objleadp)

},


})
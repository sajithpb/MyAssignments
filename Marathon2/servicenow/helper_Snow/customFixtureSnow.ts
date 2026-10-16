import {test as base} from '@playwright/test'
import { Login } from '../pages_Snow/loginPageSnow'
import { Homepage } from '../pages_Snow/homePageSnow'
import { ServiceCatalogPage } from '../pages_Snow/servicecatalogPageSnow'
import { MobilePage } from '../pages_Snow/mobilePageSnow'
import { MobileDetailPage } from '../pages_Snow/mobileDetailPageSnow'
import { OrderStatusPage } from '../pages_Snow/orderStatusPage'




type myFixtures={

    loginfix:Login
    homefix:Homepage
    servcatalogfix:ServiceCatalogPage
    mobilefix:MobilePage
    mobiledetailsfix:MobileDetailPage
    orderfix:OrderStatusPage
}

export const test = base.extend<myFixtures>({

loginfix : async({page},use)=>{

 let objlp = new Login(page)
 await use(objlp)

},

homefix : async({page},use)=>{

    let objhp = new Homepage(page)
    await use(objhp)

},

servcatalogfix : async({page},use)=>{

    let objsc = new ServiceCatalogPage(page)
    await use(objsc)

},

mobilefix : async({page},use)=>{

    let objmfix = new MobilePage(page)
    await use(objmfix)

},

mobiledetailsfix : async({page},use)=>{

    let objmdfix = new MobileDetailPage(page)
    await use(objmdfix)
},

orderfix : async({page},use)=>{

    let objodfix = new OrderStatusPage(page)
    await use(objodfix)
}


})
import {test} from '../helper_Snow/customFixtureSnow'

test.use(
    {
       storageState:'Data/snow-storage.json' 
    }
)

test('create account using POM',async ({


    loginfix,
    homefix,
    servcatalogfix,
    mobilefix,
    mobiledetailsfix,
    orderfix




}) => { 

  
  await loginfix.loadUrl('https://dev416068.service-now.com')
  await homefix.ClickonAllButton()
  await homefix.EnterTextInSearchBox()
  await servcatalogfix.ClickonMobile()
  await mobilefix.clickonIphone13Pro()
  await mobiledetailsfix.configureIphone13Pro()
  await mobiledetailsfix.clickonOrderNowButton()
  await orderfix.verifyOrderStatus()


})
import { Locator, Page } from "@playwright/test"
import { url } from "node:inspector"


export abstract class PlayWrightWrapperSnow{
    
        page:Page
            
    constructor(tpage:Page){
            this.page=tpage
              }


    
    async loadApp(url:string){
        try{
        await this.page.goto(url)
        console.log("login successfull");
        
        }
        catch(error)
        {

            console.log("Login not successfull",error);
            throw new Error(`login failed",${error}`);
        }
        

    }



    async clearAndFill(locator:string | Locator ,data:string){

        let element:Locator

        if(typeof locator ==='string'){
            element=this.page.locator(locator)
        }else{
            element = locator
        }

        await element.clear()
        await element.fill(data)

    }

    async clickonElement(locator:string | Locator){

         let element:Locator

        if(typeof locator ==='string'){
            element=this.page.locator(locator)
        }else{
            element = locator
        }

        await element.click()
    }



    async pressEnter(locator:string | Locator){

        
         let element:Locator

        if(typeof locator ==='string'){
            element=this.page.locator(locator)
        }else{
            element = locator
        }

        await element.press('Enter')
    }


    async SwitchToFrame(frameLocator:string){

        let frame = this.page.frameLocator(frameLocator)
        return frame


    }

    async TakeScreenshot(name:string){

        await this.page.screenshot({path:`./screenshots/${name}.png`,fullPage:true})
        
    }

}


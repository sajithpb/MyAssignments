import { Locator } from "@playwright/test";
import { PlayWrightWrapperSnow } from "../helper_Snow/PlaywrightWrapperSnow";

export class MobileDetailPage extends PlayWrightWrapperSnow{

    

    async configureIphone13Pro(){

        let frame = await this.SwitchToFrame('[title="Main Content"]')
   
        await this.clickonElement(frame.getByText("No",{exact:true}))
        let dropdown = frame.locator('[class="form-control cat_item_option "]')
        dropdown.selectOption({value:"500MB"})
        

    }

    async clickonOrderNowButton(){

        let frame = await this.SwitchToFrame('[title="Main Content"]')
        await this.clickonElement(frame.getByRole("button", { name: "Order Now" }))
        
    }
}
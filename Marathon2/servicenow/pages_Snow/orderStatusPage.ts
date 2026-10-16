import { expect } from "@playwright/test";
import { PlayWrightWrapperSnow } from "../helper_Snow/PlaywrightWrapperSnow";

export class OrderStatusPage extends PlayWrightWrapperSnow{

    async verifyOrderStatus(){

        let frame = await this.SwitchToFrame('[title="Main Content"]')
        await frame.locator('[class="notification notification-success"]').waitFor({state:"visible"})
         expect(await frame.locator('[class="notification notification-success"]').textContent()).toContain("submitted")
         await this.TakeScreenshot("OrderStatusPage")

    }

   

}
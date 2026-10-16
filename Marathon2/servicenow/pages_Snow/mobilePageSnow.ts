import { PlayWrightWrapperSnow } from "../helper_Snow/PlaywrightWrapperSnow";

export class MobilePage extends PlayWrightWrapperSnow{



    async clickonIphone13Pro(){

        let frame = await this.SwitchToFrame('[title="Main Content"]')
        await this.clickonElement(frame.getByRole("heading", { name: "Apple iPhone 13 pro" }).first())
    }

}



import { PlayWrightWrapperSnow } from "../helper_Snow/PlaywrightWrapperSnow";

export class Homepage extends PlayWrightWrapperSnow {


    async ClickonAllButton(){


        await this.clickonElement(this.page.getByRole("menuitem", { name: "All" }))
    }

    async EnterTextInSearchBox(){

        await this.clearAndFill('[placeholder="Filter"]','Service Catalog')
        await this.pressEnter('[placeholder="Filter"]')
    }

    
}
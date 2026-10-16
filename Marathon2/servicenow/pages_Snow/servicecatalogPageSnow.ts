import { PlayWrightWrapperSnow } from "../helper_Snow/PlaywrightWrapperSnow";

export class ServiceCatalogPage extends PlayWrightWrapperSnow{


  async ClickonMobile(){

    let frame = await this.SwitchToFrame('[title="Main Content"]')
    await this.clickonElement(frame.getByRole("heading", { name: "Mobiles" }).nth(1))
    await this.clickonElement(frame.getByRole("heading", { name: "Mobiles" }).nth(1))
  }


    
}
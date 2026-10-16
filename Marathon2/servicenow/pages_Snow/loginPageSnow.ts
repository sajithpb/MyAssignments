import { PlayWrightWrapperSnow } from "../helper_Snow/PlaywrightWrapperSnow"

export class Login extends PlayWrightWrapperSnow {



async loadUrl(url:string){

   await this.loadApp(url)

}


}

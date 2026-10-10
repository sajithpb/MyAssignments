import { playwrightWrapperSF } from "../helpersf/PlaywrightWrapperSF"

export class Login extends playwrightWrapperSF{



async loadUrl(url:string){

   await this.loadApp(url)

}


}

import {Page} from "@playwright/test"

export class Login{

    page:Page
    


constructor(tpage:Page){
        this.page=tpage
        

}


async loadUrl(url:string){

    await this.page.goto(url)

}


}

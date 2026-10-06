import { Browser } from "./Parent";

class Chrome extends Browser{


    launchBrowser(){

        console.log('launch browser method in first child');
        
    }

}

let ch = new Chrome()
import { BrowserParentOverriding } from "./OverridingParentClass";

class chrome extends BrowserParentOverriding{


    browserVersion() {

        console.log("Method in child class");
        super.browserVersion()
        
    }



}
let cr = new chrome()
cr.browserVersion()
import { Browser } from "./Parent";

class Edge extends Browser{


    launchBrowser(){


        console.log('launch browser in second child method');
        
    }
}

let ed = new Edge()
ed.browserType()
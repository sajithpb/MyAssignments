import { BasePage } from "./BasepageAbstract";

class LoginPage extends BasePage implements PageRules {
    
    verifypage(): void {
        
        console.log('Login Page Verified');
        
    }

    enterUsername(){
        console.log('user name entered');
        
    }

    enterPassword(){

        console.log('Password entered');
        
    }

    clickLogin(){

        console.log('login clicked');
        
    }

}

let lp = new LoginPage()
lp.WaitForPageLoad()
lp.verifypage()
lp.enterUsername()
lp.enterPassword()
lp.clickLogin()
lp.getPageTitle()
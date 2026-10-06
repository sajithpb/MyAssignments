import { Automation } from "./AbstractClassParent";

class AutomationConcrete extends Automation{
   
   
    locator(): void {
        console.log('locator method implemented in concrete class')
        
    }
    frame(): void {
        console.log('frame method implemented in concrete class');
        
    }


}

let ac = new AutomationConcrete()
ac.clear()
ac.fill()
ac.frame()
ac.locator()
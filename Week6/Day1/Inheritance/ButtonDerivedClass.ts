import { WebComponent } from "./BaseClass";

export class Button extends WebComponent{

    click(){

        super.click()
        console.log('click is overridden in the Button class from WebComponents');
        
    }

}
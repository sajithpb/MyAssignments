import { WebComponent } from "./BaseClass";
import { Button } from "./ButtonDerivedClass";

class TextInput extends WebComponent{

    value:string=''


    enterText(text:string){

        this.value=text
        console.log(`Entered text is ${this.value}`);
        
    }

}

function testComponents(){
    
    //cannot extend two classes but can export
    //Button instance - sets value of selector as 'SelectorfromTextInputClass' on button instance
    let button = new Button('SelectorfromTextInputClass') //calls the default super() constructor of base class
    //TextInput instance - sets value of selector as 'newText' on text input instance
    let ti = new TextInput('newText')//calls the deafult super() constructor of base class
    button.click()
    ti.enterText('Hello World')

    
}
testComponents()
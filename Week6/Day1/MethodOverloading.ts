class TextBox{



fill(text: string):void
//fill(text: string, locator: string)


fill(text:string,num:number):void



fill(text:string,num?:number):void{


    if(num){

        console.log('number is selected');
        

    }else{

        console.log('text os selected');
        
    }

}

}
let tx = new TextBox()
tx.fill('hello',10)

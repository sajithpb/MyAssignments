export class WebComponent{

    selector:string

    constructor(sel:string){
    this.selector = sel
    }


    click(){

        console.log(`User is clicking the button ${this.selector}`);
        
    }

    focus(){

        console.log(`User is focusing on ${this.selector}`);
        
    }

}


let wc =new  WebComponent('sampleSelector')

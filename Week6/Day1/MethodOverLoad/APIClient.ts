class APIClient{

    sendRequest(endpoint:string):void
    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean):void

    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean):void{

        if(requestBody!=undefined && requestStatus!=undefined ){
            
            console.log(`The endpoint is ${endpoint},requestbody is ${requestBody} and status is ${requestStatus}`); 

        }else{
            console.log(`The endpoint is ${endpoint}`);  
        }

}
}
let api = new APIClient()
api.sendRequest('Sample Request')
api.sendRequest('Sample Request','Sample Body',true)
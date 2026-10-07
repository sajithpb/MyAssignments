import { Payment } from "./InterfacePayment";

class CreditCard implements Payment{
    
     
    pay(amount: number): void {
        
        console.log(`amount via creditcard is ${amount}`);
        
    }

    
}

let cr = new CreditCard()
cr.pay(10000)
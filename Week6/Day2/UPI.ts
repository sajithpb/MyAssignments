import { Payment } from "./InterfacePayment";

class UPI implements Payment{
   
   
    pay(amount: number): void {
         
        console.log(`amount via upi is ${amount}`);
        
    }
    
}
let up = new UPI()
up.pay(5000)
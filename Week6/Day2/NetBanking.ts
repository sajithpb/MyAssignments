import { Payment } from "./InterfacePayment";

class NetBanking implements Payment{
    
    
    pay(amount: number): void {
       
        console.log(`amount via netbanking is ${amount}`);
        
    }


    
}
let nt = new NetBanking()
nt.pay(15000)
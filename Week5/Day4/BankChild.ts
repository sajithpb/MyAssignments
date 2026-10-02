import { BankAccount } from "./BankParent";

class BankAccountChild extends BankAccount{

    printingValue(){


        console.log(this.balance)
        console.log(this.accountNumber)//protected can be accessed within parent and child classes
        //console.log(this.accountHolder)//Private cannot be accessed inside child class 
        
    }
    
}

let childBank = new BankAccountChild()
childBank.printingValue()
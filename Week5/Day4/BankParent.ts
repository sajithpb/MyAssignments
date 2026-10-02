export class BankAccount{

    public accountNumber:number = 123456
    private accountHolder:string = 'TestUser'
    protected balance:number=20000
    

    depositMoney(amount:number):number{

        this.balance=amount+this.balance
        return this.balance

    }

    withdrawMoney(amount:number){

        this.balance=this.balance-amount
        return this.balance
    }

}

let parentBank = new BankAccount()

console.log(parentBank.accountNumber);
//console.log(parentBank.accountHolder) Not accessible directly because account holder is private
//console.log(parentBank.balance) Not accessible directly because balance is protected


console.log(parentBank.depositMoney(500)) //balance can be made accessible by using a public method
console.log(parentBank.withdrawMoney(100));

//public : Can be accessed anywhere
//private : Only accessible inside class
//protected : Can be accessible within class and extended class
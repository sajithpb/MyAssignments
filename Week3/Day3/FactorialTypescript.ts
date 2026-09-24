
function factorial(input:number){
let fact:number = 1
    
    if(input<0){

        console.log("Its a negative number");
        
    }else{

        for(let i =1;i<=input;i++){

            fact = (fact*i)
         
        }
           return fact
    }
}

console.log(factorial(5))
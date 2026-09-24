function fibonacci (input:number){

let firstnumber :number = 0
let secondnumber :number = 1

for(let i =1;i<=input;i++){

console.log(firstnumber)

let nextnumber:number = firstnumber+secondnumber
firstnumber=secondnumber
secondnumber=nextnumber

}
}
fibonacci(5)

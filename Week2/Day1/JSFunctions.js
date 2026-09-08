//Task1

userProfile("Sajith")
function userProfile(string){
    console.log(`Hello ${string}!`);   
}

//Task2

let double = (number)=>{
    return number*2
}
console.log(double(5));

//Task3

setTimeout(() => {console.log(`""This message is delayed by 2 seconds"`)},2000);

//Task4

function getUserData(callback){
 
        setTimeout(() => {callback()},3000);

}

function message(){
    console.log("Call Back Function");
    
}
getUserData(message)

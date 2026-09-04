let reverse=""
let inputString=""


function stringReverse(string1) {

    inputString=string1
    let characters=string1.split("")
    for(let i=characters.length-1;i>=0;i--){
     reverse=reverse+characters[i]
    }
    console.log(reverse);    
}


function palindromeCheck(){

    if(reverse===inputString){     
        return true
    }else{
        return false
    }
}


stringReverse("noon")
console.log(palindromeCheck())
let word ="Hello World"
let splittedWord=word.split(" ")
let lastWord= splittedWord[splittedWord.length-1]
console.log(lastWord.length);


let wordExample2 = " fly me to the moon "
let trimmedWord = wordExample2.trim()
let splittedArray=trimmedWord.split(" ")
let finalWord=splittedArray[splittedArray.length-1]
console.log(finalWord.length)

function isAnagram(string1,string2) {
    let formattedString1=string1.trim().toLowerCase().split("").sort().toString()
    let formattedString2=string2.trim().toLowerCase().split("").sort().toString()
   
    if(formattedString1==formattedString2){

        return true
        
    }else{
        
        return false      
    }
}

console.log(isAnagram("Heart","Earth"))
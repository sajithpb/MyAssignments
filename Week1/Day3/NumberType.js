function numberCheck(number) {
    if(number >0){
        return 'Positive'
    }else if (number<0) {
        return 'negative'
    }else{
        return 'neutral'
    }
}
console.log(numberCheck(-1))
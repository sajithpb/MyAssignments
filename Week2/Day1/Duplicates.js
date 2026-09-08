let number =[56,78,90,23,90,76,43,56,56,56]
let alreadyTracked=[]

for(let i=0;i<number.length;i++){

        for(let j=i+1;j<number.length;j++){

            if(number[i]===number[j]){


                    if(alreadyTracked.indexOf(number[i])===-1){

                        alreadyTracked.push(number[i])
                        console.log(number[i]);
                        
                    }
            }

        }
}
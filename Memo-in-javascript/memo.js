
const memoizedArray = [];

function squareOfNum(num){

    if (memoizedArray[num]){
        return memoizedArray[num]
    }

     let result =0;

     for (let i =1; i<=num; i++){
        for(let j=1; j<=num;j++){

            result= result +1
        }
     }
     memoizedArray[num]= result

     return result
}

  console.log(squareOfNum(40000))
  console.log(squareOfNum(30000));
 console.log(squareOfNum(30000));
 console.log(squareOfNum(40000));

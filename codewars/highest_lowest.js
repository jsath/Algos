/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

 */

function highAndLow(numbers){
    //turn string to array 
    //iterate over and check if each position should reset min and max variables
    //return min and max 
    let max = -55555; 
    let min = 100;
    let arr = numbers.split(" ")
    
    for(let i = 0; i < arr.length; i ++){
        if(parseInt(arr[i]) > max){
            max = arr[i]
        }
        
        if(parseInt(arr[i]) < min){
            min = arr[i]
        }
    }
    return(`${max} ${min}`)
}

const c = (args) => {console.log(args)}

c(highAndLow("1 2 3 4 5"));
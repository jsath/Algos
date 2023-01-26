/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

    Example:   
        [19, 5, 42, 2, 77] --->  7. 
        [10, 343445353, 3453445, 3453545353453] ----> 3453455.
*/
const c = (args) => {console.log(args)}

//nested for loop --> add each iteration --> if iteration sum < current min sum reset 
//complexity -> o(n)^2
function sumTwoSmallestNumbers(arr){
    let sum = 500000000000000; 

    for(let i = 0; i < arr.length; i ++){
        for(let j = i+1; j < arr.length; j++){
            if((arr[i] + arr[j]) < sum){
                sum = arr[i] + arr[j];
            }
        }
    }
    return sum
}

//sort array
//return sum of first two indexes, which will be the smallest numbers in the array
//complexity -> o(n)
function sortSumTwoSmallestNumbers(arr){
    arr.sort((a, b) => a - b);
    return arr[0] + arr[1];
}

let arr1 = [19, 5, 42, 2, 77];
let arr2 = [10, 343445353, 3453445, 3453545353453];

c(sortSumTwoSmallestNumbers(arr2))
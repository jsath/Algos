


/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 2576
const expected4 = 2

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */

var sum = 0; 

function sumToOneDigit(num) {
    if(num === 0) { return 0; }
    return (num % 10) + sumToOneDigit(Math.floor(num / 10));
}

// function sumToOneDigit(num){

//     newString = num.toString();
//     var num2 = 0;
    
//     while(num2 < 10){
//         for(i = 0; i < newString.length; i ++){
//             num2 += parseInt(newString[i]) 
//         }
//     }

//     return num2
// }

console.log(sumToOneDigit(num3))

/*****************************************************************************/



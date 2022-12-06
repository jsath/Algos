/**
 * @param {number} x
 * @return {number}
 */

/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Examples: 
    Input: x = 123
    Output: 321

    Input: x = -123
    Output: -321

    Input: x = 120
    Output: 21
*/

const reverse = function(x){
    let str = x.toString().split('').reverse().join('');
    let reversedInt = parseInt(str);
    if (reversedInt >= -Math.pow(2, 31) && reversedInt <= Math.pow(2, 31) - 1) {
      return reversedInt * Math.sign(x);
    } else {
    return 0;
    }
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
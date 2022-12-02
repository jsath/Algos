/* 
Interview Question:
Given a string
return whether or not it's possible to make a palindrome out of the string's characters
What is it about a string that makes it possible for it to be a palindrome?
Determine whether or not it is possible for the string's characters to be
rearranged into a palindrome.
  */

// racecar
// radar
// tacocat
// level
// kayak

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//                V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/* 
For a string to be able to be re-ordered into a palindrome
It must have an even occurrence of every character
Unless it is odd length, then it can have 1 character that
can have an odd number of occurrences.
Another way to look at it would be, if you cancel out ever char that has a pair,
it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

/*
determine if the length of the string is even or odd
create hashmap

iterate over each character in the given string


    if the character isn't in our hashmap add it to it
    if the character is in our hashmap increment the value


    if string is even add all counts in hashmap and check if it's even


        hashmap.forEach((value, key) => {
            if (!value % 2 == 0) {
                return false;
        }
        });
        return true;


    if string is odd
        iterate over hashmap

        hashmap.forEach((value, key) => {
            if (value % 2 == 0) {
                hashmap.delete(key);
        }
        });

 */

function canBecomePalindrome(str) { 
    hashmap = {};
    if(str.length % 2 == 0){

        //iterate over string
        for(let i = 0; i < str.length; i ++){
            if(hashmap.hasOwnProperty(str[i])){
                hashmap[str[i]] ++;
            }else{
                hashmap[str[i]] = 1;
            }
        }
        //store all values in string that have odd number of occurrences
        let valuesArr = Object.values(hashmap)
        let updatedValues = valuesArr.filter((value)=>{return value % 2 !== 0})
        //make sure there are no values that aren't even
        if(!updatedValues.length === 0){
            return true;
        }else{return false;}
    }else{
        //iterate over string
        for(let i = 0; i < str.length; i ++){
            if(hashmap.hasOwnProperty(str[i])){
                hashmap[str[i]] ++;
            }else{
                hashmap[str[i]] = 1;
            }
        }
        //store all values in string that have odd number of occurrences
        let valuesArr = Object.values(hashmap)
        let updatedValues = valuesArr.filter((value)=>{return value % 2 !== 0})
        //make sure there is only one odd number 
        if(updatedValues.length === 1){
            return true;
        }else{return false;}
    }
}

// canBecomePalindrome(str1);
// canBecomePalindrome(str2);
// canBecomePalindrome(str3);
// canBecomePalindrome(str4);
// canBecomePalindrome(str5);
// canBecomePalindrome(str6);

// console.log(canBecomePalindrome(str1) === expected1); // false
console.log(canBecomePalindrome(str2) === expected2); // true
// console.log(canBecomePalindrome(str3) === expected3); // true
// console.log(canBecomePalindrome(str4) === expected4); // true
// console.log(canBecomePalindrome(str5) === expected5); // true


console.log(canBecomePalindrome('dadd'))
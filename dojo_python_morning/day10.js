/* 
Given a string that may have extra spaces at the start and the end,
return a new string that has the extra spaces at the start and the end trimmed (removed)
do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */

function trim(str){
    var newstring = ""; 
    for(i = 0; i < str.length; i ++){
        if(str[i] !== " " || str[i-1] !== " "){
            newstring + str[i]
        }
    }
    if(newstring[0] == " "){
        newstring[0] = "";
    }
    return newstring
}


var hello = trim(str1);
console.log(hello)

const strA1 = "yes";
const strB1 = "eys";
const expected5 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */

function isAnagram(s1, s2) {
    var counter = 0; 
    var str1 = s1.toLowerCase()
    var str2 = s2.toLowerCase()
    if(str1.length != str2.length){
        return false
    }
    for(i = 0; i < str2.length; i++){
        if(str1.includes(str2[i])){
            counter += 1;
        }
    }
    if(counter == str1.length){
        return true 
    }
    else{
        return false;
    }
}

var test = isAnagram("noon", "onon");
console.log(test)
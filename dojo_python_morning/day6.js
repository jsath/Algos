/* 
Given a string,
return a new string with the duplicates excluded
Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

function stringDedupe(str){
    var newString = "";
    for(let i = 0; i < str.length; i ++){
        if(str[i] === str[i+1]){
            continue;
        }
        else{
            newString += str[i];
        }
    }
    return newString
}

var x = stringDedupe(str4)
console.log(x)

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */


/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str7 = "hello";
const expected7 = "olleh";

const str5 = "hello world";
const expected5 = "olleh dlrow";

const str6 = "abc def ghi";
const expected6 = "cba fed ihg";


/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    var splitStr = str.split(" "); 
    newString = "";
    for (let j =0; j < splitStr.length; j++){
        splitStr[j].split()
    }
    return splitStr
    
}

var test = reverseWords(str5)
console.log(test)

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str8 = "This is a test";
const expected8 = "test a is This";

const str9 = "hello";
const expected9 = "hello";

const str10 = "   This  is a   test  ";
const expected10 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */


function reverseWordOrder(wordsStr) {
    wordsStr.split()
    for(i = 0; i < wordsStr.length/2 ;i ++){
        var temp = wordsStr[i];
        wordsStr[i] = wordsStr[wordsStr.length-i];
        wordsStr[wordsStr.length-i] = temp
    }
    return wordsStr
}

var hello = reverseWordOrder(str10);
console.log(hello)

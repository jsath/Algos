// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/
//                 👇
const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.
//              v
const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

//                👀
const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */
//              v
const str4 = "dvadf";
const expected4 = 4;


// Explanation: "vadf"

/*
create an empty hashmap to track
iterate over string
declare counter 
for each character
    add to hashmap if the key isn't there and counter++
    if the key is there reset count and clear dictionary
if the 
 */

function lengthOfLongestSubString(str){
    let testMap = {};

    for(let i = 0; i < str.length; i++){
        if(!testMap[str[i]]){
            testMap[str[i]] = 0
        }
    }
    return testMap.keys.size;
}





// function lengthOfLongestSubString(string) {
//         var max = 0, current_string = "", i, char, pos;
//         for (i = 0; i < string.length; i += 1) {
//             char = string.charAt(i);
//             pos = current_string.indexOf(char);
//             if (pos !== -1) {
//                 current_string = current_string.substr(pos + 1);
//             }
//             current_string += char;
//             max = Math.max(max, current_string.length);
//         }
//         return max;
// }
    
    console.log(lengthOfLongestSubString(str1)); // 3




/* 
    Given a string s, find the length of the longest substring without repeating characters.

    Example 1:
        Input: s = "abcabcbb"
        Output: 3
        Explanation: The answer is "abc", with the length of 3.

    Example 2:
        Input: s = "bbbbb"
        Output: 1
        Explanation: The answer is "b", with the length of 1.

    Example 3:
        Input: s = "pwwkew"
        Output: 3
        Explanation: The answer is "wke", with the length of 3.
        Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
        

    Constraints:
        0 <= s.length <= 5 * 104
        s consists of English letters, digits, symbols and spaces.
  */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    //create a Maxcount variable to return 
    //create a map to check if character has been there already 
    //if character is there, delete map and check if count is > maxCount
    //iterate over string 


    let max_count = 0; 
    let count = 0; 
    let map = new Map();

    for(let char of s){
        if(map.has(char)){
            if(count > max_count){
                max_count = count; 
            }
            count = 0; 
            map.clear()
        }else{
            map.set(char, 1)
            count ++ 
        }
    }

    //the longest substring can be at the end of the string, so we have to check to make sure if we should return count or max_count
    if(count > max_count){
        return count
    }else{
        return max_count 
    }
};

const c = (args) => {console.log(args)}

c(lengthOfLongestSubstring("pwwkew"))
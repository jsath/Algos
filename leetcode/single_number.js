
const c = (args) => {console.log(args)}
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

    Example: 
        Input: nums = [2,2,1]
        Output: 1

        Input: nums = [4,1,2,1,2]
        Output: 4

        Input: nums = [1]
        Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashmap = {};
    for(let i = 0; i < nums.length; i ++){
        if(hashmap.hasOwnProperty(nums[i])){
            delete hashmap[nums[i]]
        }else{
            hashmap[nums[i]] = 0;
        }
    }
    for(let i in hashmap){
        return i
    }
};

/*Time complexity = o(n) */

c(singleNumber([2,2,1]))




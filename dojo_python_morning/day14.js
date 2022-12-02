
function recursiveSigma(num){

    if(num < 1){
        return 0
    }
    
    return num + recursiveSigma(num-1)
    
}

console.log(recursiveSigma(5))

/* 
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
var index = -1;
function sumArr(nums) {
    
    if(index > nums.length){
        return 0
    }


}

console.log(sumArr(nums1))
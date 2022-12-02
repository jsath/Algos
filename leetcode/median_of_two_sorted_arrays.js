/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const nums1 = [1,3]
const nums2 = [2]

const nums3 = [1,2]
const nums4 = [3,4]


const nums5 = [3]
const nums6 = [-2,-1]
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b)
    if(merged.length % 2 === 0){

        return ((merged[merged.length/2])+ (merged[(merged.length/2)-1])) / 2;
    }else{
        return merged[(merged.length-1)/2];
    }

};




console.log(findMedianSortedArrays(nums5,nums6))
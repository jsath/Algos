/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    var socialDistance = true;
    for(var i = 0; i < queue.length; i ++){
        if(queue[i] == 1){
            if(counter < 6){
                return false;
            }
            else if(counter > 6){
                socialDistance = true;
            }
            else{
                var counter = 0; 
            }
        }
        if(queue[i] == 0){
            counter += 1;
        }
    }
    return socialDistance
}


// function socialDistancingEnforcer(queue) {
//     var socialDistance = true;
//     for(var i = 0; i < queue.length; i ++){
//         if(queue[i] == 1){
//         for(var j = 1; j <= 6; j ++){
//             if(queue[i+j] == 1){
//                 return false;
//             }
//         }
//         i += 6; 
//         }
//     }
//     return socialDistance
// }

// hello = socialDistancingEnforcer(queue3);
// console.log(hello)
/*****************************************************************************/

/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.

*/

const nums1 = [-2, 5, 7, 0, 3];
const expected6 = 2;

const nums2 = [9, 9];
const expected5 = -1;


/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    var balance = -1
    for(var i = 1; i < nums.length; i ++){
        var sum1 = 0; 
        var sum2 = 0; 
        for(var j = 0; j < i; j ++){
            sum1 += nums[j]
        }
        for(var x = i; x < nums.length; x )
            sum2 += nums[x]
        if(sum1 == sum2){
            balance = i 
            return balance
        }
    }
    return(balance)
}

test = balanceIndex(nums1);
console.log(test)
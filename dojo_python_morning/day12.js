const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
// function interleaveArrays(arr1, arr2) {
//     var newArray = []
//     var total = (arr1.length) + (arr2.length)
//     for(var i = 0;i < total; i ++){
//         if(i % 2 == 0){
//             newArray.push(arr1[i])
//         }
//     }
// }


const arrA6 = [1252,32,235,3253];
const arrB6 = [235,2355,5,322,2];

function interleaveArrays(arr1, arr2){
    var newArray = []
    var total = 0;
    if(arr1.length > arr2.length){
        total = arr1.length
    }
    else if(arr1.length < arr2.length){
        total = arr2.length
    }
    for(var i = 0; i < total; i ++){
        if(arr1[i] !== undefined){
            newArray.push(arr1[i])
        }
        if(arr2[i] !== undefined){
            newArray.push(arr2[i])
        }
    }
    return newArray

}

test = interleaveArrays(arrA6, arrB6)
console.log(test)
// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

// function mergeDedupe(arr1, arr2) {
//     newArr = arr1.concat(arr2)
//     newArr = (new Set(newArr))
//     return Array.from(newArr)
// }

function mergeDedupe(arr1, arr2){
    n = arr1.length + arr2.length
    newArr = []
    for(i = 0; i < n; i ++){
        if(arr1[i] || arr2[i] == 'undefined'){
            
        }
        if(arr1[i] && !newArr.includes(arr1[i])){
            newArr.push(arr1[i])
        }
        if(arr2[i] && !newArr.includes(arr2[i])){
            newArr.push(arr2[i])
        }
    }
    return(newArr)

    //iterate over the array
    //

}





// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) )
// [ 1, 3, 4, 5, 8, 10 ]




console.log(mergeDedupe([1,3,4,6],[2,3,3,5,8,10,12]) )
// [1, 2, 3, 4, 5, 6, 8, 10, 12]

//   a -> 
//     [1, 3, 3, 5, 8, 10]
//   b
//     [1, 3, 4, 5]
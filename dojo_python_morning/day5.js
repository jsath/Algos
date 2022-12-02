/* 
Zip Arrays into Map


Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected3 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

function zip(array1, array2){
    var expected = {};  //making the return dictionary
    for(i = 0; i < array1.length; i++){ // 0 , 1 ,2 
        expected[array1[i]] = array2[i]; // new dictionary key[0] = array[0]
    }
    return expected;
}

var x = zip(keys1, vals1);
console.log(x)



const keys2 = [];
const vals2 = [];
const expected2 = {};

/**
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string>} keys
   * @param {Array<any>} values
   * @returns {Object} The object with the given keys and values.
   */
  function zipArraysIntoMap(keys, values) {}
 
/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
    inverted = {}
    for(key in obj){
        inverted[obj[key]] = key;
    }
    return inverted;
}

var hello = invertObj(obj1);
console.log(hello)


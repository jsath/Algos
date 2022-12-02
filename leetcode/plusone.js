
const c = (arg) => {console.log(arg)}

digitsTest = [1,2,3]

digits7 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
var plusOne = function(digits) {
    c(digits)
    let newArr = parseInt(digits.join(""));
    c(newArr)
    newArr += 1;
    let myFunc = num => Number(num);
    var intArr = Array.from(String(newArr), myFunc);
    return intArr
};

c(plusOne(digits7));
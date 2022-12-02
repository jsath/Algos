var isPalindrome = function(x) {
    let num = x.toString(); 
    let backwards = '';
    for(let i = num.length-1; i >= 0; i --){
        backwards+=num[i]
    }
    return num === backwards; 
};

console.log(isPalindrome(121))
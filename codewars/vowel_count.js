/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let vowels = {
        a: 1, 
        e: 1, 
        i: 1, 
        o: 1, 
        u: 1
    }
    let count = 0; 
    for(let char of str){
        if(char in vowels){
            count++
        }
    }
    return count
}

const c = (args) => {console.log(args)}

c(getCount('abi'))




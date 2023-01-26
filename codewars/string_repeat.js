/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

    Examples: 

        6, "I"     -> "IIIIII"
        5, "Hello" -> "HelloHelloHelloHelloHello"
 */

function repeatStr (n, s) {
    let i = 0;
    let str = "" 
    while(i < n){
        str += s;
        i++
    }
    return str
}

const c = (args) => {console.log(args)}

c(repeatStr(5,'kj'))
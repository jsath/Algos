/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */


function parensValid(str) {
    var closed = 0; 
    var open = 0; 
    var last = false;
    for(var i = 0; i < str.length;i++){
        if(str[i] == "("){
            open ++;
            last = false;
        }
        else if(str[i] == ")"){
            closed ++
            last = true
        }
    }
    if(closed == open && last){
        return true
    }
    else{
        return false
    }
}



/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str7 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected7 = true;

const str5 = "D(i{a}l[ t]o)n{e";
const expected5 = false;

const str6 = "A(1)s[O (n]0{t) 0}k";
const expected6 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */


function bracesValid(str) {
    var closed = 0; 
    var open = 0; 
    var last1 = false;
    var last2 = false;
    var last3 = false;
    for(var i = 0; i < str.length;i++){
        if(str[i] == "(" || "{" || "["){
            open ++;
            last1 = false;
            last2 = false;
            last3 = false;
        }
        else if(str[i] == ")"){
            closed ++
            last1 = true
        }
        else if(str[i] == "}"){
            closed ++
            last2 = true
        }
        else if(str[i] == "]"){
            closed ++
            last3 = true
        }
    }
    if(closed == open && last1 && last2 && last3){
        return true
    }
    else{
        return false
    }
}

var hello = bracesValid(str7);
console.log(hello)

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

    Examples:
        solution('abc', 'bc') // returns true
        solution('abc', 'd') // returns false

*/

const c = (args) => {console.log(args)}

function solution(str, ending){
    // TODO: complete
    // check the ending length 
    // once we have the ending length str .length - ending length 
    //string.slice to remove same amount of characters from string as ending length 
    //str + ending 
    //return if new string = str 
    let newString = str.slice(str.length-ending.length);
    return(newString == ending)
}

c(solution('abc', 'd'))
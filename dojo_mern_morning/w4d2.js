/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                         v

// isNaN
// parseInt()
// !someObj.hasOwnProperty("key")

/*
create a empty dictionary {}
turn string to array [b,7,0,b,3,0,4,c,3,2]
loop over array and check for isNaN()
check if dictionary has own property
    if it has property 
make the isNaN() a key in the dictionary if not already present 
add array[0] as a key
as long as i+1 is a number add it to temp arr
tempArr = [7,0]
turn the array to a number
dictionary[key] += num
{
    'b': 
}

turn dictionary to organized string
*/


const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";


function rehash(str) {
    someObj = {};
    tempKey = '';
    tempValue = 0; 
    for(i = 0; i < str.length; i ++){
        //if this is a letter
        if(isNaN(str[i])){
            someObj[str[i]] = 0;
            tempKey = str[i]
        }
        // if it's a number
        if(!isNaN(str[i])){
            tempValue += str[i]
            if(isNaN(str[i+1])){
                someObj[tempKey] += tempValue
            }
        }
    }
    console.log(someObj)
}

//rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");
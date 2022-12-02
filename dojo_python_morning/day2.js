
const str1 = "aaaabbcdddaaa";
const expected1 = "a4b2c1d3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";



function encode(str){
    if(str.length <= 4){
        return str
    }
    newString = "";
    newString += str[0];
    count = 1; 
    i = 0;
        for(var i = 0; i < str.length-1; i ++){
            if(str[i+1] == str[i]){
                count += 1;
            }
            else{
                newString += count + str[i+1];
                count = 1; 
            }
        
        }
        return newString;
}

console.log(encode(str1));
console.log(encode(str2));
console.log(encode(str3));
console.log(encode(str4));






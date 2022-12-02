
function solution(num){
    let count = 0; 
    let multiplesArr = [];
    
    for(let i = 1; i < num; i ++){
    if(i%3===0 && i%5===0){
        multiplesArr.push(i);
    }else if(i%3===0){
        multiplesArr.push(i);
    }else if(i%5===0){
        multiplesArr.push(i);
    }
    }
    
    for(let j = 0; j < multiplesArr.length; j++){
        count+=multiplesArr[j]
    }
    return count;
}


console.log(solution(10));
const s = "is2 sentence4 This1 a3";


const sortSentence = function(s){
    const array = s.split(" ");
    let returnStr = "";
    for(let i = 0; i < array.length;i ++){
        for(let j = 1; j < array.length; j ++){
            if(array[i][array[i].length-1] < array[j][array[j].length-1]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    let temp = array[0]
    array.splice(0,1)
    array.push(temp)

    for(let i = 0; i < array.length; i ++){
        const remove = array[i].split('');
        remove.pop();
        array[i] = remove.join('');
    }
    return array.join(' ');
};

console.log(sortSentence(s));
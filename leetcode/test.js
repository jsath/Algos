// function main() {
//     let sum = 0;
//     let i = 10; 
//     while ( i < 1) {
//         sum = sum + i; 
//         sum = sum * 2; 
//         i -=1;
//     }
//     console.log(sum)
// }

// let x = ['1','2','15','-7','300']
// let y = x.sort();

// const f = n => n <= 1 ? 1 : n * f(n-1);

// let g = f(4);

// console.log(g)


// function build(sentenceList){
//     let root = {};

//     sentenceList.forEach(sentence => {
//         let base = root
//         sentence.split(' ').forEach(word => {
//             if(base[word]===undefined){
//                 base[word] = {}
//             }
//             base = base[word]
//         })
//     })
//     return root
// }

// let tree = build(['Hello world', 'Hello There']);
// console.log(tree)


function hasPosNeg(array){
    let hasPos = false;
    let hasNeg = false;

    array.forEach(num => {
        hasPos = num > 0;
        hasNeg = num < 0;
    })

    return[hasPos,hasNeg]
}

//console.log(hasPosNeg([0,-1,-2]));
// console.log(hasPosNeg([-1,0,1]));
// console.log(hasPosNeg([]));
console.log(hasPosNeg([0,1,2]));
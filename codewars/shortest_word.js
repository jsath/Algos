/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

function findShort(s) {
    return s.split(" ").reduce((min, word) => Math.min(min, word.length), 50000000000);
}

const c = (args) => {console.log(args)}

c(findShort("bitcoin take over the world maybe who knows perhaps"))
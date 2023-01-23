/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


    (boolToWord(true), 'Yes')
    (boolToWord(false), 'No')
    });
 */

function boolToWord( bool ){
    return bool ? 'Yes':'No';
}

const c = (args) => {console.log(args)}

c(boolToWord(true))
c(boolToWord(false))
/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
    return number%2 == 0 ? "Even" : "Odd";
}

const c = (args) => {console.log(args)}

c(evenOrOdd(2))
c(evenOrOdd(3))
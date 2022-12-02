let percent = 0.54;
let isValid = true;
let counter = 1;
if ((percent > 0.50) && (isValid == true)) {
counter += 2;
if (isValid == true) {
counter++;
} else if (percent >= 0.50) {
counter += 3;
}
}
else {
counter++;
}

console.log(counter);
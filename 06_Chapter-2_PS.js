/**************************************Chapter-2 Expressions & Conditions *******************************************/

//import prompt module to take the input
const prompt = require('prompt-sync')({ sigint: true });

// Practise Question 1
let age1 = Number.parseInt(prompt("Enter the age :"));
if (age1 > 10 && age1 < 20) {
    console.log("Your age lies between 10 and 20");
}

// Practise Question 2
let age2 = Number.parseInt(prompt("Enter the age :"));
switch (age2) {
    case 15:
        console.log("The age is 15");
        break;
    case 25:
        console.log("The age is 25");
    case 45:
        console.log("The age is 45");
        break;
    default:
        console.log("The number is special");
        break;
}

// Practise Question 3
let num = Number.parseInt(prompt("Enter the number :"));
if (num % 2 == 0 && num % 3 == 0) {
    console.log("The number is divisible by 2 and 3");
} else {
    console.log("The number is not divisible by 2 and 3");
}

// Practise Question 4
let num1 = Number.parseInt(prompt("Enter the number :"));
if (num1 % 2 == 0) {
    console.log("The number is divisible by 2");
}
else if (num1 % 3 == 0) {
    console.log("The number is divisible by 3");
} else {
    console.log("The number is not divisible by 2 and 3");
}

// Practise Question 5
let age3 = Number.parseInt(prompt("Enter the age :"));
console.log(age3 < 18 ? "You cannot drive" : "You can drive");
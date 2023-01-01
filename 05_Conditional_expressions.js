/**************************************Chapter-2 Expressions & Conditions *******************************************/
/*
 The types of Conditional expressions in javaScript are:-
 • if condition
 • if-else condition
 • if-else if-else condition

 */

//lets import the prompt to take the input
const prompt = require('prompt-sync')({ sigint: true });
let age = Number.parseInt(prompt("Enter the age : "));

if (age > 0 && age < 10) {
    console.log("He is a baby");
} else if (age > 10 && age < 20) {
    console.log("He is a teenagee");
} else if (age > 20 && age < 35) {
    console.log("He is youngman");
} else {
    console.log("He is adult");
}
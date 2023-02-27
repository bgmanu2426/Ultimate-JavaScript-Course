/**************************************Chapter-3 Loops & Functions *******************************************/

/*
There are 5 types of loops in JavaScript
 • For loop (Loops through a block of code a number of times)
 • For-in loop (Loops through the properties of an object)
 • For-of loop (Loops through the value of an iterable object)
 • forEach loop (Loops the value of anythong via taking a function as input)
 • while loop (Loops through a block of code while the given conditoion is true)
 • do-while loop (also loops through a block of code while the given condition is true, but it executes the code first then check the condition)

 */
const prompt = require('prompt-sync')({ sigint: true });

//For loop
// Program to add first n natural numbers
// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//     sum += (i + 1)
//     console.log((i+1), "+")
// }
// console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)

// For in loop
// let obj = {
//     harry: 90,
//     shubh: 45,
//     shivika: 56,
//     ritika: 57,
//     shiv: 23
// }
// for (let a in obj) {
//     console.log("Marks of " + a + " are " + obj[a])
// }

// For of loop
// for (let b of "Harry") {
//     console.log(b)
// }

// forEach loop
// str = ['harry', 'shubh', 'shivika', 'ritika', 'shiva']
// str.forEach(element => {
//     console.log(element);
// });

// while loop
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// let i = 0;
// while (i < n) {
//     console.log(i)
//     i++;
// }

// do while loop
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// let i = 10;
// do {
//     console.log(i)
//     i++;
// } while (i < n) 

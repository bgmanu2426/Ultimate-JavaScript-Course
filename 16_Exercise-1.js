//Guess the number Game

const prompt = require('prompt-sync')({ sigint: true });

let rand_num = Math.ceil(Math.random() * 100)
// console.log(rand_num);
let chances = 0;
let i = 0;

while (i < 100) {
    let user_num = prompt("Enter a number:- ");
    user_num = Number.parseInt(user_num);
    if (rand_num > user_num) {
        console.log("The number enterd is lesser than the actual number\n");
    } else if (rand_num < user_num) {
        console.log("The number enterd is greater than the actual number\n");
    } else if (rand_num == user_num) {
        console.log("Congratulations! The number is ",rand_num);
        break;
    } else {
        console.error("Enter a valid number\n");
    }
    chances++;
}

console.log(`You got the number in ${chances} chances. Your score is ${100 - chances}`);
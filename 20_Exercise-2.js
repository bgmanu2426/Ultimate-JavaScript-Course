// Rock, paper , scissor game using JavaScript

const prompt = require('prompt-sync')({ sigint: true });

let play = true;
let u_score = 0;
let c_score = 0;
let rounds = 0;

while (play) {
    let comp_input = Math.floor(Math.random() * 3);
    let user_input = prompt("\nEnter '0' for rock '1' for paper and '2' for scissor:- ");
    user_input = Number.parseInt(user_input);
    if (comp_input === user_input) {
        console.log(`Computer choose:- ${comp_input}`);
        console.log("Draw");
        rounds++;
    } else if (comp_input === 0 && user_input === 1) {
        console.log(`Computer choose:- ${comp_input}`);
        console.log("You Won!");
        rounds++;
        u_score++;
    } else if (comp_input === 0 && user_input === 2) {
        console.log(`Computer choose:- ${comp_input}`);
        console.log("You Loose!");
        rounds++;
        c_score++;
    } else if (comp_input === 1 && user_input === 0) {
        console.log(`Computer choose:- ${comp_input}`);
        console.log("You Loose!");
        rounds++;
        c_score++;
    } else if (comp_input === 1 && user_input === 2) {
        console.log(`Computer choose:- ${comp_input}`);
        console.log("You Won!");
        rounds++;
        u_score++;
    } else if (comp_input === 2 && user_input === 0) {
        console.log(`Computer choose:- ${comp_input}`);
        console.log("You Won!");
        rounds++;
        u_score++;
    } else if (comp_input === 2 && user_input === 1) {
        console.log(`Computer choose:- ${comp_input}`);
        console.log("You Loose!");
        rounds++;
        c_score++;
    } else {
        console.error("Enter a vaild Input");
    }

    play = prompt("Press 'S' to continue 'Q' to quit:- ").toUpperCase()
    if (play === 'S') {
        play = true;
    } else if (play === 'Q') {
        play = false;
        console.log(`User : ${u_score} | Computer : ${c_score} | Rounds Played : ${rounds} \n`);
    }
}
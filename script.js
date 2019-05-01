"use strict"

let grantHP = 10;
let userHP = 40;
let wins = 0;
let name;
let userChoice;

function startGame() {
    let play = prompt("Would you like to play?");
    if (play === "yes") {
        name = prompt("Enter your username?");
        startCombat()
    }
}


function startCombat() {
    while (startGame) {
        userChoice = prompt("Would you like to attack or quit?")
        if (userChoice === "attack") {
            getDamage();
            console.log(`${name} has ${userHP} health left`);
            console.log(`grant has ${grantHP} health left`);
            if (grantHP <= 0) {
                wins++;
                grantHP = 10;
                console.log(`grant has been defeated. ${name} has to beat grant ${3 - wins} more times.`);
            }
            if (userHP <= 0) {
                console.log("you lose");
                break;
            }
            if (wins === 3) {
                console.log("you win");
                break;
            }
        } else {
            return;
        }
    }
}

startGame();

function getDamage() {
    userHP -= Math.floor((Math.random() * 5) + 1);
    grantHP -= Math.floor((Math.random() * 5) + 1);
}
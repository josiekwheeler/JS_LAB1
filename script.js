"use strict"

let user = undefined;
let userLife = 40;
let grantLife = 10;
let userWins = 0;
let grantWins = 0;
let userLost = 0;
let grantLost = 0;
let game = prompt("Do you want to play a game with the Alimighty Grant?", "yes or no");


if (game === "yes") {
    user = prompt("Choose your user name", "Josie Wheeler");
    while (grantWins < 1 && userWins < 3) {
        if (userLife > 0 && grantLife > 0) {
            userLost = Math.floor(Math.random() * 2) + 1;
            grantLost = Math.floor(Math.random() * 2) + 1;
            userLife = userLife - userLost;
            grantLife = grantLife - grantLost;
            console.log(`${user} has ${userLife} remaining`);
            console.log(`Grant has ${grantLife} remaining`);
        } else if (grantLife <= 0) {
            userWins++;
            grantLife = 10;
            console.log(`${user} wins ${userWins} rounds`);
        } else if (userLife <= 0) {
            console.log(`Grant Wins!`);
            break;
        }
        if (userWins === 3) {
            console.log(`${user} wins!`);
            break;
        }
    }
}
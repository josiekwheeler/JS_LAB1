"use strict"

let user = undefined;
let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let grantWins = 0;
let userDamage = 0;
let grantDamage = 0;
let game = prompt("Do you want to play a game with the Alimighty Grant?", "yes or no");


if (game === "yes") {
    user = prompt("Choose your user name", "Josie Wheeler");
    while (grantWins < 1 && userWins < 3) {
        if (userHealth > 0 && grantHealth > 0) {
            userDamage = Math.floor(Math.random() * 2) + 1;
            grantDamage = Math.floor(Math.random() * 2) + 1;
            userHealth = userHealth - userDamage;
            grantHealth = grantHealth - grantDamage;
            console.log(`${user} has ${userHealth} remaining`);
            console.log(`Grant has ${grantHealth} remaining`);
        } else if (grantHealth <= 0) {
            userWins++;
            grantHealth = 10;
            console.log(`${user} wins ${userWins} rounds`);
        } else if (userHealth <= 0) {
            console.log(`Grant Wins!`);
            break;
        }
        if (userWins === 3) {
            console.log(`${user} wins!`);
            break;
        }
    }
}
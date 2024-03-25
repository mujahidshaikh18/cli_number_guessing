#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 9 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess the number 1-9:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed the right number");
}
else {
    console.log("Your guessed number is wrong");
}

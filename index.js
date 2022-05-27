
let userName = prompt("What is your name?");
let birthYear = Number(prompt("What is your birth year?"));
console.log(`Your name is ${userName} and you are ${2022 - birthYear}`);

let payPerhour = Number(prompt("How much are you paid per hour?"));
let hoursWorkedPerWeek = Number(prompt("How many hours have your worked for this week?"));
console.log(`You have earned $${payPerhour * hoursWorkedPerWeek} this week`);
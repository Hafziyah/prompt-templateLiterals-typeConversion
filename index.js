
var userName = prompt("What is your name?");
var birthYear = Number(prompt("What is your birth year?"));
console.log(`Your name is ${userName} and you are ${2022 - birthYear}`);

var payPerhour = Number(prompt("How much are you paid per hour?"));
var hoursWorkedPerWeek = Number(prompt("How many hours have your worked for this week?"));
console.log(`You have earned $${payPerhour * hoursWorkedPerWeek} this week`);
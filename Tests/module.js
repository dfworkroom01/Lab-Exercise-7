const PromptSync = require("prompt-sync");

const prompt = require("prompt-sync")();
//To create a prompt and provide the four basic math choices
var count = prompt("Choose an arithmetic method: \n1. Addition \n2. Subtraction\n3. Multiplication\n4. Division");
//To determine the first number which represents x in each math operation
var x = parseInt(prompt("Enter your first number", "0"));
//To determine the second number which represents y in each math operation
var y = parseInt(prompt("Enter your second number", "0"));
//To create the value of z which must be obtained from x and y numbers input by the user
var z = +x + +y;


// The 4 basic math cases using switch to enable the input math operation choice by the user from the prompt
switch (count) {
  case '1':
    console.log("Answer: " + z);
    break;
//case 1 is for addition
  case '2':
    console.log("Answer: " + (x - y));
    break;
//case 2 is for substraction
  case '3':
    console.log("Answer: " + x * y);
    break;
//case 3 is for multiplication
  case '4':
    console.log("Answer: " + x / y);
    break;
}
//case 4 is for division


//the test
console.log(count)

//Step to test:
//Run node module.js. Choose the math operation by typing in the number of the option. Click Enter. 
//Enter the first number (any number)
//Enter the second number (any number)

//NOTE:
//the prompt is combined with switch to call different match basic operations.
//Therefore, the test is to ensure that when a user choose an operation, 
//the prompt will refer to the correct option under the switch count cases (you can see your choice below the "Answer") 
//and deliver the correct answer.


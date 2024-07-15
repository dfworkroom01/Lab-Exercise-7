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
    alert("Answer: " + z);
    break;
//case 1 is for addition
  case '2':
    alert("Answer: " + (x - y));
    break;
//case 2 is for substraction
  case '3':
    alert("Answer: " + x * y);
    break;
//case 3 is for multiplication
  case '4':
    alert("Answer: " + x / y);
    break;
}
//case 4 is for division

const exportedObject =  {count, x, y, z};
module.exports = exportedObject;
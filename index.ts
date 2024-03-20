#! /usr/bin/env node

import inquirer from "inquirer"
 
const answer = await inquirer.prompt([{message: "Enter the first number", type: "number", name:"firstNumber"},
{message: "Enter the second number", type: "number", name: "secondNumber"},
{message:"Choose the operator to perform operation",
type:"list",
name:"operator",
choices: ["Addition","Subtraction", "Multiplication", "Division"],
},
]);
console.log(answer)

//conditional statements
if(answer.operator==="Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator==="Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator==="Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator==="Division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else {console.log("plz select a valid operator")};


#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000;
let myPin = 862001;

console.log(chalk.blue(" \n \t Welcome to our ATM Machine! Start your transaction here.\n \t"));


let pinAnswer = await inquirer .prompt(

  [
    {
       name : "pin",
       type : "number",
       message : chalk.green("enter your pin number:")

    }
  ]
);

if(pinAnswer.pin === myPin){

    console.log(chalk.red("\n \tCorrect pin code!!\n"));

let operationANS = await inquirer.prompt(

    [

      {

         name : "operation",
         type : "list",
         message : chalk.yellow("please select option\n"),
         choices : ["withdraw","check balance"],

      }
    ]
);

console.log(operationANS);

if(operationANS.operation === "withdraw"){

    let withdrawAns = await inquirer.prompt(
      [

        {
          name : "withdrawMethod",
          type : "list",
          message : chalk.yellow("Select a withdrawal method\n"),
          choices : ["Fast Cash","Enter Amount"]

        }

      ]
  );
if(withdrawAns.withdrawMethod === "Fast Cash"){
   let fastcashAns = await inquirer.prompt(
    [

      {
        name : "fastCash",
        type : "list",
        message : chalk.greenBright("\n \tSelect Amount:\n"),
        choices : [1000, 2000,10000,30000,50000,3000,4000,5000]
      }

    ]
   );

if(fastcashAns.fastCash > myBalance){
     console.log(chalk.red("\n \tOoh! Insufficient Balance\n"));
} 
else{

     myBalance -= fastcashAns.fastCash
     console.log(chalk.yellow(`\n \t${fastcashAns.fastCash} withdraw successfully\n`));
     console.log(chalk.green(`\n \tYour remaining Balance is: ${myBalance}\n`));
}  

}

  else if(withdrawAns.withdrawMethod === "Enter Amount"){
  
    
    let amountAns = await inquirer.prompt(

      [

          {
              name : "amount",
              type : "number",
              message : "enter your amount",

          }
      ]
  );
  if(amountAns.amount > myBalance){
    console.log(chalk.red("\n \tInsufficient Balance\n"));
  }
else{
      myBalance -= amountAns.amount;
      console.log(chalk.yellow(`\n \tyour remaining balance is: ${myBalance}\n `));
  }

  }

} 
else if (operationANS.operation === "check balance"){
   console.log(chalk.yellow(`\n \tyour current balance is: ${myBalance}\n `));

}

}
else{

    console.log(chalk.red ("\n \tOops! Incorrect pin number\n"));
}
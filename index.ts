#! /usr/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([{message: "Enter Guess number plz(1-6)",
 type: "number",
  name: "istnumber"}


]);

const computerno: number = Math.round(Math.random() * 6);

if(ans.operator === computerno){
    //console.log(call1(ans.istnumber,ans.secondnumber,add1));
     console.log("computerno");
     console.log(computerno);
     
      console.log("u won");
    //console.log(ans.istnumber + ans.secondnumber);
}

else {
    console.log("Sorry try again");
    console.log("computerno was");
     console.log(computerno);
}
//console.log(ans)

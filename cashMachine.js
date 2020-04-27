//There are a few features we will need for the project. 
//1.Ability to accept a user pin (pre-defined inside of parameters to start with
// 2.Check the user pin is correct before letting someone access their account- 3 attempts maximum. 
//3.Withdraw from their bank account A.Check withdrawals for the day, a limit of £250 is normally used. 
//So, if a user has already withdrawn £150, they can only do £100 more. (Don’t worry about the day / time yet) 
//4.Deposit into their account up to £250 a time... isn’t so straightforward when we get to prompts.  
//5.Change the user pin with validation
//6.Check balance and cry at the amount.
//7.Statement of actions of the transactions occurred 
//8.Exchange currency - you can pick your currency. 
//If a user wants to exchange £100 and the conversion is 1.5, then they’d get 150 of another currency, for example.


let wrongPin = 0;
let pin = 1989;
let balance = 2000;
let maxWithdraw = 250;
let originalBalance = 2000;
let deposit = 0;
let newDeposit = 0;
// let validation = false
 //trying to figure out a way to say if pin is correct them yu can run the other functions. but ive confused myself trying to convert it into prompts.

const pinEntry = (pinEntry) => {
    if (pinEntry === pin) {
        console.log("you have entered the correct pin, please proceed");
        // validation = true
    } else if (pinEntry < pin || pinEntry > pin) {
        console.log("Pin entry is incorrect, you can only enter your pin incorrectly 3 times before you are locked out");
        wrongPin++;
        console.log(`You have had ${wrongPin} attempts at pin entry. You are only allowed 3! Be carfeul!`);
    };
};


const withDraw = (pinEntry, withdraw) => {
    // while (wrongPin <= 3){
        if (pinEntry === pin && withdraw <= balance && withdraw <= maxWithdraw) {
            console.log(`You can withdraw £${withdraw}`);
            balance = balance - withdraw;
            console.log(`Your balance is now£${balance}`);
        } else if (pinEntry < pin || pinEntry > pin && withdraw <= balance) {
            console.log("Pin entry is incorrect, you can only enter your pin incorrectly 3 times before you are locked out");
            wrongPin++;
            console.log(`You have had ${wrongPin} attempts at pin entry. You are only allowed 3! Be carfeul!`);
        } else (pinEntry === pin && withdraw > balance); {
            console.log(`You dont have available funds, you can only withdraw a max of £${balance}`);
        };
    // }; wrong place to put it. but where can i put it
};

const checkBalance = (pinEntry) => {
    if (pinEntry === pin) {
        console.log(`You can withdraw £${withdraw}`);
        console.log(`Your balance is £${balance}`);
    } else if (pinEntry < pin || pinEntry > pin) {
        console.log("Pin entry is incorrect, you can only enter your pin incorrectly 3 times before you are locked out");
        wrongPin++;
        console.log(`You have had ${wrongPin} attempts at pin entry. You are only allowed 3! Be carfeul!`);
    };
};
 
const changePin =(pinEntry, newPin) => {
    if (pinEntry === pin) {
        console.log("Pin entry is correct, pin has been updated");
        newPin = pin // why is this not changing my pin to a new pin if i call this function?
        console.log(pin) //not updating the pin when i log it on the terminal...
    } else {
         console.log("pin entry was incorrect,please re-enter current pin you only have 3 attempts");
         wrongPin++
    }        
};


// const depositAmount = (deposit) => {
//     if ()
// }; //tbc



let question = prompt("What would you like to do? Please chose from A: Change Pin, B: Withdraw, C: Check balance");
 

if(  question == "A" || question == "a") { 
    alert ("You have chosen A Change pin, please enter your current pin and then your new chosen pin number")
} else if( question == "B" || question == "b" ) {
    alert ("You have chosen B withdraw, please enter your current pin and then the amount you wish to withdraw")
} else if( question == "C" || question == "c" ) {
    alert ("You have chosen C check balance, please enter your current pin")
}; // tbc
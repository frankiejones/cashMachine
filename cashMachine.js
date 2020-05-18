//1.Ability to accept a user pin (pre-defined inside of parameters to start with)
//2.Check the user pin is correct before letting someone access their account- 3 attempts maximum. 
//3.Withdraw from their bank account A.Check withdrawals for the day, a limit of £250 is normally used. 
//So, if a user has already withdrawn £150, they can only do £100 more. (Don’t worry about the day / time yet) 
//4.Deposit into their account up to £250 a time...isn’t so straightforward when we get to prompts.  
//5.Change the user pin with validation
//6.Check balance and cry at the amount.
//7.Statement of actions of the transactions occurred 
//8.Exchange currency - you can pick your currency. 
//If a user wants to exchange £100 and the conversion is 1.5, then they’d get 150 of another currency, for example.

let button = document.getElementById("button");
let wrongPin = 1;
let pin = 1989;
let balance = 2000;
let maxWithdraw = 250;
let originalBalance = 2000;
let deposit = 0;
let newDeposit = 0;
let transaction = [];

const pinEntry = () => {
    let pinEnter = prompt("Please enter your pin number to access your account");
    // while (wrongPin < 3) {
        // console.log("inside of a while");
        if (pinEnter == pin) {
            alert("You have entered the correct pin, please proceed to the option menu.");
            wrongPin = 1;
            optionMenu();
        } else if (pinEnter < pin || pinEnter > pin) {
            console.log("Pin entry is incorrect, you can only enter your pin incorrectly 3 times before you are locked out");
            wrongPin++;
            alert(`You have had ${wrongPin} attempts at pin entry. You are only allowed 3! Be careful!`);
            pinEntry();
        } else if (wrongPin === 3) {
            alert("You have entered the icorrect pin too many times, you ahve been locked out");
        };
    // };

};
// pin enter function, 3 attempts then locked out, takes you to option function if correct

const optionMenu = () => {
    let question = prompt("What would you like to do? Please chose from :/n1. Change Pin :/n2. Withdraw :/n3. Check balance :/n4. Deposit amount :/n5. Transaction history :/n6. Exchange currency :/n7 Exit");
    if(question == 1) {
        changePin();
    } else if (question == 2) {
        withDraw();
    } else if (question == 3) {
        checkBalance();
    } else if (question == 4) {
        depositAmount();
    } else if (question == 5) {
        transaction();
    } else if (question == 6) {
        currency();
    } else if (question == 7){
        end();
    } else {
        alert("You have entered an invalid request");
        optionMenu();
    };
};
//option menu for all 7 functions, user must enter 1-7 to go to next functions.
const changePin =() => {
    let pinEntry = prompt ("Please enter your current pin to make changes, you have 3 attempts before you are locked out.")
    while (true) {
        console.log("inside of a while loop.");
        if (pinEntry == pin) {
            newpin = prompt ("Pin entry is correct, please enter your new pin.");
            newPin = pin // why is this not changing my pin to a new pin if I call this function?
            console.log(pin) //not updating the pin when i log it on the terminal...
            alert = ("Your pin has been updated.");
            optionMenu();
        } else if (pinEntry < pin || pinEntry > pin)  {
            wrongPin++
            console.log(wrongPin);
            pinEntry = prompt (`${wrongPin} Pin entry was incorrect, you only have 3 attempts before you are locked out, please try again.`);
        } else if (wrongPin == 3) {
            alert("You have made 3 wrong attempts, you have been locked out");
            break;
        };  
    };
};
//change users current pin if they enter the current pin correctly again.
const withDraw = () => {
    let withdraw = prompt("Please enter the amount you would like to withdraw.")    
    if (withdraw <= balance && withdraw <= maxWithdraw) {
        balance = balance - withdraw;
        alert(`You can withdraw £${withdraw} your new balance is £${balance}.`);
        optionMenu();
    } else (withdraw > balance); {
        alert(`You don't have available funds, you can only withdraw a max of £${balance} please try again.`);
        withDraw();
    };  
};
// withdraw from current balance, can't withdraw more than maxWithdraw per day
const checkBalance = () => {
    alert(`Your current balance is £${balance}.`);
    optionMenu(); 
};
//check current balance 
const depositAmount = () => {
    let newDeposit = prompt("Please enter the amount you would like to deposit.");
    if (newDeposit > 250 ) {
        alert = ("You are only allowed to deposit £250 per day. Please enter a lower amount.");
        depositAmount();
    } else if (newDeposit < 250) {
        balance = balance + newDeposit; //updating deposit to include the newDeposit;
        console.log(balance); //check in the side if its updated
        alert(`You have deposited £${newDeposit} your new balance is £${balance}.`);
        optionMenu(); //go back to the option menu.
    } else {
        alert("You have entered an invalid entry, let's go back to the menu.");
        optionMenu();
    };
};
//deposit into current balance, £250 max per deposit.
const transaction = () => {
    alert("This fuction is not availblle just yet, let's go back to the menu.")
    optionMenu();
};
//view transaction history of this log in, need to finish
const currency = () => {
    alert("This function is not available just yet, let's go back to the menu.")
    optionMenu();
};
//change the currency, need to finish
const end = () => {
    alert("Thank you for using the cash machine, byeeeee!");
};
//end the login
alert("Welcome to the cash machine");
pinEntry();



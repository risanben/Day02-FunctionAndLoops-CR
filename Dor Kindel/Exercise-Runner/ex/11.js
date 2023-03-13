/*
// Exercise 11 - Bank System
// Initialize a variable named currBalance with the value: 1000
// Initialize a constant named PIN with the value: '0796'
// Prompt the user to enter a secret pin code.
// If the user entered the correct pin code, ask him how much he would like to withdraw. Print a nice message with the new balance.
// If the pin code was wrong, alert the user with a different message, and don’t allow him make a withdrawal.
// Add a feature: don’t let the user withdraw more than he has in his account.
*/

var currBalance = 1000;
var pin = '0796';

var pinCode = prompt('Enter A Secret Pin Code.');

if (pinCode === pin) {
    var withdraw = +prompt('how much he would like to withdraw?');
    if (withdraw > currBalance) {
        alert('You don\'t have enough balance!');
    } else {
        // currBalance = currBalance - withdraw
        currBalance -= withdraw
        alert('New balance:' + currBalance + '$');
    }
} else {
    alert('The secret code is incorrect, try again');
}



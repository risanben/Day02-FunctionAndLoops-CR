/*
// Exercise 7 - Two Numbers Equal the Third
//
// Read 3 numbers from the user and check if the 3rd is the sum of the first two.
//
// If it is, print all the numbers to the console like this: 6 + 4 = 10
//
// If not, print them like this: 3 + 5 != 10
*/

var num1 = +prompt('Number 1 ?');
var num2 = +prompt('Number 2 ?');
var num3 = +prompt('Number 3 ?');

if (num1 + num2 === num3) {
    console.log(num1 + '+' + num2 + '=' + num3);
} else {
    console.log(num1 + '+' + num2 + ' !=' + num3);
}

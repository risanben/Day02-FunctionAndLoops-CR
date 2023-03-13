/*
// Exercise 8 - The Smallest of Three Numbers
//
// Read three numbers from the user and print the smallest one.
*/

var num1 = 5
var num2 = 5
var num3 = 5

if (num1 < num2 && num1 < num3) {
    console.log('num1:', num1);
} else if (num2 < num1 && num2 < num3) {
    console.log('num2:', num2);
} else {
    console.log('num3:', num3);
}

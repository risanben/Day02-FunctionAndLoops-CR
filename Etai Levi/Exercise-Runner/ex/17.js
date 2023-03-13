// Exercise 17 - Get the Bigger Num
// Write a function named getBigger which receives two numbers
// and returns the bigger one.

var big = getBigger(50, 6);
console.log('The bigger num is: ' + big);

function getBigger(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return 'Equals';
    }
}
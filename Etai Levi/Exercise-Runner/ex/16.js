// Exercise 16 - Even and Odd
// Write a function named isEven(num) which receives a number,
// and returns trueif the number is even, and false if it is odd.

// var num = +prompt('Num?')
// res = isEven(num)
// console.log('res', res)

var res = isEven(50)
console.log('res', res)

function isEven(num) {

    // if (num % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    return num % 2 === 0
}
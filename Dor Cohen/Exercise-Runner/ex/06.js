// EX 6 
/* Read 3 variables from the user: a, b, c.
These will be the a, b & c coefficients of a quadratic equation. ( )
Print the values of the following calculations to the console:
• -b
• 2 * a
• b*b - 4*a*c (this is called the discriminant)
*/

var a = +prompt('first num')
var b = +prompt('second num')
var c = +prompt('third num')

console.log(-b);
console.log(2 * a);
console.log(b * b - (4 * a * c));
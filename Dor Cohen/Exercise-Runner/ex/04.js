// Ex 4 
// Read a number from the user for distance and a number for speed and print the time.

var distance = +prompt('Enter distance (km)');
var speed = +prompt('Enter speed (km/h)');
var time = distance / speed;

console.log('The time is ' + time + ' (h)');
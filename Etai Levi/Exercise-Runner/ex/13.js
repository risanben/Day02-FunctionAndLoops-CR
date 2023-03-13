// Exercise 13 - The Elevator
// Keep a currFloor variable,
// initialize it to 0
// Ask the user which floor would he like to go to.
// Validate the floor is between -2 and 4.
// Update the currentFloor variable accordingly.
// Let the user know his current floor.
// If the user goes to floor 0 alert 'Bye Bye'.
// If the user goes to the parking lot (negative floors) alert: 'Drive Safely'.

var currFloor = 0;
var userFloor = +prompt('Which floor would you like to go to?');

if (userFloor >= -2 && userFloor <= 4) {
    currFloor = userFloor;
    console.log('The current floor is: ' + currFloor);

    if (currFloor === 0) {
        console.log('Bye Bye');
    } else if (currFloor < 0) {
        console.log('Drive safely');
    }

} else {
    console.log('This floor isn\'t exist..')
}
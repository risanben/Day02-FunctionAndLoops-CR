// Write a function named isAbove18 which receives a name and an age.
// The function should check if the age is above eighteen and use alert to show a
// message :
// If the user is younger than eighteen, the message will be 'You are too young',
// otherwise, the message will be David, You're allowed
// (Use the user's name within the alerts).
// The function should also return a boolean value, print it to the console.


console.log(isAbove18('Puki', 20))

function isAbove18(name, age) {
    if (age >= 18) {
        alert(name + ' Youre allowed')
        return true
    } else {
        alert('You are too young')
        return false
    }

    // return age >= 18
}

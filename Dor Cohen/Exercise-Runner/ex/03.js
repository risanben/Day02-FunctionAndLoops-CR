// Ex 3 
// Read a temperature in Celsius from the user, and print it converted to Fahrenheit
// Example: (30°C x 1.8) + 32 = 86°F’

var tempC = +prompt('Enter temperature in celsius')
var tempF = (tempC * 1.8) + 32;

alert('the temperature in Fahrenheit is ' + tempF);
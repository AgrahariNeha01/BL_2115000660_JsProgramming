const prompt = require("prompt-sync")();

function celsiusToFahrenheit(celsius) {
    if (celsius < 0 || celsius > 100) return "Enter a valid Celsius value (0-100)";
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    if (fahrenheit < 32 || fahrenheit > 212) return "Enter a valid Fahrenheit value (32-212)";
    return (fahrenheit - 32) * 5 / 9;
}

let choice = parseInt(prompt("Enter 1 for C to F, 2 for F to C: "));
let value = parseFloat(prompt("Enter Temperature: "));

switch (choice) {
    case 1:
        console.log(`${value}°C = ${celsiusToFahrenheit(value)}°F`);
        break;
    case 2:
        console.log(`${value}°F = ${fahrenheitToCelsius(value)}°C`);
        break;
    default:
        console.log("Invalid Choice");
}

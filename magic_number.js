const prompt = require("prompt-sync")();

let low = 1, high = 100;
let found = false;

console.log("Think of a number between 1 to 100...");
while (!found) {
    let mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number ${mid}? (yes/lower/higher): `);
    
    if (response === "yes") {
        console.log("Great! Your magic number is:", mid);
        found = true;
    } else if (response === "lower") {
        high = mid - 1;
    } else if (response === "higher") {
        low = mid + 1;
    }
}

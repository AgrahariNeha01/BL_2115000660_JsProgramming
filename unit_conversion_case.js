let choice = parseInt(process.argv[2]);
let value = parseFloat(process.argv[3]);

switch (choice) {
    case 1: 
        console.log(value, "Feet =", (value * 12), "Inches");
        break;
    case 2: 
        console.log(value, "Feet =", (value * 0.3048), "Meters");
        break;
    case 3: 
        console.log(value, "Inches =", (value / 12), "Feet");
        break;
    case 4: 
        console.log(value, "Meters =", (value / 0.3048), "Feet");
        break;
    default:
        console.log("Please enter a valid choice (1-4)");
}

let num = parseInt(process.argv[2]);

switch (num) {
    case 1: console.log("Unit"); break;
    case 10: console.log("Ten"); break;
    case 100: console.log("Hundred"); break;
    case 1000: console.log("Thousand"); break;
    case 10000: console.log("Ten Thousand"); break;
    default: console.log("Please enter 1, 10, 100, 1000, etc.");
}

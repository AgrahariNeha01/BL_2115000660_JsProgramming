let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

let exp1 = a + b * c;
let exp2 = a % b + c;
let exp3 = c + a / b;
let exp4 = a * b + c;

console.log("a + b * c =", exp1);
console.log("a % b + c =", exp2);
console.log("c + a / b =", exp3);
console.log("a * b + c =", exp4);

let max = exp1, min = exp1;

if (exp2 > max) max = exp2;
if (exp3 > max) max = exp3;
if (exp4 > max) max = exp4;

if (exp2 < min) min = exp2;
if (exp3 < min) min = exp3;
if (exp4 < min) min = exp4;

console.log("Maximum Value:", max);
console.log("Minimum Value:", min);

let n = parseInt(process.argv[2]);
let isPrime = true;

if (n < 2) isPrime = false;
for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(n, isPrime ? "is a Prime Number" : "is NOT a Prime Number");

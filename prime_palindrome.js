function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPalindrome(n) {
    return parseInt(n.toString().split("").reverse().join(""));
}

let num = parseInt(process.argv[2]);

if (isPrime(num)) {
    console.log(`${num} is a Prime Number`);
    let palNum = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palNum}`);
    
    if (isPrime(palNum)) {
        console.log(`Palindrome ${palNum} is also Prime`);
    } else {
        console.log(`Palindrome ${palNum} is NOT Prime`);
    }
} else {
    console.log(`${num} is NOT a Prime Number`);
}

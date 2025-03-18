function isPalindrome(num) {
    let reversed = parseInt(num.toString().split("").reverse().join(""));
    return num === reversed;
}

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);

console.log(num1, isPalindrome(num1) ? "is a Palindrome" : "is NOT a Palindrome");
console.log(num2, isPalindrome(num2) ? "is a Palindrome" : "is NOT a Palindrome");

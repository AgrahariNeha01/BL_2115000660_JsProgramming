let nums = [];
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 900) + 100; // 100-999
    nums.push(num);
}
console.log("Numbers:", nums);
console.log("Min:", Math.min(...nums));
console.log("Max:", Math.max(...nums));

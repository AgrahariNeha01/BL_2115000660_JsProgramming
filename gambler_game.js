let money = 100;
let bets = 0, wins = 0;

while (money > 0 && money < 200) {
    bets++;
    let betResult = Math.random() < 0.5 ? "Lose" : "Win";
    
    if (betResult === "Win") {
        money++;
        wins++;
    } else {
        money--;
    }

    console.log(`Bet ${bets}: ${betResult} (Money: Rs ${money})`);
}

console.log("\nGame Over!");
console.log("Total Bets Placed:", bets);
console.log("Total Wins:", wins);
console.log("Final Money:", money);

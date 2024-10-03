const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const T = Number(inputs[0]);

for(let t=0; t<T; t++) {
    const n = Number(inputs[t+1]);
    fibonacciCount(n);
}

function fibonacciCount(n) {
    const dp = Array.from({length: n+1}).fill([0,0]);
    dp[0] = [1,0];
    dp[1] = [0,1];
    for(let i=2; i<=n ; i++) {
        dp[i] = [dp[i-1][0] + dp[i-2][0], dp[i-1][1] + dp[i-2][1]];
    }
    console.log(`${dp[n][0]} ${dp[n][1]}`);
}
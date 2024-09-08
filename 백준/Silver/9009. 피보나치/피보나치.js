// 하나의 양의 정수를 최소 개수의 서로 다른 피보나치 수들의 합으로 나타내기
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const T = Number(input[0]);

let pibo = [0, 1];
while(pibo[pibo.length-1] < 1e9){
    pibo.push(pibo[pibo.length-1] + pibo[pibo.length-2]);
}

for(let i=1; i<input.length; i++){
    let n = +input[i];
    let result = [];
    let idx = pibo.length-1; // 가장 큰 피보나치 수 index
    while(n > 0) {
        if(n >= pibo[idx]){
            result.push(pibo[idx]);
            n -= pibo[idx];
        }
        idx--;
    }
    let answer = result.sort((a,b) => a-b).join(' ');
    console.log(answer);
}
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 0 : n: 지방 수 (3~10000)
// 1 : 각 지방의 예산 요청 (1~10000)
// 2 : 총 예산 ( n ~ 1,000,000,000 )
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(inputs[0]);
const budgets = inputs[1].split(' ').map(Number);
const m = Number(inputs[2]);

let left = 0;
let right = Math.max(...budgets);
let result = 0;

while(left <= right) {
    mid = Math.floor((left + right) / 2);
    let sum = 0;
    for(let i=0; i<budgets.length; i++){
        sum += Math.min(budgets[i], mid);
    }
    // 조건을 만족한다면 상한액 증가
    if(sum <= m) {
        result = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
console.log(result);
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// n: 공 개수, k : 팀 개수
const [n, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

// 1~k까지 최소 공의 개수 합
let sum = 0;
for (let i = 1; i <= k; i++) {
    sum += i;
}

// (1) n이 최소 필요한 공의 개수보다 작으면 나눠 담을 수 없음
if (sum > n) {
    console.log(-1);
} else {
    // (2) 남는 공의 개수를 계산
    let remaining = n - sum;

    // (3) 남는 공을 k개의 바구니에 균등하게 분배
    // n - sum의 나머지가 없으면 차이가 k-1, 나머지가 있으면 차이가 k
    if (remaining % k === 0) {
        console.log(k - 1);
    } else {
        console.log(k);
    }
}
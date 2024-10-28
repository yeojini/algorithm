const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

// n: 나무의 수, m: 필요한 나무의 길이
const [n,m] = inputs[0].split(' ').map(v => +v);
const heights = inputs[1].split(' ').map(v => +v);

let start = 0;
let end = Math.max(...heights);
let maxHeight = 0;

while(start <= end) {
    mid = Math.floor((start + end)/2);
    const sum = heights.reduce((acc, h)=> h - mid > 0 ? acc + h - mid : acc, 0);
    if(sum >= m) {
        start = mid + 1;
        maxHeight = mid;
    } else {
        end = mid - 1;
    }
}

console.log(maxHeight);
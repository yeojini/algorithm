const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

const [k,n] = inputs[0].split(' ').map(Number);
const lengths = [];
for(let i=1; i<=k; i++) {
    lengths.push(+inputs[i]);
}

let start = 1;
let end = Math.max(...lengths);
let result = 0;

while(start <= end) {
    const mid = Math.floor((start + end)/2);
    const total = lengths.reduce((acc, value) => acc + parseInt(value / mid), 0);
    // 더 많이 만들었다면
    if(total >= n) {
        result = mid;
        start = mid + 1;
    // 더 적게 만들었다면
    } else {
        end = mid - 1;
    }
}
console.log(result);

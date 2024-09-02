const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let S = +fs.readFileSync(path).toString().trim();
let cnt = 0;
let num = 1;
while (num <= S) {
    S -= num;
    num++;
    cnt++;
}
console.log(cnt);
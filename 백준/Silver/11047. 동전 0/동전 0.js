const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

let value = K;
let cnt = 0;
for(let i=input.length-1; i>=1; i--) {
  const A = +input[i];
  cnt += Math.floor(value/A);
  value %= A;
}
console.log(cnt);

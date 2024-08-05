const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().split('\n');
const n = +input[0];
const nums = input[1].split('').map(Number);
let sum = 0;
for(let i=0; i < n; i++){
  sum += nums[i];
}
console.log(sum);
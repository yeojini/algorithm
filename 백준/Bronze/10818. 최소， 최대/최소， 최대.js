const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = +input[0];
const nums = input[1].split(' ').map(Number);
console.log(`${Math.min(...nums)} ${Math.max(...nums)}`);
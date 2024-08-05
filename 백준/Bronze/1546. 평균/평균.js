const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);
const max = Math.max(...arr);
const newArr = arr.map((el) => el / max * 100);
const sum = newArr.reduce((acc, curr) => acc + curr, 0);
console.log(sum / N);

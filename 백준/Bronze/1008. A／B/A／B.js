const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().split(' ').map(Number);
console.log(input[0] / input[1]);
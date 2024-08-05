const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split(' ');
const result = input.reduce((acc, cur) => acc+=Math.pow(cur,2), 0)
console.log(result%10);
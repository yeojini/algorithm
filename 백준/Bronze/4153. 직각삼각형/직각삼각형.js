const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const T = input.length - 1;
for(let i=0; i<T; i++) {
  const [A,B,C] = input[i].split(' ').map((el) => parseInt(el)).sort((a,b) => a-b);
  console.log(Math.pow(A,2) + Math.pow(B,2) === Math.pow(C,2) ? 'right' : 'wrong');
}
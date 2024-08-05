const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const T = input.length;
for(let i=0; i< T; i++){
  const [A,B] = input[i].split(' ').map(Number);
  console.log(A+B);
}
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
for(let i=0; i<input.length-1;i++){
  const origin = input[i];
  const reverse = input[i].split('').reverse().join('');
  console.log(origin === reverse ? 'yes' : 'no');
}
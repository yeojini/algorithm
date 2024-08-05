const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString();
const num = +input;

for(let i=1; i<10; i++){
  console.log(`${num} * ${i} = ${num * i}`);
}
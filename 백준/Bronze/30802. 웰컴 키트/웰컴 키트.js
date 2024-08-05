const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = +input[0];
const shirts = input[1].split(' ').map(Number);
const [T, P] = input[2].split(' ').map(Number);

let result = 0;
for(let i=0; i<shirts.length; i++) {
  result += Math.ceil(shirts[i] / T);
}

console.log(result);

const numPenPerPack = Math.floor(N / P);
console.log(`${numPenPerPack} ${ N - numPenPerPack * P }`);


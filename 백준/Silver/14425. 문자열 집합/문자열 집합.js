const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = input.slice(1,N+1);
const strings = input.slice(N+1);

const set = new Set(S);

let answer = 0;
for(let string of strings){
  if(set.has(string)) {
    answer += 1;
  }
}
console.log(answer);
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n').map((element) => element.split(''));
const row = 5;
const col = 15;

let answer = '';
for(let i=0; i < col; i++) {
    for(let j=0; j<row; j++) {
      if(input[j][i] !== undefined) {
        answer += input[j][i];
      }
    }
}
console.log(answer);
// 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let N = Number(input[0]);
// 각 사람이 돈을 인출하는데 걸리는 시간
const P = input[1].split(' ').map(Number).map((item, index) => ({index, item})).sort((a, b) => a.item - b.item);
let result = 0;
for(let i=0; i<N; i++) {
  const time = P[i].item;
  result += time * (N - i);
}

console.log(result);

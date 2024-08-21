// 문제 설명
// 해빈이가 각 옷의 종류별로 몇 가지 옵션이 있는지 계산하여 가능한 모든 의상 조합을 구하는 문제

// 문제 풀이
// 옷의 종류별로 각각의 아이템을 선택하거나 선택하지 않는 경우를 계산
// 각 옷의 종류별로 아이템을 선택하는 경우의 수 + 1(선택하지 않는 경우)를 모두 곱한 후 1(아무것도 입지 않는 경우)을 뺀다

// 시간 복잡도

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const T = +input[0];
for(let i=0; i<input.length-1;){
  const map = new Map();
  const n = +input[i+1];
  for(let j=i+2; j<i+2+n; j++) {
    const [name, category] = input[j].split(' ');
    map.set(category, (map.get(category) || 0) + 1);
  }
  let result = 1;
  for(let value of map.values()) {
    result *= value + 1;
  }
  console.log(--result);
  i+=n+1;
}
// 문제 설명
// 0이 입력되면 가장 최근에 입력된 수를 지우고, 그렇지 않으면 입력된 수를 큐에 넣는다.
// 큐에 남아있는 숫자들의 합 출력

// 문제 풀이
// 가장 최근에 입력된 수를 지우기 때문에 큐 활용

// 시간 복잡도
// O(N) (N: 입력된 수의 개수)


const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const queue = [];
for(let i=1; i<input.length; i++){
  const num = +input[i];
  if(num === 0 && queue.length !== 0){
    queue.pop();
  } else {
    queue.push(num);
  }
}

console.log(queue.reduce((acc, cur) => acc + cur, 0));

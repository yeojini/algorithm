// 문제 설명
// 1~N까지의 사람이 순서대로 원을 이루고 있을때, K 번째 사람을 제거.
// 모두 제거되면 종료
// 제거된 사람들의 순서를 배열로 반환

// 문제 풀이
// 원형 큐

// 시간 복잡도
// 각 사람을 제거하기 위해 최대 N번의 순회를 반복하고, 제거 과정이 N번 반복되므로 전체 시간 복잡도는 O(N^2)

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N,K] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
const queue = Array.from({length: N}, (v, i) => i + 1);

const result = [];
let count = 0;
let index = 0;
while(result.length < N) {
  if(queue[index] !== -1) { // 제거된 사람이 아니라면
    count++;
    if(count === K) { // K번째 사람이라면
      result.push(queue[index]);
      queue[index] = -1; // 제거
      count = 0; // 카운트 초기화
    }
  }
  index = (index + 1) % N;
}

console.log(`<${result.join(', ')}>`);


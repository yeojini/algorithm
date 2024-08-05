const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim();
const n = +input;
const queue = Array.from({length: n}, (v, i) => i + 1);

let front = 0;
let back = queue.length - 1;
while(front !== back){
  // 원형 큐에서 front를 빼고 back을 front로 옮김
  front = (front + 1) % n; // 첫번째 원소 제거
  back = (back + 1) % n; // 두번째 원소 뒤로 보내기
  queue[back] = queue[front];
  front = (front + 1) % n; // 두 번째 원소를 제거한 후의 새로운 첫 번째 원소
}

console.log(queue[front]);
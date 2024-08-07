const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B, C, M] = require('fs').readFileSync(path).toString().trim().split(' ').map(Number);

if (A > M) {
  console.log(0);
  process.exit();
}

let answer = 0;
let fatigue = 0;

for (let i = 0; i < 24; i++) {
  if (fatigue + A <= M) {
    // 일을 할 수 있는 경우
    fatigue += A;
    answer += B;
  } else {
    // 쉬어야 하는 경우
    fatigue -= C;
    if (fatigue < 0) {
      fatigue = 0;
    }
  }
}

console.log(answer);

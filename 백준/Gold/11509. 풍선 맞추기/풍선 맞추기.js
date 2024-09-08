const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const n = Number(input[0]);
const heights = input[1].split(' ').map(Number);

// 각 높이에서 날아가고 있는 화살의 수를 기록할 배열
let arrows = new Array(1000001).fill(0);

let cnt = 0;

for (let i = 0; i < n; i++) {
    const height = heights[i];

    // (1) 현재 높이에 화살이 있다면, 그 화살로 풍선을 맞추고 화살을 한 칸 내림
    if (arrows[height] > 0) {
        arrows[height]--;     // 현재 높이에서 화살 하나를 사용
        arrows[height - 1]++; // 다음 낮은 높이로 화살을 이동
    } else {
        // (2) 현재 높이에 화살이 없으면 새로운 화살 추가
        cnt++;
        arrows[height - 1]++; // 새로운 화살이 한 칸 낮은 높이로 이동
    }
}

console.log(cnt);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
// 회의의 수
const n = +input[0];
let arr = [];
for(let i=1; i<input.length; i++){
    const [start, end] = input[i].split(' ').map(Number);
    arr.push([start, end]);
}

// 종료 시점, 시작 시점 순으로 정렬
arr.sort(([startA, endA], [startB, endB]) => {
    if(endA === endB){
        return startA - startB;
    } else {
        return endA - endB;
    }
})

let cnt = 0, cur = 0;
for(let i=0; i<n; i++){
    const [start, end] = arr[i];
    if(cur <= start){
        cur = end;
        cnt++;
    }
}
console.log(cnt++);
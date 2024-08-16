// 문제 설명
// 주어진 문자열에서 여러 명령어를 처리하여 최종 문자열을 출력

// 문제 풀이
// 커서 위치를 기억
// 문자열 slice 방식으로 조작 시 최악의 경우 O(M*N)의 시간이 소요
// 스택 두 개를 사용하여 커서 왼쪽과 오른쪽의 문자열을 관리

// 중요 개념
// 스택

// 시간 복잡도
// 각 명령어를 O(1)에 처리하여 전체 시간 복잡도를 O(M)으로 줄일 수 있음

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
// let str = input[0];
// const M = +input[1];
// let cursor = str.length;
// for(let i=2; i<input.length; i++) {
//     const s = input[i].split(' ');
//     const command = s[0];
//     // 문자를 커서 왼쪽에 추가함
//     if(command === 'P') {
//         const char = s[1];
//         str = str.slice(0, cursor) + char + str.slice(cursor);
//         cursor++;
//     }
//     // 커서를 왼쪽으로 한칸 이동
//     if(command === 'L') {
//         if(cursor > 0) cursor--;
//     }
//     // 커서 왼쪽 문자 삭제
//     if(command === 'B') {
//         if(cursor > 0) {
//             str = str.slice(0, cursor-1) + str.slice(cursor);
//             cursor--;
//         }
//     }
//     // 커서를 오른쪽으로 한칸 이동
//     if(command === 'D') {
//         if(cursor < str.length) {
//             cursor++;
//         }
//     }
// }
// console.log(str);

let leftStack = input[0].split('');  // 커서 왼쪽 스택
let rightStack = [];  // 커서 오른쪽 스택
const M = +input[1];

for (let i = 2; i <= M + 1; i++) {
    const command = input[i];
    if (command[0] === 'P') {
        leftStack.push(command[2]);  // 커서 왼쪽에 문자 삽입
    } else if (command[0] === 'L' && leftStack.length > 0) {
        rightStack.push(leftStack.pop());  // 왼쪽 스택에서 오른쪽 스택으로 이동
    } else if (command[0] === 'D' && rightStack.length > 0) {
        leftStack.push(rightStack.pop());  // 오른쪽 스택에서 왼쪽 스택으로 이동
    } else if (command[0] === 'B' && leftStack.length > 0) {
        leftStack.pop();  // 커서 왼쪽 문자 삭제
    }
}

console.log(leftStack.join('') + rightStack.reverse().join(''));  // 왼쪽 스택과 오른쪽 스택을 합쳐 출력
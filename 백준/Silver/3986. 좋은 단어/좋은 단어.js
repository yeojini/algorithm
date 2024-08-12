// 문제 요약
// A와 B로 이루어진 단어에서 '좋은 단어'의 개수를 셈
// '좋은 단어': 같은 글자끼리 쌍을 짓고, 쌍들 사이에 교차가 없어야 함
// 모든 글자가 짝을 이룰 수 있는 단어만 '좋은 단어'로 간주
// 주어진 단어들 중 '좋은 단어'의 개수를 셈

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const T = input[0];
let result = 0;

for(let i = 1; i <= T; i++) {
    const str = input[i].split('');
    const stack = [];
    for(let j=0; j < str.length; j++) {
        const char = str[j];
        if(stack.length === 0) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if(top !== char) {
                stack.push(top);
                stack.push(char);
            }
        }
    }
    if(stack.length === 0) {
        result++;
    }
}

console.log(result);
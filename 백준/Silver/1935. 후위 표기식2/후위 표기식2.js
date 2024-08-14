// 문제 설명
// 주어진 후위 표기식과 각 피연산자에 대응하는 값을 이용해 후위 표기식을 계산하는 문제
// 피연산자는 A~Z의 영대문자로 주어지며, 후위 표기식을 스택을 이용해 계산
// 결과는 소수점 둘째 자리까지 출력

// 문제 풀이
// 후위 표기식 -> 연산자는 항상 두 개의 이전 값을 사용해 계산
// ex. ABC*+DE/- ->  123*+45/- -> 1(2*3)+45/- -> 16+45/- -> (1+6)45/- -> 745/- -> 7(4/5)- -> 7 - 0.8 -> 6.2
// 스택을 이용해 숫자를 저장, 연산자 만나면 스택에서 두 개의 숫자를 꺼내 연산하고 다시 스택에 넣음

// 중요 개념
// 스택

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [N, exp, ...nums] = input;

const values = {};

for (let i = 0; i < N; i++) {
  values[String.fromCharCode(65 + i)] = +nums[i];
}

const stack = [];

for(let i=0; i<exp.length; i++) {
    const char = exp[i];
    // 알파벳인 경우 stack 에 저장
    if(char.match(/[A-Z]/)) {
        stack.push(values[char]);
    // 연산자인 경우
    } else {
        // stack 에서 숫자 두개 꺼내기
        // 먼저 꺼낸걸 오른쪽 숫자로, 나중에 꺼낸걸 왼쪽 숫자로 사용
        const right = stack.pop();
        const left = stack.pop();
        if(char === '+') {
            stack.push(left + right);
        } else if(char === '-') {
            stack.push(left - right);
        } else if (char === '*') {
            stack.push(left * right);
        } else if (char === '/') {
            stack.push(left / right);
        }
    }
}

console.log(stack[0].toFixed(2));
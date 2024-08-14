// 문제 설명
// 중위 표기식이 주어졌을 때 후위 표기식으로 변환

// 문제 풀이
// 중위표기식 -> 후위 표기식
// 연산자 우선순위/괄호처리
// A+B*C-D/E -> (A+(B*C)-(D/E)) -> ((A+BC*-DE/) -> (ABC+*)-(DE/) -> ABC+*DE/-


// 중요 개념
// 스택

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('');

// 연산자
const stack = [];

// 후위 연산식
let result='';

const priority = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
};

for(let i=0; i<input.length; i++) {
    const char = input[i];
    if(char.match(/[A-Z]/g)) {
        result += char;
    } else if(char === '(') {
        stack.push(char);
    } else if(char === ')') {
        // 닫는 괄호를 만나면 여는 괄호를 만날 때까지 스택에서 꺼내 후위 표기식에 추가
        while(stack.length && stack[stack.length-1] !== '(') {
            result += stack.pop();
        }
        // 여는 괄호 제거
        stack.pop();
    // 연산자라면
    } else {
        // 스택의 맨 위 연산자보다 우선순위가 낮거나 같으면 스택에서 꺼내 후위 표기식에 추가
        while(stack.length && priority[stack[stack.length-1]] >= priority[char]) {
            result += stack.pop();
        }
        // 현재 연산자를 스택에 추가
        stack.push(char);
    }
}

// 스택에 남아있는 연산자를 모두 후위연산식에 추가
while(stack.length) {
    result += stack.pop();
}

console.log(result);
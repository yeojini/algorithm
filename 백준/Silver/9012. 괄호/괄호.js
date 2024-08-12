// 문제 설명
// 주어진 괄호 문자열이 올바른 괄호 문자열(VPS)인지 판단하는 문제
// 괄호 문자열은 '('와 ')'로만 이루어져 있으며, VPS는 괄호의 짝이 올바르게 맞아야 함
// 문자열이 VPS이면 "YES", 아니면 "NO"를 출력

// 문제 풀이
// 1. 입력 받은 문자열을 split('') 으로 나눠 배열로 만든다
// 2. 스택을 이용해 '(' 일 때는 push, ')' 일 때는 pop을 한다
// 2-1.  여는 괄호 '('를 만나면 스택에 쌓고, 닫는 괄호 ')'를 만나면 스택에서 가장 최근에 쌓인 여는 괄호를 꺼내 짝을 맞춘다
// 3. 스택이 비어있으면 "YES", 아니면 "NO"를 출력한다

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const T = parseInt(input.shift());
for(let i=0; i<input.length; i++) {
    const stack = [];
    const str = input[i].split('');
    for(let char of str) {
        // 왼쪽 괄호일 때 stack 에 push
        if(char === '(') {
            stack.push(char);
        // 오른쪽 괄호일 때 stack 에 pop
        } else if (char === ')') {
            // 닫는 괄호 ')'가 들어왔을 때 스택이 비어있다면 짝이 맞지 않으므로 "NO" 출력
            if(stack.length === 0) {
                stack.push(char);
                break;
            }
            stack.pop();
        }
    }
    // 모든 문자열을 처리한 후에도 스택이 비어있지 않다면, 여는 괄호가 닫히지 않은 상태로 남아있느 것이므로 "NO" 출력
    console.log(stack.length === 0 ? "YES" : "NO");
}
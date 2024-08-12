// 문제 설명
// 주어진 괄호 문자열은 쇠막대기와 레이저의 배치를 나타낸다.
// 여는 괄호 '('는 쇠막대기의 시작을, 닫는 괄호 ')'는 쇠막대기의 끝을 의미한다.
// 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 '()'로 표현된다.
// 레이저는 쇠막대기를 자를 때 사용되며, 레이저가 쇠막대기를 절단하면 해당 쇠막대기는 여러 개의 조각으로 나뉜다.
// 괄호 문자열이 주어졌을 때, 레이저로 잘려진 쇠막대기 조각의 총 개수를 계산한다


// 문제 풀이
// 1. 괄호 문자열을 하나씩 읽어가면서 여는 괄호 '('를 만날 때마다 스택에 추가.새로운 쇠막대기가 시작되는 지점을 의미함
// 2. 닫는 괄호 )를 만날 때, 앞에 있는 괄호가 여는 괄호 '('라면 이는 레이저를 의미함. 쇠막대기가 잘려 스택의 크기만큼 잘려진 조각이 생김
// 3. 만약 앞에 있는 괄호가 여는 괄호 '('가 아니라면 쇠막대기의 끝이므로 스택에서 하나를 제거하고 잘려진 조각의 수를 1 추가함

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('');
const stack = [];
let result = 0;

for(let i = 0; i < input.length; i++) {
    const char = input[i];
    if(char === '(') {
        stack.push(char);
    }
    else {
        const prev = input[i-1];
        // 레이저인 경우
        if(prev === '(') {
            stack.pop();
            result += stack.length;
        // 레이저가 아닌 경우 = 쇠막대기의 끝
        } else {
            stack.pop();
            result += 1;
        }
    }
}

console.log(result);
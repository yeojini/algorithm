// 문제
// 1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다.
// 스택에 push하는 순서는 오름차순
// 임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지, 있다면 어떤 순서로 push와 pop 연산을 수행해야 하는지

// 출력
// 입력된 수열을 만들기 위해 필요한 연산을 한 줄에 한 개씩 출력한다. push연산은 +로, pop 연산은 -로 표현하도록 한다. 불가능한 경우 NO를 출력한다.

// 중요 개념
// 스택 구현

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [n, ...nums] = input;
const stack = [];
const result = [];
// 1~n 까지 수
let num = 1;
// nums 의 index
let i = 0;
let flag = true;

// 수열의 숫자가 stack top 보다 크다면 push 한 후 pop, 작다면 pop
while (i < nums.length) {
    // 스택이 비어있거나 스택의 최상단 요소가 목표 수열의 현재 요소와 일치하지 않으면
    if (stack.length === 0 || stack[stack.length -1] !== +nums[i]) {
        if(num > +n) {
            flag = false;
            break;
        }
        stack.push(num++);
        result.push('+');
    } else {
        stack.pop();
        result.push('-');
        i++;
    }
}


console.log(flag ? result.join('\n') : 'NO');
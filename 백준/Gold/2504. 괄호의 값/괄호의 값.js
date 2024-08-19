// 문제 설명
// ‘()’ -> 2, ‘[]’ -> 3
// ‘(X)’ -> 2*X, ‘[X]’ -> 3*X
// 올바른 괄호열 X와 Y가 결합된 XY의 괄호값은 값(XY)= 값(X)+값(Y) 로 계산
// ex. ‘(()[[]])([])’ = (2+3*3)(3) = 2*11 + 2*3 = 22+6 = 28
// 괄호열의 값을 나타내는 정수 출력, 입력이 올바르지 못한 괄호열이면 0 출력

// 문제 풀이
// 괄호 -> 스택 활용
// 현재 괄호의 값을 계산하는 변수 tmp
// '(' 이 나오면 stack 에 push 하고 tmp 를 2배 증가, '[' 이 나오면 stack 에 push 하고 tmp 를 3배 증가
// ')' 이 나오면 top 이 '(' 인지 확인하고 맞으면 tmp 를 결과에 더함. stack 에서 pop 하고 tmp 를 2로 나눔
// ']' 이 나오면 top 이 ']' 인지 확인하고 맞으면 tmp 를 결과에 더함. stack 에서 pop 하고 tmp 를 3으로 나눔
// ([]) -> 2*3 = 6, ()[] -> 2+3 = 5

// 시간 복잡도 : 스택 연산(O(1))을 n번 수행하므로 O(n)

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim();

let result = 0;
let tmp = 1;
const stack = [];

for(let i=0; i<input.length; i++){
  const c = input[i];
  if(c === '('){
    stack.push(c);
    tmp *= 2;
  } else if (c === '['){
    stack.push(c);
    tmp *= 3;
  }
  else if(c === ')'){
    if(stack.length === 0 || stack[stack.length-1] !== '('){
      result = 0;
      break;
    }
    if(input[i-1] === '('){
      result += tmp;
    }
    stack.pop();
    tmp /= 2;
  } else if (c === ']'){
    if(stack.length === 0 || stack[stack.length-1] !== '['){
      result = 0;
      break;
    }
    if(input[i-1] === '['){
      result += tmp;
    }
    stack.pop();
    tmp /= 3;
  }
}

if(stack.length !== 0){
  result = 0;
}

console.log(result);
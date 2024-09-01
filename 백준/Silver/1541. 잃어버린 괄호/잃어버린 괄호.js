// 괄호 쳐서 값 최소로
// 뺄셈을 기준으로 괄호를 묶어야 최소값으로 만들 수 있음

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim();
let groups = input.split('-');
let answer = 0;
for(let i=0; i<groups.length; i++){
  const cur = groups[i].split('+').reduce((acc, cur) => acc + Number(cur), 0);
  if(i === 0){
    answer += cur; // 첫번째 그룹은 항상 덧셈
  } else {
    answer -= cur; // 두번째 그룹은 항상 뺄셈
  }
}
console.log(answer);


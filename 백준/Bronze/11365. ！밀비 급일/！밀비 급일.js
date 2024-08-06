/**
 * 문제 설명
 * 주어진 암호를 뒤집어서 해독하는 문제.
 * 암호는 한 줄에 하나씩 주어지며, 마지막 줄에 "END"가 나오면 입력이 끝난다.
 * "END"는 해독하지 않고 종료한다.
 * 각 암호를 뒤집어서 한 줄에 하나씩 출력한다.
 */

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

for(let i=0; i<input.length; i++) {
  if(i === input.length - 1) {
    break;
  } else {
    console.log(input[i].split('').reverse().join(''));
  }
}
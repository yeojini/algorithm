// 문제 설명
// 주어진 문자열의 각 문자를 알파벳 획수로 변환하고, 각 단계마다 숫자들을 두 개씩 더해가며 진행하여
// 마지막 남은 숫자가 홀수인지 짝수인지 판단하는 문제

// 문제 풀이
// 1. 알파벳 획수를 배열로 정의한다.
// 2. 주어진 문자열을 순회하면서 각 문자를 해당하는 획수로 변환하여 숫자 배열을 만든다.
// 3. 숫자 배열을 반복적으로 두 개씩 더하는 과정을 진행한다.
// 4. 마지막에 남은 숫자가 홀수면 "I'm a winner!"를 출력하고, 짝수면 "You're the winner?"를 출력한다.

// 중요 개념
// 문자열 처리, 배열 순회 및 변환, 반복적인 덧셈 과정
// 시간 복잡도: O(n), 문자열의 길이에 비례하여 순회 및 변환

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split("");

const map = {
  'A': 3, 'B': 2, 'C': 1, 'D': 2, 'E': 3, 'F': 3, 'G': 3, 'H': 3, 'I': 1, 'J': 1,
  'K': 3, 'L': 1, 'M': 3, 'N': 3, 'O': 1, 'P': 2, 'Q': 2, 'R': 2, 'S': 1, 'T': 2,
  'U': 1, 'V': 1, 'W': 2, 'X': 2, 'Y': 2, 'Z': 1
};

let cnts = input.map((el)=>map[el]);
while (cnts.length > 1) {
  const sums = [];
  for( let i=0; i<cnts.length; i = i+2){
    let sum = cnts[i];
    if(cnts[i+1] !== undefined) {
      sum += cnts[i+1];
    }
    sums.push(sum % 10);
  }
  cnts = sums;
}

const lastNum = cnts[0];
console.log(lastNum % 2 === 0 ? "You're the winner?" : "I'm a winner!");
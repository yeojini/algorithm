// 문제 설명
// nCm 의 끝자리 0의 개수를 구하는 문제

// 문제 풀이
// nCm 의 값에서 10의 배수가 몇 번 곱해지는지 찾는 것
// => 10은 2와 5의 곱이기 때문에 nCm 의 값에서 2와 5가 몇 번 곱해지는지 찾는 것
// nCm의 끝자리 0의 개수는 n!의 2와 5의 개수 중 작은 값
// (nCm) = n! / (m! * (n-m)!)
// n!의 2와 5의 개수를 구하고, m!, (n-m)!의 2와 5의 개수를 빼면 nCm의 2와 5의 개수를 구할 수 있음

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

// 주어진 수의 팩토리얼에서 특정 소수의 개수를 세는 함수
const countFactors = (n, factor) => {
  let count = 0;
  for (let i = factor; i <= n; i *= factor) {
    count += parseInt(n / i);
  }
  return count;
}

const countTwo = countFactors(n, 2) - countFactors(m, 2) - countFactors(n - m, 2);
const countFive = countFactors(n, 5) - countFactors(m, 5) - countFactors(n - m, 5);
console.log(Math.min(countTwo, countFive));
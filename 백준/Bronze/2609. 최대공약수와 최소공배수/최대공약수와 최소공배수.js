// 문제 설명
// 입력된 두 정수의 최대공약수(GCD)와 최소공배수(LCM)를 구하기
// 유클리드 호제법을 사용하여 GCD를 구하고, 이를 이용해 LCM을 구함

// 문제를 푼 과정
// 1. 입력을 읽어옴
// 2. 유클리드 호제법을 사용하여 GCD를 계산하는 함수 정의
// 3. GCD를 이용하여 LCM을 계산하는 함수 정의
// 4. GCD와 LCM을 출력

// 중요 개념
// 유클리드 호제법 (GCD 계산)
// GCD를 이용한 LCM 계산

// 시간 복잡도: 유클리드 호제법은 O(log(min(a, b))), LCM 계산은 O(1)
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a,b] = require('fs').readFileSync(path).toString().trim().split(' ').map(Number);

// 유클리드 호제법 : 두 수의 GCD는 큰 수를 작은 수로 나눈 나머지와 작은 수의 GCD와 같다.
// 이 과정을 반복해서 나머지가 0이 되면, 마지막에 남은 작은 수가 GCD 이다.
const gcd = (a,b) => {
  let big = Math.max(a,b);
  let small = Math.min(a,b);
  // small이 0이 될 때까지 반복하여 big % small 값을 small에 할당하고, big을 temp로 업데이트
  while(small !== 0) {
    let temp = small;
    small = big % small;
    big = temp;
  }
  return big;
}

// 두 숫자의 곱을 gcd 로 나눔
const lcm = (a,b) => {
  return (a * b) / gcd(a,b);
}

console.log(gcd(a,b));
console.log(lcm(a,b));
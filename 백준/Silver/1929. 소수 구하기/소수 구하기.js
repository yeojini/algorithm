// M이상 N이하의 소수를 모두 출력

// 소수 : 약수 1, 자기 자신

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [M, N] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

// (1) 시간 초과
// for(let i=M; i<=N; i++) {
//   let isPrime = true;
//   for(let j=2; j<i; j++) {
//     if(i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if(isPrime) {
//     console.log(i);
//   }
// }

function isPrime(num) {
  // 1 이하의 숫자는 소수가 아님
  if (num <= 1) return false;
  // 2와 3은 소수임
  if (num <= 3) return true;

  // 2 또는 3으로 나누어 떨어지는 숫자는 소수가 아님
  if (num % 2 === 0 || num % 3 === 0) return false;

  // 5부터 제곱근까지의 숫자들로 나누어 소수를 판별
  // 6의 배수(6k ± 1) 패턴을 사용하여 효율성 증가
  for (let i = 5; i * i <= num; i += 6) {
      // i 또는 i+2로 나누어 떨어지면 소수가 아님
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  // 위의 조건에 해당하지 않으면 소수임
  return true;
}

// (2) 제곱근
for(let i=M; i<=N; i++) {
  if(isPrime(i)) {
    console.log(i);
  }
}
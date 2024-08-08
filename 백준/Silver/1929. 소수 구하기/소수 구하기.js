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

// (2) 제곱근
function isPrimeWithSquareRoot(num) {
  // 1. 1 이하의 숫자는 소수가 아님
  if (num <= 1) return false;
  // 2. 2와 3은 소수임
  if (num <= 3) return true;

  // 3. 2 또는 3으로 나누어 떨어지는 숫자는 소수가 아님
  if (num % 2 === 0 || num % 3 === 0) return false;

  // 4. 5부터 제곱근까지의 숫자들로 나누어 소수를 판별
  // 6의 배수(6k ± 1) 패턴을 사용하여 효율성 증가
  for (let i = 5; i * i <= num; i += 6) {
      // 4.1. i 또는 i+2로 나누어 떨어지면 소수가 아님
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  // 5. 위의 조건에 해당하지 않으면 소수임
  return true;
}

// for(let i=M; i<=N; i++) {
//   if(isPrimeWithSquareRoot(i)) {
//     console.log(i);
//   }
// }

function isPrimeWithEratosthenes(min, max) {
  // 1. n + 1개의 위치를 가진 boolean 배열을 만듦 (숫자 m부터 n까지를 나타내기 위함).
  let sieve = Array.from({length: max + 1}, ()=> true);
  sieve[0] = sieve[1] = false; // 0과 1은 소수가 아님

  // 3. 2부터 시작
  for (let i = 2; i * i <= max; i++) {
      // 4. i가 소수인 경우
      if (sieve[i]) {
          // i의 배수를 모두 false로 표시 (i*i부터 시작)
          for (let j = i * i; j <= max; j += i) {
              sieve[j] = false;
          }
      }
  }

  // 5. 배열에서 true로 남아 있는 숫자들을 소수 목록으로 반환
  return sieve.reduce((primes, value, num) => {
      if (value && num >= min) primes.push(num); // value가 true인 경우, num은 소수
      return primes;
  }, []);
}

console.log(isPrimeWithEratosthenes(M, N).join('\n'));
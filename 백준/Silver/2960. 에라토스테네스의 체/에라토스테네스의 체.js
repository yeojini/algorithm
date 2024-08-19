// 문제 설명
// 에라토스테네스의 체
// 1. 2부터 N까지 모든 정수를 적는다.
// 2. 아직 지우지 않은 수 중 가장 작은 수를 찾는다. 이것을 P라고 하고, 이 수는 소수이다.
// 3. P를 지우고, 아직 지우지 않은 P의 배수를 크기 순서대로 지운다.
// 4. 아직 모든 수를 지우지 않았다면, 다시 2번 단계로 간다.
// 5. N, K가 주어졌을 때, K번째 지우는 수 출력

// 문제 풀이
// 1. N+1 크기를 가진 sieve 배열을 true 로 초기화, 0과 1은 소수가 아니므로 false로 초기화
// 2. 2부터 시작해 소수를 찾고 (sieve[i] === true) 해당 소수의 배수를 크기 순서대로 지운다. (sieve[j] = false)
// 3. 지워지는 수를 카운트 하여 K 번째 지워지는 수 출력

// 시간 복잡도
// 2부터 N까지의 모든 수 순회 -> O(N)
// j는 i부터 N까지 i의 배수를 순회 -> i가 2일때는 N/2, i가 3일때는 N/3, ... i가 N일때는 1 -> O(N/2 + N/3 + ... + 1) = O(NlogN)
// 총 시간 복잡도 O(NlogN)

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const sieve = Array(N + 1).fill(true);
sieve[0] = sieve[1] = false;

let cnt = 0;
for(let i=2; i<=N; i++) {
    if(sieve[i]) {
      for(let j=i; j<=N; j+=i) {
        if(sieve[j]) {
          sieve[j] = false;
          cnt++;
          if(cnt === K) {
            console.log(j);
            break;
          }
        }
      }
    }
}

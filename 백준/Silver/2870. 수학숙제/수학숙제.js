// 문제 설명
// 숫자를 모두 찾은 뒤, 비내림차순으로 정리. 숫자 앞의 0은 생략
// 각 줄에서 연속된 숫자를 찾아야함

// 문제 풀이
// 각 문자열을 순회하면서 정규표현식을 사용하여 숫자열을 찾음
// 숫자로 변환하며 0 생략해줌
// sort 함수로 비내림차순으로 정리
// 각 줄에는 최대 100자의 문자열이 들어옴 -> Number.MAX_SAFE_INTEGER (2^53 - 1) 을 넘어갈 수 있음
// 따라서 BigInt로 변환하여 처리해야함

// 시간 복잡도
// 각 줄에 대해 숫자를 찾는데 O(M)이 걸림 (M: 문자열 길이)
// 배열에 추가하는데 O(K)가 걸림 (K: 숫자의 개수)
// 루프의 시간 복잡도는 O(L*M)이 걸림 (L: 줄의 개수)
// sort 함수의 시간 복잡도는 O(RlogR)가 걸림 (R: result 배열의 길이)
// join 함수의 시간 복잡도는 O(R)이 걸림
// 따라서 총 시간 복잡도는 O(L*M + RlogR)

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
let result = [];
for(let i=1; i<input.length; i++){
  const str = input[i];
  const num = str.match(/\d+/g);
  if(num !== null) {
    result = [...result, ...num.map((n) => BigInt(n))];
  }
}

// igInt를 비교할 때는 a > b와 같은 비교 연산을 사용하여 명시적으로 처리해야함
console.log(result.sort((a, b) => (a > b ? 1 : -1)).join('\n'));

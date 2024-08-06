// 문제 설명
// 두 문자열 s와 t가 주어졌을 때 s가 t의 부분 문자열인지 판단하는 문제.
// t에서 몇 개의 문자를 제거하고 이를 순서를 바꾸지 않고 합쳤을 경우 s가 되는지 확인

// 문제 풀이
// 1. 각 테스트 케이스를 읽어 s와 t로 분리
// 2. s를 정규표현식 패턴으로 변환
// 3. 변환한 패턴을 t에 적용하여 s가 t의 부분 문자열인지 확인
// 4. 매칭 결과에 따라 "Yes" 또는 "No"를 출력

// 중요 개념
// 정규표현식, 문자열 처리
// 시간 복잡도: O(n), 문자열의 길이에 비례하여 매칭

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split("\n");
for(let i=0; i<input.length; i++){
  const [s,t] = input[i].split(' ');
  // s 가 t 의 부분 문자열인지 확인
  // t에서 몇 개의 문자를 제거하고 이를 순서를 바꾸지 않고 합쳤을 경우 s가 되는 경우
  const chars = s.split('').join('.*');
  const regex = new RegExp(chars, 'g')
  console.log(t.match(regex) ? "Yes" : "No");
}
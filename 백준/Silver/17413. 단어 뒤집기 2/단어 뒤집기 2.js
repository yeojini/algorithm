// 문제 설명
// 문자열 S에서 태그 제외하고 단어만 뒤집기
// - '<'와 '>' 번갈아 등장, '<'이 먼저, 개수 같음
// - 태그: '<'로 시작, '>'로 끝, 길이 3 이상, 내부 알파벳 소문자와 공백만
// - 단어: 알파벳 소문자와 숫자, 공백으로 구분
// - 태그는 단어 아님, 태그와 단어 사이 공백 없음

// 문제를 푼 과정
// 1. 입력을 읽어옴
// 2. 태그와 단어를 구분하는 정규 표현식 작성
// 3. replace 메서드와 정규 표현식을 사용하여 태그를 제외한 단어만 뒤집기
// 4. 결과 출력

// 중요 개념
// 정규 표현식 - 캡처 그룹
// replace 메서드와 콜백 함수를 사용한 문자열 치환
// 시간 복잡도: O(n), 문자열 길이에 비례하여 순회

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim();

// (<[^>]+>) : <로 시작하고 >가 아닌 문자가 하나 이상 연속되며 > 로 끝나는 부분을 캡처그룹 1에 저장
// ([^<>]+) : < 또는 >가 아닌 문자가 하나 이상 연속되는 부분을 캡처그룹 2에 저장
const regExp = /(<[^>]+>)|([^<>]+)/g;

console.log(input.replace(regExp, (match, tag, words)=>{
  // 태그는 그대로 유지
  if(tag) return tag;
  // 단어는 공백 기준으로 나누어 각 단어를 뒤집음
  return words.split(' ').map((word)=> word.split('').reverse().join('')).join(' ');
}));
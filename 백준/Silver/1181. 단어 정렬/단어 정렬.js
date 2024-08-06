// 문제 설명
// 주어진 N개의 단어를 길이가 짧은 것부터, 길이가 같으면 사전 순으로 정렬합니다. 중복된 단어는 하나만 남긴다.

// 문제 풀이
// 1. 입력으로 주어진 단어들을 배열에 저장
// 2. 배열에서 중복된 단어를 제거
// 3. 단어들을 길이 기준으로 먼저 정렬하고, 길이가 같으면 사전 순으로 정렬
// 4. 정렬된 단어들을 출력

// 중요 개념
// 중복 제거(Set 사용), 배열 정렬(sort), 사전 순 정렬(localeCompare)
// 시간 복잡도: O(N log N), 정렬에 소요되는 시간

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = input[0];
let words = input.slice(1);
words = [...new Set(words)];
words.sort((a,b)=>{
  // a 가 b 보다 사전상 앞에 있으면 -1 리턴
  if(a.length !== b.length) {
    return a.length - b.length;
  }
  return a.localeCompare(b);
})
console.log(words.join('\n'));
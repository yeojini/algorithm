// 문제 설명
// 주어진 문자열이 다음 조건을 만족하는지 검사하는 문제
// - 모음(a, e, i, o, u) 하나를 반드시 포함해야 한다.
// - 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
// - 같은 글자가 연속적으로 두 번 오면 안 되나, ee와 oo는 허용된다.

// 문제를 푼 과정
// 1. 입력을 파일에서 읽어와 줄 단위로 분리
// 2. 각 단어에 대해 다음 조건을 확인하는 함수 정의
//    a. 모음 포함 여부 확인 - /[aeiou]/g
//    b. 연속된 모음 3개 혹은 자음 3개 여부 확인 - /[aeiou]{3}|[^aeiou]{3}/g
//    c. 연속된 동일 문자 여부 확인 (ee와 oo는 제외) - /(.)\1/g.test(word.replace(/ee|oo/g, ''))
// 3. 각 단어에 대해 조건을 만족하는지 확인하고 결과 출력

// 중요 개념
// 정규 표현식 - 캡처 그룹, OR

// 시간 복잡도: 각 단어에 대해 O(n), 전체 입력에 대해 O(m * n)
// 여기서 n은 문자열 길이, m은 입력된 단어의 수

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const checkIsAcceptable = (word) => {
  // 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
  if(!/[aeiou]/g.test(word)){
    return false;
  }
  // 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
  if(/[aeiou]{3}|[^aeiou]{3}/g.test(word)){
    return false;
  }

  // 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
  // ee, oo 를 빈 문자열로 대체하여 검사 대상에서 제외
  // 임의의 한 문자를 캡처 그룹 1 에 저장, 저장된 문자와 동일한 문자가 뒤따르는지 검사
  if(/(.)\1/g.test(word.replace(/ee|oo/g, ''))){
    return false;
  }

  return true;
}

for(let i=0; i<input.length-1; i++){
  const word = input[i];
  const isAcceptable = checkIsAcceptable(word);
  console.log(`<${word}> is ${isAcceptable ? 'acceptable' : 'not acceptable'}.`  );
}
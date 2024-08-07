// 문제 설명
// 입력된 문자열의 형식을 확인하여, C++ 형식의 문자열을 Java 형식으로 또는 Java 형식의 문자열을 C++ 형식으로 변환
// C++ 형식: 소문자만 있고 밑줄이 연달아 있지 않음
// Java 형식: 첫 글자는 소문자로 시작하며, 다음 단어부터는 첫 문자만 대문자이고 밑줄이 없음
// 변환할 수 없는 형식이면 "Error!"를 출력

// 문제를 푼 과정
// 1. 입력을 읽어옴
// 2. 주어진 형식(C++ 또는 Java)을 확인하는 함수 정의
// 3. Java 형식을 C++ 형식으로 변환하는 함수 정의
// 4. C++ 형식을 Java 형식으로 변환하는 함수 정의
// 5. 형식에 따라 변환 수행 후 결과 출력

// 중요 개념
// 정규 표현식(입력 형식 확인 및 변환)

// 시간 복잡도: 각 변환 함수는 O(n), 문자열 길이에 비례하여 순회
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const checkFormat = (s) => {
  // C++ 형식: 소문자만 있고 밑줄이 연달아 있지 않음
  const cppRegex = /^[a-z]+(_[a-z]+)*$/;
  if (cppRegex.test(s)) {
    return 'cpp';
  }

  // Java 형식: 첫 글자는 소문자로 쓰고, 다음 단어부터는 첫 문자만 대문자. 밑줄도 없음
  const javaRegex = /^[a-z]+([A-Z][a-z]*)*$/;
  if (javaRegex.test(s)) {
    return 'java';
  }
  return 'error';
}

const transformToCpp = (s) => {
  // 정규표현식으로 대문자 앞에 밑줄을 추가하고, 결과를 소문자로 변환
  return s.replace(/([A-Z])/g, '_$1').toLowerCase();
}

// 밑줄+소문자 -> 대문자
const transformToJava = (s) => {
  return s.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

const format = checkFormat(input);
if(format === 'java') {
  console.log(transformToCpp(input));
  process.exit();
} else if (format === 'cpp') {
  console.log(transformToJava(input));
  process.exit();
}
console.log("Error!");

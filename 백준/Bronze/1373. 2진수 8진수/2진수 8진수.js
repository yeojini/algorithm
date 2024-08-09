// 문제 설명
// 2진수 -> 8진수로 변환

// 문제 풀이
// 2진수 문자열을 3자리씩 나누어 각 부분을 8진수로 변환
// 2진수 "11001100"을 3자리씩 나누면 "11", "001", "100"
// 앞의 2자리 "11"은 3자리로 맞추기 위해 "011"로 변경
// 각 부분을 8진수로 변환하면 "011"은 3, "001"은 1, "100"은 4가 되어 최종 결과는 314

// 시간 복잡도: O(n), n은 2진수 문자열의 길이.

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(path).toString().trim();

let res = '';

if(input === '0') {
  console.log(0);
} else {
  // 2진수의 길이를 3의 배수로 맞추기 위해 앞에 필요한 만큼 '0'을 추가합니다.
  if (input.length % 3 !== 0) {
    input = '0'.repeat(3 - (input.length % 3)) + input;
  }

  let res = '';

  // 3자리씩 잘라서 8진수로 변환
  for (let i = 0; i < input.length; i += 3) {
    const threeBits = input.slice(i, i + 3);
    res += parseInt(threeBits, 2).toString(8);
  }

  console.log(res);
}


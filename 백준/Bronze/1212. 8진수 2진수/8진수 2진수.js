const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim();

const numbers = input.split(""); // 8진수 문자열을 개별 문자로 분리

let answer = "";
numbers.forEach((str, i) => {
    const dex = parseInt(str, 8); // 각 8진수 숫자를 10진수로 변환
    let binary = dex.toString(2); // 10진수를 2진수로 변환

    // 첫 번째 8진수 숫자가 아닌 경우, 2진수 문자열이 3비트로 맞추기 위해 앞에 '0'을 추가
    while (i !== 0 && binary.length < 3) {
        binary = "0" + binary;
    }
    answer += binary; // 변환된 2진수 문자열을 결과 문자열에 추가
});

console.log(answer);

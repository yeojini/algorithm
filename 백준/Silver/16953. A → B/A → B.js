const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [A, B] = fs.readFileSync(path).toString().trim().split(' ').map(Number); // 입력값을 읽어와서 A와 B로 분리
let count = 0; // 연산 횟수를 저장할 변수 초기화

// B가 A와 같지 않고, B가 A보다 큰 경우에만 반복문 실행
while (A !== B && A < B) {
    if (B % 2 === 0) { // B가 짝수일 경우
        B /= 2; // B를 2로 나눔
        count++; // 연산 횟수 증가
    } else if (B % 10 === 1) { // B의 마지막 자릿수가 1일 경우
        B = Math.floor(B / 10); // 마지막 자릿수를 제거 (B를 10으로 나눔)
        count++; // 연산 횟수 증가
    } else {
        break; // 위의 두 조건을 만족하지 않으면 더 이상 변환할 수 없으므로 반복문 종료
    }
}

// A와 B가 같으면 연산 횟수(count)에 1을 더해서 출력, 그렇지 않으면 -1 출력
console.log(A === B ? count + 1 : -1);

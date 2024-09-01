// 3kg 봉지, 5kg 봉지 => 최소 봉지 개수 구하기
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(path).toString().trim());
let count = 0;
while (input > 0) {
    if (input % 5 === 0) {
        input -= 5;
        count++;
    } else if (input % 3 === 0) {
        input -= 3;
        count++;
    } else if (input > 5) {
        input -= 5;
        count++;
    } else {
        count = -1;
        break;
    }
}
console.log(count);
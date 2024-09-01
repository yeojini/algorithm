// 2원, 5원 -> 동전 개수 최소 되도록 거슬러주기
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(path).toString().trim());
let count = 0;
while (input > 0) {
    if (input % 5 === 0) {
        input -= 5;
        count++;
    } else if (input % 2 === 0) {
        input -= 2;
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
// 펠린드롬인지 확인

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const s = fs.readFileSync(path).toString().trim();


const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(s) ? 1 : 0);
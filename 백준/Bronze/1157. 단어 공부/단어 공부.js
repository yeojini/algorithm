const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim();
const arr = input.split('');
const map = {};
for(let i=0; i < arr.length; i++) {
  const char = arr[i].toUpperCase();
  if(map[char]) {
    map[char] += 1;
  } else {
    map[char] = 1;
  }
}

let maxCount = 0;
let maxChar = '';
let isMultiple = false;
for (const char in map) {
  if (map[char] > maxCount) {
    maxCount = map[char];
    maxChar = char;
    isMultiple = false;
  } else if (map[char] === maxCount) {
    isMultiple = true;
  }
}

console.log(isMultiple ? '?' : maxChar);


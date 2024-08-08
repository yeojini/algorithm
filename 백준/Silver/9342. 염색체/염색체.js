const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const T = input[0];
const testCases = input.slice(1);

for(let i=0; i<testCases.length; i++) {
  console.log(checkPattern(testCases[i]) ? "Infected!" : "Good");
}

// 문자열은 {A, B, C, D, E, F} 중 0개 또는 1개로 시작해야 한다.
// 그 다음에는 A가 하나 또는 그 이상 있어야 한다.
// 그 다음에는 F가 하나 또는 그 이상 있어야 한다.
// 그 다음에는 C가 하나 또는 그 이상 있어야 한다.
// 그 다음에는 {A, B, C, D, E, F} 중 0개 또는 1개가 있으며, 더 이상의 문자는 없어야 한다.
function checkPattern(str){
  let regex = /^[ABCDEF]?A+F+C+[ABCDEF]?$/g;
  if(!str.match(regex)){
    return false;
  }

 return true;
}
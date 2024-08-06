const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const T = input[0];
const testCases = input.slice(1);

for(let i=0; i<testCases.length; i++) {
  const nums = testCases[i].split(' ');
  console.log(`Case ${i+1}: ${+nums[0] + +nums[1]}`)
}
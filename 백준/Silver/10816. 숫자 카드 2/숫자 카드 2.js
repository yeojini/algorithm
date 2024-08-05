const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = +input[0];
const nums1 = input[1].split(' ').map(Number);
const M = +input[2];
const nums2 = input[3].split(' ').map(Number);

const map = {};
for(let num of nums1){
    if(map[num] === undefined){
        map[num] = 1;
    } else {
        map[num]++;
    }
}
let result = '';
for(let i=0; i<M; i++){
  const num = nums2[i];
  result += map[num] === undefined ? 0 : map[num];
  if(i < M-1) result += ' ';
}
console.log(result);
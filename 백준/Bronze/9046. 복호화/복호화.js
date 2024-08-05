const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const T = input[0];
for(let i=1; i <= T; i++) {
  const map = {};
  const s = input[i].replace(/\s/g, '');
  for(let i=0; i < s.length; i++) {
    if(map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  const max = Math.max(...Object.values(map));
  const result = Object.entries(map).filter(([key, value]) => value === max);
  if(result.length === 1) {
    result.forEach(([key, value]) => {
      console.log(key);
    });
  } else if(result.length > 1) {
    console.log('?');
  }
}
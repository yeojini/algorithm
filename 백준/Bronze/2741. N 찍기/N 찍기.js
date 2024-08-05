const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim();
for (let i=1; i <= +input; i++) {
    console.log(i);
}
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = input[0];
const pattern = input[1].split('*');
const regExp = new RegExp(`^${pattern[0]}.*${pattern[1]}$`);
const fileNames = input.slice(2);
for (const fileName of fileNames) {
  if(regExp.test(fileName)){
    console.log("DA");
  } else {
    console.log("NE")
  }
}
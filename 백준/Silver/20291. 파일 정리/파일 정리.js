// 파일의 이름은 알파벳 소문자와 점(.)

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const N = +input[0];
const files = input.slice(1);

const extensions = {};
for(let i=0; i<files.length; i++) {
  const [name, extension] = files[i].split('.');
  if(extensions[extension]) {
    extensions[extension]++;
  } else {
    extensions[extension] = 1;
  }
}
const sortedExtension = Object.keys(extensions).sort((a, b) => a.localeCompare(b));
sortedExtension.forEach(extension => {
  console.log(`${extension} ${extensions[extension]}`);
})
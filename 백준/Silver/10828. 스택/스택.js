const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = +input[0];
const stack = [];
let result = '';
for(let i=1; i <= N ; i++){
  const [command, num] = input[i].split(' ');
  let out = '';
  switch(command) {
    case 'push':
      stack.push(+num);
      break;
    case 'pop':
      out = stack.length === 0 ? -1 : stack.pop();
      break;
    case 'size':
      out = stack.length;
      break;
    case 'empty':
      out = stack.length === 0 ? 1 : 0;
      break;
    case 'top':
      out = stack.length === 0 ? -1 : stack[stack.length - 1];
      break;
    default:
      break;
  }
  if(out !== '') {
    result += out;
    if(i !== N) {
      result += '\n';
    }
  }
}

console.log(result);
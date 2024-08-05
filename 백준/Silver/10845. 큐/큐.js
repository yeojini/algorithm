const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = +input[0];
const queue = [];
let result = '';
for(let i=1; i <= N ; i++){
  const [command, num] = input[i].split(' ');
  let out = '';
  switch(command) {
    case 'push':
      queue.push(+num);
      break;
    case 'pop':
      out = queue.length === 0 ? -1 : queue.shift();
      break;
    case 'size':
      out = queue.length;
      break;
    case 'empty':
      out = queue.length === 0 ? 1 : 0;
      break;
    case 'front':
      out = queue.length === 0 ? -1 : queue[0];
      break;
    case 'back':
      out = queue.length === 0 ? -1 : queue[queue.length - 1];
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
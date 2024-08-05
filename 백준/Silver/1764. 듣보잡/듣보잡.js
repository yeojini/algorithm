const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
// N : 듣도 못한 사람의 수 M : 보도 못한 사람의 수
const [ N , M ] = input[0].split(' ').map(Number);
// N개의 줄에 걸쳐 듣도 못한 사람의 이름, N+2째 줄부터 보도 못한 사람의 이름
const notListen = input.slice(1, N+1);
const notHear = input.slice(N+1);
const persons = {};
for(let person of notListen) {
  persons[person] = 1;
}
const notListenHear = [];
for(let person of notHear){
  if(persons[person]) {
    notListenHear.push(person);
  }
}
notListenHear.sort();
console.log(`${notListenHear.length} \n${notListenHear.join('\n')}`);
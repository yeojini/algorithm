const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
// 도시의 개수
const n = +input[0];
// 도시를 연결하는 도로 길이
const road = input[1].split(' ').map(Number);
// 주유소의 리터당 가격
const price = input[2].split(' ').map(Number);
// 제일 왼쪽 도시에서 제일 오른쪽 도시로 가는 최소 비용
let result = BigInt(0);

let min = price[0];
for(let i=0; i< price.length-1; i++){
    min = Math.min(min, price[i]);
    price[i] = min;
}

for(let i=0; i<road.length; i++){
    result += BigInt(price[i]) * BigInt(road[i]);
}

console.log(String(result));
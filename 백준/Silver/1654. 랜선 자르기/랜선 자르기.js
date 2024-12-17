/*
문제 : 길이가 다른 K 개의 랜선을 길이가 같은 N 개의 랜선으로 자를 때 만들 수 있는 최대 랜선의 길이
입력 : K - 1 ~ 10^4, N - 1 ~ 10^6, 각 랜선의 길이(L)는 2^31 - 1 보다 작은 자연수
출력 : N개를 만들 수 있는 랜선의 최대 길이
문제 접근 :
만약 완탐으로 푼다면 각 랜선(K)개에 대해 1부터 랜선의 최대 길이(L)까지 시도 => O(KL)
최악의 경우 10^4 * 2^31 => 10^4 * (2^10)^3^1 => 10^4 * (1024)^3 * 2 => 2 * 10^4 * 10^9
=> 2 * 10^13 이므로 1초에 10^8 연산이 가능하다고 할 때 10^5 초 이상 소요됨
이분 탐색을 사용해 O(KlogL) 이라면
최악의 경우 10^4 * log2^31 => 10^4 * 31 * log2 = 10^4 * 31 * 0.3
=> 9.3 * 10^4 = 93000 번의 연산으로 0.001 초에 해결 가능함
*/
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [K, N] = inputs[0].split(' ').map(Number);
const lengths = inputs.slice(1).map(Number);

let start = 1;
let end = Math.max(...lengths);
let result = 0; // 랜선 최대 길이
while(start <= end) {
    const mid = Math.floor((start + end)/2);
    let sum = 0; // 최대 개수
    lengths.forEach(length => {
        sum += Math.floor(length / mid);
    })

    if(sum >= N) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(result);

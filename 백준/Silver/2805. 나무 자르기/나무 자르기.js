const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = inputs[0].split(' ').map(Number); // n : 나무의 수 1~10^6, m : 집으로 가져가려는 나무의 길이 2~10^9
const lengths = inputs[1].split(' ').map(Number); // 나무의 높이 배열. 각 요소는 0 ~ 10^9
// 절단기에 h 높이 설정해서 length - h 합 만큼 집에 가져감
// 적어도 m터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값

// 시간 복잡도 : 이진 탐색의 범위가 0 부터 최대 높이(10^9) 이고 각 단계에서 N(10^6) 개의 나무를 확인해야 하므로
// O(NlogM), 최악의 경우 O(10^6log10^9) = 10^6 * 9 * 2.3 = 20,7000,000 약 0.2 초
let left = 0;
let right = Math.max(...lengths);
let result = 0;
while(left <= right) {
    const mid = Math.floor((left + right)/2);
    let sum = 0;
    lengths.forEach((length)=>{
        if(length > mid) {
            sum += length - mid;
        }
    })
    if(sum >= m) {
        result = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
console.log(result);
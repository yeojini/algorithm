const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = +inputs[0];

// 순서를 뒤집어 LIS 문제로 변환
const nums = inputs[1].split(' ').map(Number).reverse();

let d = [0]; // LIS 배열
// 이진 탐색을 활용한 LIS 알고리즘 수행
for (let num of nums) {
    let last = d[d.length - 1];
    if(last < num) { // 마지막 원소보다 크다면 LIS 배열에 삽입
        d.push(num);
    } else { // 그렇지 않다면 가능한 왼쪽에 있는 원소와 교체
        let lowerIndex = lowerBound(d, num, 0, d.length);
        d[lowerIndex] = num;
    }
}

function lowerBound (arr, target, start, end) {
    while(start < end) {
        const mid = Math.floor((start+end)/2);
        if(arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
};

console.log(nums.length - d.length + 1);
// 문제 설명
// 주어진 문서 목록의 중요도를 바탕으로 특정 문서가 몇 번째로 인쇄되는지 찾는 문제
// 문서는 중요도에 따라 재배치되며, 더 높은 중요도의 문서가 앞서 인쇄됨
// 큐(Queue)를 이용한 순서대로 처리

// 문제 풀이
// 각 문서의 중요도와 해당 문서의 인덱스를 큐에 저장
// 큐의 첫 번째 문서를 꺼내고, 나머지 문서들 중 더 높은 중요도를 가진 문서가 있는지 확인
// 높은 중요도의 문서가 있으면 현재 문서를 큐의 맨 뒤로 이동
// 그렇지 않으면 문서를 인쇄하고 카운트를 증가
// 목표 문서가 인쇄되면 해당 순서 출력

// 중요 개념
// 큐

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const T = +input[0];
for(let i=0; i<T; i++) {
    // N : 문서의 개수, M : 몇 번째로 인쇄되었는지 궁금한 문서
    const [N, M] = input[2*i+1].split(' ').map(Number);
    const queue = input[2*i+2].split(' ').map((value, index) => [+value, index]);
    let count = 0;
    while(true) {
        const front = queue.shift();
        const [value, index] = front;
        // 나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면, Queue의 가장 뒤에 재배치
        if(queue.some((doc) => doc[0] > value)) {
            queue.push(front);
        } else {
            count++;
            if(index === M) {
                break;
            }
        }
    }
    console.log(count);
}
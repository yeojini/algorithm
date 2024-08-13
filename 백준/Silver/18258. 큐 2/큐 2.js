// 문제
// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램 작성
// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// 중요 개념
// 큐 구현


const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const T = input[0];

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    head = null;
    tail = null;
    length = 0;

    push = (value) => {
        const node = new Node(value);
        if(this.length++ === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    pop = () => {
        if(this.length === 0) {
            return -1;
        }
        const pop = this.head;
        this.head = pop.next;
        if(--this.length === 0) {
            this.tail = null;
        }
        return pop.value;
    }

    size = () => this.length;

    empty = () => this.length === 0 ? 1 : 0;

    front = () => this.length === 0 ? -1 : this.head.value;

    back = () => this.length === 0 ? -1 : this.tail.value;
}

const queue = new Queue();

let result = '';
for(let i = 1; i <= T; i++) {
    const str = input[i].split(' ');
    const command = str[0];
    if(command === 'push') {
        let num = +str[1];
        queue.push(num);
    } else if (command === 'pop') {
        result += queue.pop();
    } else if (command === 'size') {
        result += queue.size();
    } else if (command === 'empty') {
        result += queue.empty();
    } else if (command === 'front') {
        result += queue.front();
    } else if (command === 'back') {
        result += queue.back();
    }
    if(i !== T && command !== 'push') {
        result += '\n';
    }
}

console.log(result);
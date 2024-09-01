const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const T = input[0];

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  push(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  pop() {
    if (this.empty()) {
      return -1;
    }
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  size() {
    return this.tailIndex - this.headIndex;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  front() {
    if (this.empty()) {
      return -1;
    }
    return this.items[this.headIndex];
  }

  back() {
    if (this.empty()) {
      return -1;
    }
    return this.items[this.tailIndex - 1];
  }
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
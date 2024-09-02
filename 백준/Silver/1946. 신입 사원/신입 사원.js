const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const T = +input[0];
for(let i=1; i<input.length;){
    const N = Number(input[i]);
    const array = [];
    for(let j=0; j<N; j++){
        const [rank1, rank2] = input[i+j+1].split(' ').map(Number);
        array.push([rank1, rank2]);
    }
    // 오름차순 정렬
    array.sort((a,b) => a[0] - b[0]);
    let cnt = 0;
    let minValue = N+1;
    for(let j=0; j<array.length; j++) {
        const [rank1, rank2] = array[j];
        if(rank2 < minValue) {
            cnt += 1;
            minValue = rank2;
        }
    }
    console.log(cnt);
    i+=N+1;
}
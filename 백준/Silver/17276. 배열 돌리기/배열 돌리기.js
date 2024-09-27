// 하나의 양의 정수를 최소 개수의 서로 다른 피보나치 수들의 합으로 나타내기
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const T = Number(+input[0]);
let index = 1;
for (let t=0; t < T; t++) {
    // 배열 크기(홀수), 각도 d 0 <= |d| <= 360. 45의 배수
    const [n,d] = input[index].split(' ').map(Number);
    const matrix = [];
    for(let i=0; i<n; i++) {
        matrix.push(input[index+i+1].split(' ').map(Number));
    }
    // d 를 45 또는 -45 로 조정
    const cnt = Math.abs(d / 45);
    for(let i=0; i<cnt; i++){
        rotateMatrix(matrix,n,d>0);
    }
    for(let i=0; i<n; i++) {
        console.log(matrix[i].join(' '));
    }
    index +=n+1;
}


// d 가 양수이면 시계방향으로 d 도 돌림
// 음수이면 반시계방향으로 d 도 돌림

function rotateMatrix(matrix, n, rotation) {
    // 주대각선
    const temp1 = [];
    // 가운데 열
    const temp2 = [];
    // 부대각선
    const temp3 = [];
    // 가운데 행
    const temp4 = [];
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            // 주대각선
            if(i === j) {
                temp1.push(matrix[i][j]);
            }
            // 가운데 열
            if (j === Math.floor(n/2)) {
                temp2.push(matrix[i][j]);
            }
            //부대각선
            if(i + j === n-1) {
                temp3.push(matrix[i][j]);
            }
            //가운데행
            if(i === Math.floor(n/2)){
                temp4.push(matrix[i][j]);
            }
        }
    }
    if(rotation > 0) {
        for(let i=0; i<n; i++) {
            for(let j=0; j<n; j++) {
                // 가운데행을 주대각선으로 이동
                if(i === j) {
                    matrix[i][j] = temp4.shift();
                }
                // 주대각선을 가운데열로 이동
                if (j === Math.floor(n/2)) {
                    matrix[i][j] = temp1.shift();
                }
                // 가운데열을 부대각선으로 이동
                if(i + j === n-1) {
                    matrix[i][j] = temp2.shift();
                }
                //부대각선을 가운데행으로 이동
                if(i === Math.floor(n/2)){
                    matrix[i][j] = temp3.pop();
                }
            }
        }
    } else {
        for(let i=0; i<n; i++) {
            for(let j=0; j<n; j++) {
                // 가운데열을 주대각선으로 이동
                if(i === j) {
                    matrix[i][j] = temp2.shift();
                }
                // 부대각선을 가운데열로 이동
                if (j === Math.floor(n/2)) {
                    matrix[i][j] = temp3.shift();
                }
                // 가운데행을 부대각선으로 이동
                if(i + j === n-1) {
                    matrix[i][j] = temp4.pop();
                }
                //주대각선을 가운데행으로 이동
                if(i === Math.floor(n/2)){
                    matrix[i][j] = temp1.shift();
                }
            }
        }
    }
}
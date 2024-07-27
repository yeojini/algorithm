// 서로 주고받은 기록 있으면 -> 이번달에 선물 더 많이 준 사람이 선물 준 애한테 다음달에 선물 하나 받음
// 같은 개수거나 서로 주고받은 기록 없으면 -> 선물지수가 더 큰 사람이 더 작은사람한테 받음
// 선물 지수 : 내가 준 선물 수 - 받은 선물 수
// 주고받은 기록 없고 선물지수도 같으면 선물 안주고받음
// answer : 가장 큰 선물 수
// friends : 친구들 목록
// gifts : 앞에꺼 : 준 애 B : 받은 애
function solution(friends, gifts) {

    // 이름 준 갯수 받은 갯수
    const n = friends.length;
    const board = Array.from({length: n}, ()=>Array(n).fill(0));
    for (let gift of gifts) {
        const [giver, reciever] = gift.split(' ');
        board[friends.indexOf(giver)][friends.indexOf(reciever)] += 1;
    }
    const giveCnt = Array(n).fill(0);
    const reiceveCnt = Array(n).fill(0);
    const points = Array(n).fill(0);
    for(let i=0; i < friends.length; i++){
        for(let j=0; j<friends.length; j++){
            giveCnt[i] += board[i][j];
            reiceveCnt[i] += board[j][i];
        }
    }
    for(let i=0; i <n; i++){
        points[i] = giveCnt[i] - reiceveCnt[i];
    }
    
    const nextMonth = Array(n).fill(0);
    for(let i=0; i<n;i++){
        for(let j=0; j<n;j++){
            if(i !== j){
                if(board[i][j] > 0 && board[i][j] > board[j][i]) {
                    nextMonth[i]+=1;
                } 
                if((board[i][j] === 0 && board[j][i] === 0) || (board[i][j] === board[j][i])) {
                    if(points[i] > points[j]) {
                        nextMonth[i]+=1;
                    }
                }                
            }
        }
    }
    console.log(nextMonth);
    
    return Math.max(...nextMonth);
}
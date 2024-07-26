function solution(maps) {
    var answer = -1;
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array.from({length: n}, ()=> Array(m).fill(false));
    
    function isSafe(row,col) {
    	return row < n && row >= 0 && col < m && col >= 0 && maps[row][col] === 1 && !visited[row][col];
    }
    
    const queue = [[0,0,1]];
    visited[0][0] = true;
    
    const directions = [
        [-1,0],
        [0,-1],
        [1,0],
        [0,1]
    ];
    
    while(queue.length) {
        const [row,col,distance] = queue.shift();
        if(row === n-1 && col === m-1){
            return distance;
        }
        for (let [dx,dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if(isSafe(newRow,newCol)) {
                visited[newRow][newCol] = true;
                queue.push([newRow, newCol,distance+1]);
            }
        }
    }
    return answer;
}
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
    while(queue.length) {
        const [row,col,distance] = queue.shift();
        if(row === n-1 && col === m-1){
            return distance;
        }
        if(isSafe(row+1,col)) {
            visited[row+1][col] = true;
            queue.push([row+1,col,distance+1]);
        };
        if(isSafe(row-1,col)) {
            visited[row-1][col] = true;
            queue.push([row-1,col,distance+1]);
        }
        if(isSafe(row,col+1)) {
            visited[row][col+1] = true;
            queue.push([row,col+1,distance+1]);
        }
        if(isSafe(row,col-1)) {
            visited[row][col-1] = true;
            queue.push([row,col-1,distance+1]);
        }
    }
    return answer;
}
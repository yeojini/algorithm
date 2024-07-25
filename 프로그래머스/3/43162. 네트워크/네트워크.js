function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(false);
    
    function bfs(node) {
        const queue = [node];
        visited[node]=true;
        while(queue.length){
            const current = queue.shift();
            for(let i = 0; i< n; i++){
                if(computers[current][i] && !visited[i]) {
                    visited[i] = true;
                    queue.push(i);
                }   
            }
        }
        
    }
    
    for(let i=0; i<n ; i++){
        if(!visited[i]){
            bfs(i);
            answer++;
        }
    }
    return answer;
}
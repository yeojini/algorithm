// 모든 티켓을 사용하는 것이 목표 dfs 
function solution(tickets) {
    const routes = {};
    
    // 티켓 정보를 바탕으로 경로를 만듦
    for (const [from, to] of tickets) {
        if(!routes[from]) {
            routes[from] = [];
        }
        routes[from].push(to);
    }
    
    // 각 경로를 알파벳 순서로 정렬
    for(const from in routes) {
        routes[from].sort();
    }
    
    const answer = [];
    
    function dfs(current) {
        while(routes[current] && routes[current].length > 0) {
            const next = routes[current].shift();
            dfs(next);
        }
        answer.push(current);
    }
    
    dfs("ICN");
    
    return answer.reverse();
}
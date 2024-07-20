// F(n) = F(NN) + F(n-N)+N,F(n/N)* N, F(n+N),F(n*N))
function solution(N, number) {
    if(number === N) {
        return 1;
    }
    
    // DP 배열 초기화: 각 인덱스는 N을 해당 인덱스 횟수만큼 사용해서 만들 수 있는 숫자들의 집합
    const dp = Array.from({length: 9}, () => new Set());
    dp[1].add(N);
    
    // dp[2]는 {NN, N+N, N-N,N*N, N/N} 등등
    // dp[3]은 {NNN, N+N+N, N}
    for(let i=2;i<9;i++){
        // NN,NNN 등 처리
        dp[i].add(Number(String(N).repeat(i)));
        for(let j=0; j<i; j++){
            for(const x of dp[j]) {
                for(const y of dp[i-j]){
                    dp[i].add(x+y);
                    dp[i].add(x-y);
                    dp[i].add(x*y);
                    if(y !==0) dp[i].add(Math.floor(x/y));
                }
            }
        }
        if(dp[i].has(number)) return i;
    }
    return -1;
}
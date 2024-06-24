/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // cost[i] = i 번째 계단 비용. 비용을 지불하면 한칸이나 두칸 올라갈 수 있음
    // index 0 이나 1 에서 시작할 수 있음
    // dp[i] = i 번째 계단까지 올라가는데 최소 비용
    const dp = new Array(cost.length+1);
    dp[0] = 0;
    dp[1] = 0;
    for (let i=2; i<dp.length; i++){
        dp[i] = Math.min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2]);
    }
    // dp 의 마지막 요소가 top floor 를 의미함
    return dp[dp.length-1];
};
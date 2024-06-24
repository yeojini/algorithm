/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    // dp[i] = i 번째 집까지 털었을 때 최대값 = 이전 집 털거나 이전 집 안털고 지금 털었을 때 중에 최대값
    const dp= new Array(nums.length+1);
    dp[1] = nums[0];
    dp[2] = Math.max(nums[0], nums[1]);
    for(let i=3; i<=nums.length; i++){
        dp[i] = Math.max(dp[i-2]+nums[i-1], dp[i-1]);
    }
    return dp[nums.length]
};
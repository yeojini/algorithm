/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const memo = {};
    const pointTable = {};
    let max = 0;
    nums.forEach((num)=>{
        if(max <= num) max = num;
        if(pointTable[num] !== undefined) {
            pointTable[num] += num;
            return; 
        }
        pointTable[num] = num;
    })

    const maxPoints = (num) => {
        if(num === 0) {
           return 0;
        }
        if(num === 1) {
            return pointTable[1] ?? 0;
        }
        if(memo[num] !== undefined) {
            return memo[num];
        }
        const gain = pointTable[num] ?? 0;
        const res = Math.max(gain + maxPoints(num-2), maxPoints(num-1));
        memo[num] = res;
        return res;
    }
    return maxPoints(max);
};
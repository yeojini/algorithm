/**
 * nums[i] === nums[j] 이고 i 와 j 의 차가 k 보다 같거나 작은 i,j 가 있는지 판단
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = {};
    for(let i=0; i < nums.length; i++ ) {
        const num = nums[i];
        if(map[num] !== undefined && i - map[num] <= k) {
            return true;
        }
        map[num] = i;
    }
    return false;
};
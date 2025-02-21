/**
 * nums[i] === nums[j] 이고 i 와 j 의 차가 k 보다 같거나 작은 i,j 가 있는지 판단
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // key: 숫자. value: 숫자가 등장한 최근 index
    const map = new Map();
    for(let i=0; i<nums.length; i++) {
        const num = nums[i];
        if(i - map.get(num) <= k) {
            return true;
        }
        map.set(num, i);
    }
    return false;
};
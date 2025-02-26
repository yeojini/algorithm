/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;
    for(let right = 0; right < nums.length ; right++) {
        sum += nums[right];
        while(sum >= target) {
            minLength = Math.min(right - left + 1, minLength);
            sum -= nums[left];
            left++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
};
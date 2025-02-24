/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = new Map();
  for(let i=0; i< nums.length; i++) {
    const num = nums[i];
    if(map[num] !== undefined) return true;
    map[num] = i;
  }
  return false;
};
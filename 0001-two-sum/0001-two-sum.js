var twoSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(map[complement] !== undefined) {
            return [i, map[complement],];
        }
        map[nums[i]] = i;
    }
};
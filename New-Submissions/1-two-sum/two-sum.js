var twoSum = function (nums, target) {
    let register = new Map();
    for (let i = 0; i < nums.length; i++) {
        let result = target - nums[i];
        if (register.has(result)) { return [register.get(result), i]; }
        register.set(nums[i], i);
    }
};
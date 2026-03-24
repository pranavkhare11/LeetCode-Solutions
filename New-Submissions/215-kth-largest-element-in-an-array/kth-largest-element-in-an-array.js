var findKthLargest = function(nums, k) {
    let sortedArr = nums.sort((a, b) => a - b);
    return sortedArr[sortedArr.length - k];
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0];
    let max = sum;
    
    for(let i = 1; i < nums.length; i++) {
        if (sum < 0) {
            sum = 0;
        }
        sum += nums[i];
        max = Math.max(sum, max);
    }
    
    return Math.max(sum, max);
};

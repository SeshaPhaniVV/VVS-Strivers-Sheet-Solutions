/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let firstDecreasing = -1;
    
    if (!nums || nums.length <= 1) return nums;
    let prev = nums[nums.length - 1];
    
    for(let i = nums.length - 2; i >= 0; i--) {
        const val = nums[i];
        if (val < prev) {
            firstDecreasing = i;
            break;
        }
        prev = val;
    }
    
    if (firstDecreasing >= 0) {
        let swapIndex; 
        for (let i = firstDecreasing + 1; i <= nums.length - 1; i++) {
            if (nums[i] > nums[firstDecreasing]) {
                swapIndex = i;
            }
        }
        
        const temp = nums[firstDecreasing];
        nums[firstDecreasing] = nums[swapIndex];
        nums[swapIndex] = temp;
    }
    
    let i = firstDecreasing + 1;
    let j = nums.length - 1;

    while(i < j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
    
    return nums;
};

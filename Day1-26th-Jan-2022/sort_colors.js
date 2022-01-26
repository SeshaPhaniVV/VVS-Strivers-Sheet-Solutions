// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let ptr1 = 0;
    let ptr2 = 0;
    let ptr3 = nums.length - 1;
    
    const swap = (idx1, idx2) => {
        let temp = nums[idx1];
        nums[idx1] = nums[idx2];
        nums[idx2] = temp;
    }
    
    
    while(ptr2 <= ptr3) {
        if (nums[ptr2] === 0) {
            swap(ptr1, ptr2)
            ptr1++;
            ptr2++;
        }
        
        else if (nums[ptr2] === 1) {
            ptr2++;
        }
        
        else if (nums[ptr2] === 2) {
            swap(ptr2, ptr3);
            ptr3--;
        }
    }
    
    return nums;
};

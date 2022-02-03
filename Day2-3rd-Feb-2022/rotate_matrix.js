/**
 * https://leetcode.com/problems/rotate-image/solution/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;

    let start = 0;
    let end = n -1;
    
    while(start < end) {
        for (let i = 0; i < end - start; i++) {
            const val1 = matrix[start][start + i];
            const val2 = matrix[start + i][end];
            const val3 = matrix[end][end - i];
            const val4 = matrix[end - i][start];

            matrix[start][start + i] = val4;
            matrix[start + i][end] = val1;
            matrix[end][end - i] = val2;
            matrix[end - i][start] = val3;
        }
        start++;
        end--;
    }
};

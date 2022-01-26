/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let isRow = false;
    let isCol = false;
    
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            isRow = true;
            break;
        }
    }
    
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            isCol = true;
            break;
        }  
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    if (isCol) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }
    
    if (isRow) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
    
    
    return matrix;
};

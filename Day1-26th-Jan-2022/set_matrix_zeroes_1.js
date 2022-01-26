var setZeroes = function(matrix) {
    let allRows = [];
    let allColumns = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                allRows.push(i);
                allColumns.push(j);
            }
        }
    }
    
    let rowIndex = allRows.length - 1;
    let colIndex = allColumns.length - 1;
    
    while(rowIndex >= 0) {
        const row = allRows[rowIndex];
        for (let j = 0; j < matrix[0].length; j++) { 
            matrix[row][j] = 0;
        }
        rowIndex--;
    }
    
    while(colIndex >= 0) {
        const col = allColumns[colIndex];
        for (let j = 0; j < matrix.length; j++) { 
            matrix[j][col] = 0;
        }
        colIndex--;
    }
    
    return matrix;
};

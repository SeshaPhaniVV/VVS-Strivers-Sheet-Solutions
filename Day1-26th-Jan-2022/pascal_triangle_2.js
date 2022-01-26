/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let prev = [1];
    let start = 1;
    
    while(start <= rowIndex) {
        let cur = [];
        for (let i = 0; i <= start; i++) {
            let val = 1;
            if (i - 1 >= 0 && i < prev.length) {
                val = prev[i - 1] + prev[i];
            }
            cur.push(val);
        }
        prev = [...cur];
        start++;
    }
    
    return prev;
};

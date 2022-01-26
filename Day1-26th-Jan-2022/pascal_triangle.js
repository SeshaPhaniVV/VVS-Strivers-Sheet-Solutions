/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let start = 1;
    const res = [[1]];
    
    while(start < numRows) {
        const prev = res[start - 1];
        const cur = [];
        for (let i = 0; i < start + 1; i++) {
            let val = 1;
            if (i - 1 >= 0 && i < prev.length) {
                val = prev[i] + prev[i - 1];
            }
            cur.push(val);
        }
        res.push([...cur]);
        start++;
    }
    
    return res;
};

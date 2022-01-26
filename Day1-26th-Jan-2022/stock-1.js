// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    
    
    for(let i = 0; i< prices.length; i++) {
        min = Math.min(prices[i], min);
        max = Math.max(prices[i] - min, max);
    }
    
    return max;
};

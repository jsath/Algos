/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
    Example 1:
        Input: prices = [7,1,5,3,6,4]
        Output: 5
            Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
            Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
    Example 2:
        Input: prices = [7,6,4,3,1]
        Output: 0
            Explanation: In this case, no transactions are done and the max profit = 0.
    Constraints:
        1 <= prices.length <= 105
        0 <= prices[i] <= 104 */
/**
 * @param {number[]} prices
 * @return {number}
 * current complexity o(n^2)
 */
var maxProfit = function(prices) {
    let profit = 0; 
    //first loop to get the buy day 
    for(let i = 0; i < prices.length; i ++){
        //second loop to check all days in future for potential profit
        for(let j = i+1; j < prices.length;j++){
            if((prices[j] - prices[i]) > profit){
                profit = (prices[j] - prices[i])
            }
        }
    }
    return profit
};

/**
 * @param {number[]} prices
 * @return {number}
 * current complexity o(n)
 */
var maxProfit2 = function(prices) {
    let max = 0; 
    let min = prices[0]
    for(let j = 1;j < prices.length; j ++){
        //sell day based on current iteration of loop
        let sell = prices[j]
        let profit = sell-min


        max = Math.max(max,profit)

        //setting the buy price to a sell if lower
        if(sell < min){min=sell}
    }
    return max
};


let prices1 = [7,1,5,3,6,4]

let prices2 = [7,6,4,3,1]

console.log(maxProfit2(prices1))
console.log(maxProfit2(prices2))
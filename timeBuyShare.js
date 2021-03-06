let prices1 = [7, 1, 5, 3, 6, 4]; //5
let prices2 = [7, 6, 4, 3, 0, 5, 6, 4, 8, 10]; //0

let maxProfit = function(prices) {
  let minPrice = prices1[0];
  let maxProfit = 0;

  for (var i = 0; i < prices.length; i++) {
    const current = prices[i];
    if (current < minPrice) {
      minPrice = current;
    }
    if (current - minPrice > maxProfit) {
      maxProfit = current - minPrice;
    }
  }

  return maxProfit;
};

console.log(prices1, maxProfit(prices1));
console.log(prices2, maxProfit(prices2));

const maxProfit =(prices)=>{

    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i=1; i<prices.length; i++){
        const currentPrice = prices[i];
    
// update min price if lower value is found
//compares the current minPrice with currentPrice
//If currentPrice is lower, it updates minPrice


 minPrice =   Math.min(minPrice,currentPrice); 

 const potentialProfit= currentPrice-minPrice;

  maxProfit= Math.max(maxProfit, potentialProfit);
  console.log(maxProfit);
}

     return maxProfit;
}
const prices = [1,4,7,8,6];
const profit = maxProfit(prices);
console.log('Max profit:', profit);
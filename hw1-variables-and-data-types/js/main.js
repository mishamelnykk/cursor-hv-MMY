const flour = 15.678;
const butter = 90.2345;
const cream = 123.965;

const cash = 500;

const maxPriсeGoods = Math.max(flour, butter,cream);
console.log(maxPriсeGoods);
const minPriсeGoods = Math.min(flour, butter,cream);
console.log(minPriсeGoods);
const sumPriceGoods = flour + butter + cream;
console.log(sumPriceGoods);
const sumPriceGoodsRound = Math.floor(flour) + Math.floor(butter) + Math.floor(cream);
console.log(sumPriceGoodsRound);
const sumRoundHundred = Math.round(sumPriceGoods / 100) * 100;
console.log (sumRoundHundred);


const remainderCash = cash - sumPriceGoods;
console.log (remainderCash);
const meanValueGoods = (sumPriceGoods / 3).toFixed(2);
console.log(meanValueGoods);

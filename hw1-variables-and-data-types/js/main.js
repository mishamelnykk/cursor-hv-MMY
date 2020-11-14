const flour = 15.678;
const butter = 90.2345;
const cream = 123.965;

const cash = 500;
//base
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
const sumForParity = (Math.floor(sumPriceGoods) % 2) === 0;
console.log (sumForParity);
const remainderCash = cash - sumPriceGoods;
console.log (remainderCash);
const meanValueGoods = (sumPriceGoods / 3).toFixed(2);
console.log(meanValueGoods);

//more difficult
const discount = Math.random().toFixed(2);
console.log (discount);
const sumWithDiscount = (sumPriceGoods - (sumPriceGoods * discount)).toFixed(2);
console.log(sumWithDiscount);
const netProfit = (sumPriceGoods / 2 - (sumPriceGoods * discount)).toFixed(2);
console.log(netProfit);

//advanced
console.log(`Максимальна ціна : ${maxPriсeGoods} 
  Мінімальна ціна : ${minPriсeGoods} 
  Сума вартості товарів : ${sumPriceGoods} 
  Сума товарів округлена в меншу сторону : ${sumPriceGoodsRound} 
  Сума округлена до сотень : ${sumRoundHundred} 
  Чи парною є сума? : ${sumForParity} 
  Решта з ${cash} грн : ${remainderCash} 
  Середнє значення цін з копійками : ${meanValueGoods} 
  Сума із випадковою знижкою з копійками : ${sumWithDiscount} 
  Чистий прибуток враховуючи знижку: ${netProfit}`);






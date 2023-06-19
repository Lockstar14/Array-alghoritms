const goods = [
  {
    title: "BOSH-30",
    category: "холодильник",
    price: 150000,
  },
  {
    title: "Samsung Galaxy S21",
    category: "смартфон",
    price: 80000,
  },
  {
    title: "Sony Bravia",
    category: "телевизор",
    price: 200000,
  },
];

let expensiveGood = 0;
let cheapestGood = goods[0].price;
let sale = 0;

goods.forEach((good) => {
  if (good.price > expensiveGood) {
    expensiveGood = good.price;
  }
});
console.log(expensiveGood);

goods.forEach((good) => {
  if (good.price < cheapestGood) {
    cheapestGood = good.price;}
});
console.log(cheapestGood);

goods.forEach((good) => {
  if (good.price > 140000) {
    sale = good.price - 20000;
    console.log("Вашему вниманию, цена со скидкой: " + sale);
  }
});
const categoryGoods = [];
goods.forEach((good)=>{
  categoryGoods.push(good.category)
})
console.log(categoryGoods)
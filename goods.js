var goods = [
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
var expensiveGood = 0;
var cheapestGood = goods[0].price;
var sale = 0;
goods.forEach(function (good) {
    if (good.price > expensiveGood) {
        expensiveGood = good.price;
    }
});
console.log(expensiveGood);
goods.forEach(function (good) {
    if (good.price < cheapestGood) {
        cheapestGood = good.price;
    }
});
console.log(cheapestGood);
goods.forEach(function (good) {
    if (good.price > 140000) {
        sale = good.price - 20000;
        // console.log("Вашему вниманию, цена со скидкой: " + sale);
    }
});
var categoryGoods = [];
goods.forEach(function (good) {
    categoryGoods.push(good.category);
});
// console.log(categoryGoods)

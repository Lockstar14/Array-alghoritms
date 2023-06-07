var orders = [
    { name: "Carl", status: "CREATE", cost: 10000 },
    { name: "Anton", status: "DELIVERY", cost: 20000 },
    { name: "Bogdan", status: "PAY", cost: 30000 },
    { name: "Oleg", status: "CREATE", cost: 10000 },
    { name: "Dima", status: "DELIVERY", cost: 14000 },
];
var customers = orders.map(function (item) { return item.name; });
console.log(customers);
orders.forEach(function (order) {
    if (order.status === "CREATE") {
        order.status = "DELIVERY";
    }
});
console.log(orders);
var soldOut = orders.reduce(function (total, order) {
    if (order.status === "PAY" || order.status === "DELIVERY") {
        return total + order.cost;
    }
    return total;
}, 0);
console.log(soldOut);

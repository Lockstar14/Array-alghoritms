type TOrder = {
  name: string;
  status: "CREATE" | "DELIVERY" | "PAY";
  cost: number;
};
const orders: TOrder[] = [
  { name: "Carl", status: "CREATE", cost: 10000 },
  { name: "Anton", status: "DELIVERY", cost: 20000 },
  { name: "Bogdan", status: "PAY", cost: 30000 },
  { name: "Oleg", status: "CREATE", cost: 10000 },
  { name: "Dima", status: "DELIVERY", cost: 14000 },
];
const customers = orders.map((item) => item.name)
console.log(customers)
orders.forEach(order => {
  if(order.status === "CREATE") {
    order.status = "DELIVERY"
  }
});
console.log(orders)
const soldOut = orders.reduce((total,order) => {
  if(order.status === "PAY" || order.status ==="DELIVERY"){
    return total + order.cost;
  }
  return total;
},0);
console.log(soldOut)
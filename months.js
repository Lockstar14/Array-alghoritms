var months = [
    { title: "January", days: 26 },
    { title: "February", days: 27 },
    { title: "March", days: 32 },
    { title: "April", days: 33, },
    { title: "May", days: 30 },
];
var newMonth = { title: "December", days: 25 };
var summary = 0;
months.push(newMonth);
var shortMonth = [];
months.forEach(function (month) {
    summary += month.days;
    if (month.days < 30) {
        shortMonth.push(month);
    }
});
console.log(shortMonth); // с помощью foreach запушил в новую const месяца в которых меньше 30 дней
var maxDay = 0;
months.forEach(function (month) {
    if (month.days > maxDay) {
        maxDay = month.days;
    }
});
console.log(maxDay);
var minDay = months[0].days;
months.forEach(function (month) {
    if (month.days < minDay) {
        minDay = month.days;
    }
});
console.log(minDay);

type TMonth = {
  title: string;
  days: number;
};

const months: TMonth[] = [
  { title: "January", days: 26 },
  { title: "February", days: 27 },
  { title: "March", days: 32 },
  { title: "April", days: 33 },
  { title: "May", days: 30 },
];
const newMonth = { title: "December", days: 25 };

let summary = 0;

months.push(newMonth);

const shortMonth: TMonth[] = [];

months.forEach((month) => {
  summary += month.days;

  if (month.days < 30) {
    shortMonth.push(month);
  }
});
console.log(shortMonth); // с помощью foreach запушил в новую const месяца в которых меньше 30 дней

let maxDay = 0;

months.forEach((month) => {
  if (month.days > maxDay) {
    maxDay = month.days;
  }
});
console.log(maxDay);

let minDay = months[0].days;

months.forEach((month) => {
  if (month.days < minDay) {
    minDay = month.days;
  }
});
console.log(minDay);

//sexing

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [1, 5, 40, 28, 44, 16, 57, 3, 12, 71];
var highest = 0;
var smallest = numbers[0];
var summ = 0;
numbers.forEach(function (number) {
    if (number > highest) {
        highest = number;
    }
});
console.log("Самое большое число: " + highest);
numbers.forEach(function (number) {
    if (number < smallest) {
        smallest = number;
    }
});
console.log("Самое маленькое число: " + smallest);
numbers.forEach(function (number) {
    summ += number;
});
console.log("Сумма :" + summ);
var seventys = [];
numbers.forEach(function (number) {
    if (number >= 70) {
        seventys.push(number);
    }
});
console.log("Числа от 70: " + seventys);
var thirtieth = [];
numbers.forEach(function (number) {
    if (number < 30) {
        thirtieth.push(number);
    }
});
console.log("Числа до 30: " + thirtieth);
var fourAndFive = __spreadArray(__spreadArray([], thirtieth, true), seventys, true);
console.log("Объединил два массива до 30 и от 70: " + fourAndFive);
console.log("Какое количество элементов: " + fourAndFive.length);
numbers.forEach(function (number, index) {
    if (number >= 30 && number <= 50) {
        numbers[index] = 20;
    }
});
console.log("тут я заменил числа, но честно скажу это я сделал с помощью chatGpt: " + numbers);
numbers.forEach(function (number, index) {
    if (number >= 50 && number <= 80) {
        numbers[index] = 80;
    }
});
console.log("по аналогии с предыдущем, заменил числа, но не совсем понял смысл задания если просто значения меняются: " + numbers);
numbers.forEach(function (number) {
    summ += number;
});
console.log("Новая сумма после всех махинаций) :" + summ);

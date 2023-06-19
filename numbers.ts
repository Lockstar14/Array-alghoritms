let numbers = [1, 5, 40, 28, 44, 16, 57, 3, 12, 71];
let highest = 0;
let smallest = numbers[0]
let summ = 0
numbers.forEach((number) => {
  if (number > highest) {
    highest = number;
  }
});
console.log("Самое большое число: "+highest);


numbers.forEach((number) => {
    if (number < smallest) {
      smallest= number;
    }
  });
console.log("Самое маленькое число: "+smallest)


numbers.forEach((number) => {
summ += number
})
console.log("Сумма :"+summ)


let seventys = []
numbers.forEach((number) => {
    if (number >= 70){
    seventys.push(number)
    }
    })
    console.log("Числа от 70: "+seventys)


let thirtieth = []
numbers.forEach((number) => {
    if (number < 30){
   thirtieth.push(number)
    }
    })
    console.log("Числа до 30: "+thirtieth)

let fourAndFive = [...thirtieth, ...seventys]

console.log("Объединил два массива до 30 и от 70: "+ fourAndFive)


console.log("Какое количество элементов: "+fourAndFive.length)


numbers.forEach((number,index) => {
    if (number >= 30 && number <= 50){
      numbers[index] = 20
    }
    })
    console.log("тут я заменил числа, но честно скажу это я сделал с помощью chatGpt: "+numbers)


    numbers.forEach((number,index) => {
        if (number >= 50 && number <= 80){
          numbers[index] = 80
        }
        })
        console.log("по аналогии с предыдущем, заменил числа, но не совсем понял смысл задания если просто значения меняются: "+numbers)

        numbers.forEach((number) => {
            summ += number
            })
            console.log("Новая сумма после всех махинаций) :"+summ)
const salaryPerDay = 7000
const incomeMarth = {
workingDays: 19,

}
const incomeApril = {
workingDays:20
}

const incomeMay = {
workingDays: 20

}

const totalIncome = (incomeMarth.workingDays + incomeApril.workingDays + incomeMay.workingDays) * salaryPerDay
console.log(totalIncome)
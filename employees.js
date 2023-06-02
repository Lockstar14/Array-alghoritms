let collective = [{name: "Semen", salary: 150000},{name:"Sergey", salary:130000}, {name:"Georgiy",salary: 140000}]
const salaryIncrease = collective.map((employee)=>{
    return {...employee, salary: employee.salary* 1.1}
 
})
let highestSalary = 0
let topEmployee = null
salaryIncrease.forEach((employee) => {
    if(employee.salary > highestSalary) {
        highestSalary = employee.salary
        topEmployee = employee;
    }
})
console.log("Самая высокая зарплата у :",topEmployee.name, "-", highestSalary)
console.log(topEmployee.name, "получает премию 50 000!")

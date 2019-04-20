 
let startBtn = document.getElementById("start"),
    result = document.querySelectorAll(".result"),
    value = document.querySelectorAll("div.budget-value, div.daybudget-value, div.level-value, div.expenses-value, div.income-value, div.monthsavings-value, div.yearsavings-value"),
    expItem = document.querySelectorAll("input.expenses-item"),
    expItemBtn = document.getElementsByTagName("button"),
    optExpInput = document.querySelectorAll(".optionalexpenses-item"),
    inputChooseIncome = document.querySelector("input.choose-income"),
    inputSavings = document.querySelector("input#savings"),
    inputSum    = document.querySelector("input#sum"),
    inputPercent = document.querySelector("input#percent"),
    inputYearValue   = document.querySelector("input.year-value"),
    inputMonthValue = document.querySelector("input.month-value"), 
    inputDayValue = document.querySelector ("input.day-value");


console.log(inputSum,inputDayValue);

// console.log(startBtn);
// console.log(result);
// console.log(value);
// console.log(expItem);
// console.log(expItemBtn);
// console.log(optExpInput);
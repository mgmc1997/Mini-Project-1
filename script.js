"use strict";

//Calculator of Salary
// Every three years, based on your contract, the company is obliged to increase your salary by 15%.
// Create a calculator that computes for salaries for different years with inputs: Starting Year, Target Year, Starting Year Salary (All in 'Numbers')

const userData = {};
userData.startingYear = Number(
  prompt("When is your Starting Year? (Example: 2000)")
);
userData.targetYear = Number(
  prompt("When is your Target Date? (Example: 2003)")
);
userData.startingYearSalary = Number(
  prompt("What is your Starting Year Salary? (Example: 20000)")
);

const isNaturalNumber = function (n) {
  return n > 0 && Number.isInteger(n);
};

const calcSalary = function (user) {
  let targetYearSalary = user['startingYearSalary'];
  if (isNaturalNumber((user["targetYear"] - user['startingYear] / 3)) {
    // Use Compount Interest Formula to solve this
  }
};

// console.log(userData);
// console.log(typeof userData.salary);
// calcSalary;

// console.log(isNaturalNumber());

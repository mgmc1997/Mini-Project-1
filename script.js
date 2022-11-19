"use strict";

//Calculator of Salary
// Every three years, based on your contract, the company is obliged to increase your salary by 15%.
// Create a calculator that computes for salaries for different years with inputs: Starting Year, Target Year, Starting Year Salary (All in 'Numbers')

//User Input
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

// Data Processing
const timeDifference = userData.targetYear - userData.startingYear;
const rate = 15;

const calcSalary = function (userObj) {
  const isNaturalNumber = function (n) {
    return n > 0 && Number.isInteger(n);
  };
  const frequency = timeDifference / 3;

  let targetYearSalary = userObj.startingYearSalary;

  if (isNaturalNumber(frequency)) {
    for (let i = 2; i <= frequency; i++) {
      targetYearSalary *= 1 + rate / 100;
    }
  } else if (timeDifference > 0) {
    for (let i = 2; i <= Math.trunc(timeDifference); i++) {
      targetYearSalary *= 1 + rate / 100;
    }
  } else targetYearSalary = -1;

  return Math.round((targetYearSalary + Number.EPSILON) * 100) / 100;
};

// Result of Calculation: Salary in the Target Year
if (calcSalary(userData) > 0) {
  alert(
    `Your salary in ${timeDifference} years at ${rate}% increase rate every 3 years is PHP ${calcSalary(
      userData
    )}`
  );
} else {
  alert("Invalid input. Please refresh page and try again.");
}

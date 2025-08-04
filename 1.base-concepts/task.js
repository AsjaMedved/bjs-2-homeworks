"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

 if (d > 0) {
     arr[0] = (-b + Math.sqrt(d)) / (2 * a);
     arr[1] = (-b - Math.sqrt(d)) / (2 * a);
   } else if (d === 0) {
     arr[0] = -b / (2 * a);
   } else {
     return arr;
   }
   return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = percent / 100 / 12;
  const loanBody = amount - contribution;
  const payment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
  const totalAmount = payment * countMonths;
  return Number(totalAmount.toFixed(2));
}

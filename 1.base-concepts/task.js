"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rate = parseInt(percent) / 100 / 12;
  let initPay = parseInt(contribution);
  let totalCost = parseInt(amount);
  let months = parseInt(countMonths);

  if (isNaN(rate) || rate < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(initPay) || initPay < 0) {
    return `Параметр "Первоначальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(totalCost) || totalCost < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    if (isNaN(months) || months < 0) {
      return `Параметр "срок ипотеки" содержит неправильное значение ${countMonths}`;
    }
    let body = totalCost - initPay;
    let pay = body * (rate + rate / (((1 + rate) ** months) - 1));
    let totalAmount = (pay * months).toFixed(2);
    return +totalAmount;
  }
}
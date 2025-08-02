"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let x = -b / (2 * a);
  } else {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }

 return arr;
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rate = parseInt(percent) / 100 / 12; //процентная ставка
  let initPay = parseInt(contribution); //первоначальный взнос
  let totalCost = parseInt(amount); //общая стоимость
  let months = parseInt(countMonths); // срок кредита в месяцах

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
    let body = totalCost - initPay; //тело кредита
    let pay = body * (rate + rate / (((1 + rate) ** months) - 1)); //ежемесячная оплата
    let totalAmount = (pay * months).toFixed(2);
    console.log(totalAmount);
    return +totalAmount;
  }
}
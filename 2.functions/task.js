function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  if (num < min) {
    min = num;
  }

  if (num > max) {
    max = num;
  }

  sum = sum + num;
}

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}



function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
   if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }

  return sumEvenElement - sumOddElement;
  
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) return 0;

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr); 

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}

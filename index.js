// Массивы

const array = [-1, 0, 10, 4, 7, 200, 25];

// 1. Дан вектор A(n). Найти наибольшее из четных и количество нечетных элементов вектора.

function getMaxEven(arr) {
  return Math.max(...arr.filter((el) => Math.abs(el % 2) === 0));
}

function getLengthOdd(arr) {
  return arr.filter((el) => Math.abs(el % 2) === 1).length;
}

console.log(getMaxEven(array));
console.log(getLengthOdd(array));

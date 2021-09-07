// дано положительное целое число. Дана степень (89,1)
// степень увеличивается с каждым разрядом числа +1 пр. 8**1 + 9 ** 2 перебирая каждый символ в 89
// резульат надо поделить на исходное число, если получем целое то возвращаем число, нет возвращаем -1

function digPow(number, pow) {
  let array = number.toString().split('');

  let i = 0;
  let result = 0;

  do {
    result += Math.pow(array[i], pow);

    pow++;
    i++;
  } while (i < array.length);

  const anotherResult = result / number;

  if (result % number === 0) {
    return anotherResult;
  }
  return -1;
}

// function digPow(number, pow) {
//   for (let i = (result = 0); i < number.toString().length; i++) {
//     result += Math.pow(number.toString()[i], i + pow);
//   }
//   return result % number === 0 ? result / number : -1;
// }

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));

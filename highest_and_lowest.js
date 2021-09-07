// в строке необходимо найти самое маленькое и самое большое число
// ("1 2 3 4 5")

function highAndLow1(numbers) {
  let min = null;
  let max = null;

  numbers.split(' ').forEach((number) => {
    const int = parseInt(number);

    if (int < min || min === null) {
      min = int;
    }
    if (int > max || max === null) {
      max = int;
    }
  });

  return `${min} ${max}`;
}

function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}

console.log(highAndLow('1 2 3 4 5 25'));

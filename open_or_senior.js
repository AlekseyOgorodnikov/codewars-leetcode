// Имеется массив массивов. Необходимо определить возраст seior и его handicap в соответствии условию
// возыраст недолжен быть больше 55 для senior и handicap от -2 до +26, остальное open
// [[18,20],[45,2],[61,12],[37,6],[21,21],[78,9]]
// вернуть массив ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior']

function openOrSenior(data) {
  return data.map((item) => {
    const [ageCondition, handicap] = item;

    if (ageCondition >= 55 && handicap > 7) {
      return 'Senior';
    }

    return 'Open';
  });
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);

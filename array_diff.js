// arrayDiff([1,2],[1]) arrayDiff([1,2,2,2,3],[2])
// It should remove all value from list a,which are present in list b keeping their order.

function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2], [1]));

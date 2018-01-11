function range(start, end, step) {
  var array = [];
  if (step == undefined && end - start > 0) {
    step = 1;
  }
  if (step == undefined && end - start < 0) {
    step = -1;
  }
  length = Math.ceil((Math.abs(end - start) + 1) / Math.abs(step));
  array[0] = start;
  for (var i = 1; i < length; i++) {
    array[i] = start + step;
    start += step;
  }
  return array;
}

function sum(array) {
  var sumResult = 0;
  for (var i = 0; i < array.length; i++) {
     sumResult += array[i];
  }
  return sumResult;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(5, 2));
console.log(range(5, 2, -2));
console.log(sum(range(1, 10)));
function deepEqual(x, y) {
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    var xLength = 0;
    var yLength = 0;
    for (var propertyX in x) {
      xLength++;
    }
    for (var propertyY in y) {
      yLength++;
    }
    if (xLength !== yLength)
      return false;
    else {
      for (var propertyX in x) {
        if(!y.hasOwnProperty(propertyX)) {
          return false;
          break;
        }
      }
      for (var propertyX in x) {
        if (!deepEqual(x[propertyX], y[propertyX])) {
          return false;
          break;
        }
      }
      return true;
    }
  }
  else
    return x === y;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
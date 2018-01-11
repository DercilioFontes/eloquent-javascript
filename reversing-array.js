function reverseArray(array) {
  var newArray = [];
  var indexNewArray = 0;
  for (var i = array.length - 1; i >= 0; i--) {
    newArray[indexNewArray] = array[i];
    indexNewArray++;
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  var auxElement = 0;
  var auxIndex = 0;
  for (var i = array.length - 1; i > auxIndex; i--) {
    auxElement = array[auxIndex];
    array[auxIndex] = array[i];
    array[i] = auxElement;
    auxIndex++;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
function arrayToList(array) {
  var list = {
    value: array[array.length - 1], // last element
    rest: null
  };

  // start with second-to-last
  for (var i = array.length - 2; i >= 0; i--) {
    list = prepend(array[i], list);
  }
  return list;
}


function listToArray(list) {
  var array = [];
  var index = 0;
  while (list.rest !== null) {
    array[index] = list.value;
    index++;
    list = list.rest;
  }
  if (list.rest === null) {
    array[index] = list.value;
  }
  return array;
}

/*
// for loop specification: for (var node = list; node; node = node.list) {}
function listToArray(list) {
  var array = [];
  var index = 0;
  for (var node = list; node; node = node.rest) {
    array[index] = node.value;
    index++;
  }
  return array;
}
*/

function prepend(element, list) {
  var newList = {
    value: element,
    rest: list
  };
  return newList;
}

function nth(list, index) {
  var element;
  for (var i = 0; i <= index; i++) {
    if (list.rest === null && i < index) {
      return undefined;
    } else {
      element = list.value;
    }
    list = list.rest;
  }
  return element;
}

/*
// The recursive version of nth function. Reference: https://stackoverflow.com/questions/33622059/return-nth-element-in-a-list-eloquent-javascript-4-3
function nth(list, index) {
   if(!list)
    return undefined;
  else if (index === 0)
    return list.value;
  else
    return nth(list.rest, index - 1);
}
*/

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
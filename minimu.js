function min(numA, numB) {
  if (numA <= numB) {
    return numA;
  } else {
    return numB;
  }
}

console.log(min(0, 10));
console.log(min(0, -10));
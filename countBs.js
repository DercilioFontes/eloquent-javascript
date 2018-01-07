function countBs(string) {
  var numBs = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      numBs++;
    }
  }

  return numBs;
}

console.log(countBs("BBC"));

//###

function countChar(string, char) {
  var numChars = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      numChars++;
    }
  }

  return numChars;
}

console.log(countChar("kakkerlak", "k"));
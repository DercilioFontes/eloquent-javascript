var numSide = 8;
var stringResult = "";
for (var i = 0; i < numSide; i++) {
  if (i % 2 === 0) {
    for (var j = 0; j < numSide; j++) {
      if (j % 2 === 0) {
      stringResult += " ";
      } else {
      stringResult += "#";
      }
    }
    stringResult += "\n";
  } else {
    for (var j = 0; j < numSide; j++) {
      if (j % 2 === 0) {
      stringResult += "#";
      } else {
      stringResult += " ";
      }
    }
    stringResult += "\n";
  }
}
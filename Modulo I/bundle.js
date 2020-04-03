"use strict";

function subtracao() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return x - y;
}

console.log(subtracao(4));
console.log(subtracao());

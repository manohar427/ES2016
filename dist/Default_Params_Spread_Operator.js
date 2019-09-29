"use strict";

function abc() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Manohar S";

  console.log(name);
}

abc();

var a = [1, 2, 3];
var b = [1, 2, 3];
function def() {
  console.log(a + "," + b);
}

//def(...a,...b); - ES6
def.apply(null, a, b); //ES5
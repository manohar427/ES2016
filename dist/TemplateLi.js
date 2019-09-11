'use strict';

var name = 'Manohar';

function upperCase(name) {
  return name.toUpperCase();
}
var template = 'I am from Bangalore\n\nMy name is ' + upperCase('hi') + name;

console.log(template);
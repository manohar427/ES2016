/*var myset = new Set();
myset.add(12);
myset.add(13);
myset.delete(12)

console.log(myset);
console.log(myset.size);*/


/*var wset = new WeakSet()
var x = {};
wset.add(x)
wset.add(new Date())
x = {'x':'Y'}
console.log(wset);
console.log(wset.has(x));*/

/*
var myMap = new Map();
myMap.set(2,4);

console.log(myMap);
*/

var mywMap = new WeakMap();
//mywMap.set(2,4);
mywMap.set({},4);

console.log(mywMap);

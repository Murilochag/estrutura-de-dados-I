// @ts-check
/* eslint-disable */

function testTruthy(val) {
  return val ? console.log('truthy') : console.log('falsy'); // se val for true entao imprime truthy e se for false imprime falsy
}

testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (object is always true)

testTruthy(''); // false
testTruthy('a'); // true
testTruthy('Packt'); // true
testTruthy(new String('')); // true (object is always true)

testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (object is always true)

testTruthy({}); // true (object is always true)

var obj = { name: 'John' };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // false (property is undefined)

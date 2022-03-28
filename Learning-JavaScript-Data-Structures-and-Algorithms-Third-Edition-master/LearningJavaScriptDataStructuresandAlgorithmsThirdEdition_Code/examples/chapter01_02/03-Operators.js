// @ts-check
/* eslint-disable */

/* Arithmetic operators */
console.log('- Arithmetic operators');
var num = 0; // {1}
console.log('var num = 0; => ' + num);

num = num + 2;
console.log('num = num + 2; => ' + num);

num = num * 3;
console.log('num = num * 3; => ' + num);

num = num / 2;
console.log('num = num / 2; => ' + num);

num++;
num--;
console.log('num++; num--; => ' + num);

console.log('num % 2; => ' + num % 2);

/* Assignment operators */
console.log('- Assignment operators');
console.log('num += 1; num -= 2; num *= 3; num /= 2; num %= 3;');
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;
console.log('New num value is ' + num);

/*Comparison operators */
console.log('- Comparison operators');
console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

/* Logical operators */
console.log('- Logical operators');
console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + !true);

/* Bitwise operators */
console.log('- Bitwise operators');
console.log('5 & 1:', 5 & 1); // same as 0101 & 0001 (result 0001 / 1)
console.log('5 | 1:', 5 | 1); // same as 0101 | 0001 (result 0101 / 5)
console.log('~ 5:', ~5); // same as ~0101 (result 1010 / 10)
console.log('5 ^ 1:', 5 ^ 1); // same as 0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', 5 << 1); // same as 0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', 5 >> 1); // same as 0101 >> 1 (result 0010 / 2)

/* typeOf */
console.log('- typeof');
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name:John}:', typeof { name: 'John' });

/* delete */
console.log('- delete');
console.log('var myObj = { name: John, age: 21 }; delete myObj.age');
var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj); // Object {name: "John"}

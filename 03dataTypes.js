'use strict';

//Total 7 Primitive Data Types :
// string
// number
// boolean
// undefined
// null
// bigInt
// symbol

//Total 3 Non Primitiuve (Reference) Data Type :
// array
// object
// regExp

// primitive vs reference data type :

// primitive type example :
// let num1 = 6;
// let num2 = num1;
// console.log(`The value of num1 is ${num1}`);
// console.log(`The value of num2 is ${num2}`);
// num1++;
// console.log(('After incrementing num1'));
// console.log(`The value of num1 is ${num1}`);
// console.log(`The value of num2 is ${num2}`);

// reference type example :
// let array1 = ['item1', 'item2'];
// let array2 = array1;
// console.log(array1);
// console.log(array2);
// array1.push('item3');
// console.log('after adding item in array1');
// console.log(array1);
// console.log(array2);

// let x = 6;
// console.log(typeof x);
// x = 6 + '';
// console.log(typeof x);
// let y = + '2';
// console.log(typeof y);
// let z = + 'apple';
// console.log(typeof z);

// let x = 5;
// console.log(typeof x);
// x = String(x);
// console.log(typeof x);
// x = Number(x);
// console.log(typeof x);

// on Terminal or console, Number display in yellow color & String display in white color.

// let firstName = 'Nitesh';
// let lastName = 'Rai';
// console.log(firstName + ' ' + lastName);

// let x = '5';
// let y = '6';
// let z = x + y;
// console.log(z);

// let x = '5';
// let y = 6;
// let z = x + y;
// console.log(z);

// let x = 5;
// let y = '6';
// let z = x + y;
// console.log(z);

// let x = '5';
// let y = '6';
// let z = +x + +y;
// console.log(z);

// let x = '5';
// let y = '6';
// let z = Number(x) + Number(y);
// console.log(z);

// console.log('Nitesh' + 1 + 2);
// console.log(5 - 'Nitesh' + 2);
// console.log(5 - '6' + 7);

// const firstName; Error: 'const' declarations must be initialized.

// let firstName;
// console.log('My first name is ' + firstName + '.');
// firstName = 'John';
// console.log(`My first name is ${firstName}.`);

// var firstName;
// console.log('My first name is ' + firstName + '.');
// firstName = 'John';
// console.log(`My first name is ${firstName}.`);

// let firstName = null;
// console.log(firstName, typeof firstName);
// typeof null gives result as 'object', but it is null actually, so this is a bug / error in javascript.

// console.log(Number.MAX_SAFE_INTEGER);
// console.log((Number.MIN_SAFE_INTEGER));

// let x = 5 + '';
// console.log(x.length);
// let data = Number.MAX_SAFE_INTEGER + '';
// console.log(data.length);
// let data2 = String(Number.MAX_SAFE_INTEGER);
// console.log(data2.length);

// let num1 = BigInt(12);
// console.log(num1);
// let num2 = 15n;
// console.log(num2);
// console.log(num1 + num2);
// let num3 = 10;
// console.log(num2 + num3);
// TypeError: Cannot mix BigInt and other types, use explicit conversions;

// let num1 = 5;
// let num2 = 10;
// console.log(num1 < num2);
// console.log(num2 < num1);

// let num1 = 5;
// let num2 = '5';
// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);

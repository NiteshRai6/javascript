'use strict';

// Function Declaration :
// function add(a, b) {
//     return a + b;
// }
// const sum = add(4, 5);
// console.log(sum);

// function isEven(n) {
//     return n % 2 === 0;
// }
// console.log(isEven(7));
// console.log(isEven(6));

// function firstChar(anyString) {
//     return anyString[0];
// }
// console.log(firstChar('john'));

// function expression :
// const firstChar = function (anyString) {
//     return anyString[0];
// }
// console.log(firstChar('john'));

// Q> Output : Index of target, if target present in array.
// function findTarget(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1, 5, 7, 89, 65];
// const test = findTarget(myArray, 7);
// console.log(test);

// Arrow function : for 1 parameter, no need of (), no return required for single one line execution, no {} required.
// const firstChar = anyString => {
//     return anyString[0];
// }
// console.log(firstChar('john'));

// const add = (a, b) => {
//     return a + b;
// }
// const sum = add(4, 5);
// console.log(sum);

// const add = (a, b) => a + b;
// const sum = add(4, 5);
// console.log(sum);

//  Hoisting : function declaration support hoisting & so it can be called before declaration.
//  but arrow function & function expression does not support hoisting.
// const result = isEven(6);
// console.log(result);
// function isEven(n) {
//     return n % 2 === 0;
// }

// var support hoisting for declaration only, not initialization
// Error :'const' declarations must be initialized.
// test = 'Hello';
// console.log(test);
// const test;

// ReferenceError: Cannot access 'test' before initialization
// test = 'Hello';
// console.log(test);
// let test;

// let test;
// test = 'Hello';
// console.log(test);

// test = 'Hello';
// console.log(test);
// var test;

// Lexical Environment :
// const myVar = 'Hello';
// function outerFun() {
//     console.log('Outer Function');
//     function innerFun1() {
//         console.log('Inner Function1', myVar);
//     }
//     function innerFun2() {
//         console.log('Inner Function2');
//     }
//     innerFun1();
//     innerFun2();
// }
// outerFun();

// block scope vs function scope :
// let & const are block scope, var is function/global scope.
// {
//     Block 1
// }
// {
//     Block 2
// }

// if (true) {
//     let name1 = 'selena';
//     const name2 = 'john';
//     var name3 = 'tom';
//     console.log(name1);
//     console.log(name2);
//     console.log(name3);
// }
// console.log(name1); ReferenceError: name1 is not defined. 
// console.log(name2); ReferenceError: name1 is not defined. 
// console.log(name3);

// default parameters :
// Perform Mathematical operations except numbers gives NaN.
// const add = (a = 0, b = 0) => a + b;
// console.log(add(4, 5));
// console.log(add(4));
// console.log(add());

// rest parameters : ... gives rest argument as array.
// function value(a, b, ...c) {
//     console.log('a is', a);
//     console.log('b is', b);
//     console.log('c is', c);
// }
// value(1, 2, 3, 4, 5);

// function addAll(...numbers) {
//     let total = 0;
//     for (let n of numbers) {
//         total = total + n;
//     }
//     return total;
// }
// console.log(addAll(1, 2, 3, 4, 5));

// Parameter Destructuring with Object : specially in React.
// const person = {
//     name: 'John',
//     age: 25,
//     city: 'Delhi'
// }
// function details({ name, age }) {
//     console.log(name);
//     console.log(age);
// }
// details(person);

// callback function :
// function test(name) {
//     console.log('Test function');
//     console.log(`Your name is ${name}`);
// }
// function mainFun(callback) {
//     console.log('Main Function');
//     callback('John');
// }
// mainFun(test);

// function add(a, b, cb) {
//     cb(a, b);
// }
// add(5, 8, (a, b) => {
//     console.log(a + b);
// })

// function returning function :
// Higher Order Function (HOF) can take another function as input(parameter), & can return anotrher function.
// The function that is taken as input(parameter) or it is returned by function, called Callback Function.
// function myFun() {
//     function test() {
//         console.log('by log');
//         return 'Hello';
//     }
//     return test;
// }
// const ans = myFun();
// const returnValue = ans();
// console.log(returnValue); 

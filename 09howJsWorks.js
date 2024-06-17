// How JS works :
// EcmaScript recommend before execution : 
// 1. Early Error Checking & 2. Determining Appropriate scope for variables.

// Compilation :
// 1. Tokenizing / Lexing : Breaks code in small junks called tokens.
// 2. Parsing : Understand tokens & create Abstract Syntax Tree (AST).
// 3. Code Generation

// Code Execution Phase :
// Code executes inside : Global Execution Context - Creation Phase & Code Execution Phase.

// In browser, 'this' refers to window object (Global Object).

//by default,  JS is synchronous & single threaded programming language, means code executes line by line, 
// after execution of 1st line, 2nd line execution start.
// Browser provide Asynchronous approach in JS.

// Hoisting : a variable can be used before it has been declared.
// JavaScript only hoists declarations, not initializations.
// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// console.log(userName);
// let userName = 'John';
// ReferenceError: Cannot access 'userName' before initialization

// console.log(userName);
// const userName = 'John';
// ReferenceError: Cannot access 'userName' before initialization

// console.log(userName);
// var userName = 'John';
// undefined

// Lexical Environment & Scope Chain :
// const lastName = 'Rai';
// const printName = function () {
//     const firstName = 'Nitesh';
//     function innerFunction() {
//         console.log(firstName, lastName);
//     }
//     innerFunction();
// }
// printName();

// Closure :
// function outerFunction(power) {
//     return function innerFunction(number) {
//         return number ** power;
//     }
// }
// const outerFunction = power => number => number ** power;
// const cube = outerFunction(3);
// const ans = cube(5);
// console.log(ans);

//Closure Example :
// function outerFunction() {
//     let counter = 0;
//     return function () {
//         if (counter < 1) {
//             console.log('You called me!');
//             counter++;
//         }
//         else {
//             console.log('You called me again!');
//         }
//     }
// }
// const ans = outerFunction();
// const ans2 = outerFunction();
// ans();
// ans();
// ans2();

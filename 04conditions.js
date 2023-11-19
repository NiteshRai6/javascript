'use strict';

// Falsy Values :
// false
// ''
// null
// undefined
// 0

// Except these falsy values, all values are Truthy values.

// if ('') {
//     console.log('Bye');
// }
// else {
//     console.log('Hi');
// }

// if (false) {
//     console.log('Bye');
// }
// else {
//     console.log('Hi');
// }

// if (0) {
//     console.log('Bye');
// }
// else {
//     console.log('Hi');
// }

// if (8) {
//     console.log('Bye');
// }
// else {
//     console.log('Hi');
// }

// if ('John') {
//     console.log('Bye');
// }
// else {
//     console.log('Hi');
// }

// if-else
// let age = 16;
// let drink;
// if (age >= 18) {
//     drink = 'Coffee'
// }
// else {
//     drink = 'Milk'
// }
// console.log(drink);

// Ternary operator :
// let age = 16;
// let drink = age >= 18 ? 'Coffee' : 'Milk';
// console.log(drink);

// && , || operators :
// let firstName = 'Nitesh';
// let age = 18;
// if (firstName[0] === 'N' && age >= 18) {
//     console.log('User found');
// }
// else {
//     console.log('No user');
// }

// let firstName = 'Nitesh';
// let age = 18;
// if (firstName[0] === 'N' || age < 16) {
//     console.log('User found');
// }
// else {
//     console.log('No user');
// }

// nested if-else :
// prompt always gives String, so changed it to Number by adding prefix +;
// let winningNumber = 10;
// let userGuess = +prompt('Guess a number');
// if (userGuess === winningNumber) {
//     console.log('Your guess is right!');
// }
// else {
//     if (userGuess < winningNumber) {
//         console.log('Your guess is low!');
//     }
//     else {
//         console.log('Your guess is high!');
//     }
// }

// while loop :
// let i = 0;
// let total = 0;
// while (i <= 10) {
//     total = total + i;
//     i++;
// }
// console.log(total);

// Math Formula : Faster than while loop.
// let num = 10;
// let total = (num * (num + 1)) / 2;
// console.log(total);

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let i = 0
// for (; i <= 10; i++) {
//     console.log(i);
// }

// let total = 0;
// let num = 10;
// for (let i = 0; i <= num; i++) {
//     total = total + i;
// }
// console.log(total);

// break stop the execution from given condition.
// for (let i = 1; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }
// console.log('After loop block');

// continue skip that excution only on given condition.
// for (let i = 1; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }
// console.log('After loop block');

// let i = 10;

// while (i <= 9) {
//     console.log(i);
// i++;
// }

// do {
//     console.log(i);
//     i++;
// }
// while (i <= 9);

// let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let count = 4;
// switch (count) {
//     case 1:
//         console.log(`Today is ${day[0]}.`);
//         break;

//     case 2:
//         console.log(`Today is ${day[1]}.`);
//         break;

//     case 3:
//         console.log(`Today is ${day[2]}.`);
//         break;

//     case 4:
//         console.log(`Today is ${day[3]}.`);
//         break;

//     case 5:
//         console.log(`Today is ${day[4]}.`);
//         break;

//     case 6:
//         console.log(`Today is ${day[5]}.`);
//         break;

//     case 7:
//         console.log(`Today is ${day[6]}.`);
//         break;

//     default:
//         console.log('Not a weekday!');
// }


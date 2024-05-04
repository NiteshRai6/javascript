'use strict';

// Array is ordered collection of items.
// let fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits);
// fruits[1] = 'Grapes';
// console.log(fruits);

// Array is also an object.
// let fruits = ['Apple', 'Banana', 'Orange'];
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// let obj = {};
// console.log(Array.isArray(obj));

// let count = [1, 2, 3];
// console.log(count);

// const mixed = [1, 'John', undefined, null, true];
// console.log(mixed);

// Arrays are mutuable, menas original array can be modified.
// let fruits = ['Apple', 'Banana', 'Orange'];

// push : add element in last index.
// fruits.push('Lemon');
// console.log(fruits);

// pop : remove & return the element.
// push &  pop follows, LIFO : Last In First Out.
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log(poppedFruit);

// unshift : add element in start
// fruits.unshift('Papaya');
// console.log(fruits);

// shift : remove element from start
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log(removedFruit);

// Note : push &  pop follows, LIFO : Last In First Out.
// Note : unshift &  shift follows, FIFO : First In First Out.
// Note : push & pop are faster than shift & unshift cause of memory allocation.

// let array1 = ['item1', 'item2'];
// let array2 = array1;
// console.log(array1);
// console.log(array2);
// array1.push('item3');
// console.log('after adding item in array1');
// console.log(array1);
// console.log(array2);

// To clone array :
// let array1 = ['item1', 'item2'];
// Same memory location :
// let array2 = array1;

// Different memory location :
// let array2 = array1.slice(0);
// let array2 = [].concat(array1, ['item3', 'item4']);
// let array2 = array1.slice(0).concat(['item3', 'item4']);
// let array2 = [...array1];
// let array2 = [...array1, 'item3', 'item4'];

// console.log(array1);
// console.log(array2);

// Note : slice method is faster than spread method but spread is most used by developers, specially in React.

// array1.push('item5');
// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// let array1 = ['a', 'b', 'c'];
// let array2 = ['d', 'e', 'f'];
// let array3 = [...array1, ...array2];
// console.log(array3);
// let array4 = array1.slice(0).concat(array2.slice(0));
// console.log(array4);
// let array5 = [].concat(array1, array2, 'data')
// console.log(array5);

// const fruits = ['Apple', 'Banana', 'Orange'];
// const fruits2 = [];
// for (let i = 0; i < fruits.length; i++) {
//     fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);

// Array defined with let can be reassigned but const can't. Recommonded to use const to defined the array.

// let fruits = ['Apple', 'Banana', 'Orange'];
// fruits = [];
// console.log(fruits);

// const fruits = ['Apple', 'Banana', 'Orange'];
// fruits = [];
// console.log(fruits);
// TypeError: Assignment to constant variable.

// for :
// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array?.length; i++) {
//     console.log(array[i]);
// }

// for of : iterate in array & gives values.
// let fruits = ['Apple', 'Banana', 'Orange'];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// for in : iterate in array & gives indexes.
// let fruits = ['Apple', 'Banana', 'Orange'];
// for (let index in fruits) {
//     console.log(index);
// }

// Array destructuring :
// let myArray = ['value1', 'value2', 'value3', 'value4'];

// let myAr1 = myArray[0];
// let myAr2 = myArray[1];
// console.log(myAr2);

// use , to skip the index.
// let [myAr1, , myAr2] = myArray;

// let [myAr1, myAr2, ...myNewAr] = myArray;
// slice cut the array & gives result from given index.
// let myNewAr = myArray.slice(2);

// console.log(`The value of myAr1 = ${myAr1}`);
// console.log(`The value of myAr2 = ${myAr2}`);
// console.log(`The value of myNewAr= ${myNewAr}`);

// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

// Array Methods - forEach, map, filter, reduce :
// const numbers = [1, 5, 6, 9];
// forEach :
// function myFun(number, index) {
//     console.log(`Index is ${index} and Number is ${number}`);
// }
// for (let i = 0; i < numbers.length; i++) {
//     myFun(numbers[i], i);
// }
// numbers.forEach(myFun);
// forEach returns callback.
// numbers.forEach(function (number, index) {
//     console.log(`Index is ${index} and Number is ${number}`);
// });

// const users = [
//     { name: 'John', age: 25 },
//     { name: 'Selena', age: 32 },
//     { name: 'Tom', age: 18 }
// ];
// users.forEach(user => (
//     console.log(user.name)
// ));
// for (let user of users) {
//     console.log(user.name);
// }

// map :
// const numbers = [2, 3, 6, 8];
// const square = numbers.map(number => {
//     return number * number
// });
// console.log(square);
// const userName = users.map(user => {
//     return user.name;
// });
// console.log(userName);

// filter :
// const numbers = [2, 3, 6, 8];
// const even = numbers.filter(number => {
//     return number % 2 === 0;
// });
// console.log(even);

// reduce :
// const numbers = [2, 3, 6, 8];
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 100);
// console.log(sum);
// Reduce Real Example :
// const userCart = [
//     { productId: 1, productName: 'iPhone', price: 89000 },
//     { productId: 2, productName: 'TV', price: 5000 },
//     { productId: 3, productName: 'Fridge', price: 23000 }
// ];
// const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price;
// }, 0);
// console.log(totalAmount);

// const data = [2, 4, 6, 8];
// const sum = data.reduce((accumulator, number) => {
//     return accumulator + number
// }, 0);
// console.log(sum);

// Sort : based on ASCI code, sort anything as String.
// ASCI Code => 0 : 48 & 9 : 57, A : 65 & Z : 90, a : 97 & z : 122.
// const numbers = [28, 100, 67, 2];
// const sorted = numbers.sort();
// console.log(sorted);

// const names = ['john', 'selena', 'tom', 'jenifer', 'Zen'];
// const sortedNames = names.sort();
// console.log(sortedNames);
// Ascending Order Sorting : a - b; Descending Order Sorting : b - a;
// const numbers = [28, 100, 67, 2];
// const sortedNum = numbers.sort((a, b) => a - b);
// console.log(sortedNum);

// const userCart = [
//     { productId: 1, productName: 'iPhone', price: 89000 },
//     { productId: 2, productName: 'TV', price: 5000 },
//     { productId: 3, productName: 'Fridge', price: 23000 }
// ];
// changed the original array, to create new array on the basis of original array, use slice with sort.
// userCart.sort((a, b) => a.price - b.price);
// console.log(userCart);

// const sorted = userCart.slice(0).sort((a, b) => a.price - b.price);
// console.log(sorted);
// console.log(userCart);

// const sorted = [...userCart].sort((a, b) => a.price - b.price);
// console.log(sorted);
// console.log(userCart);

// find() method :
// const userCart = [
//     { productId: 1, productName: 'iPhone', price: 89000 },
//     { productId: 2, productName: 'TV', price: 5000 },
//     { productId: 3, productName: 'Fridge', price: 23000 }
// ];
// const findCart = userCart.find(user => user.productId === 2);
// console.log(findCart);

// every() method check given condition on each element of array.
// const numbers = [2, 4, 6, 8];
// const isEven = numbers.every(number => number % 2 === 0);
// console.log(isEven);

// const checkPrice = userCart.every(cartItem => cartItem.price < 90000);
// console.log(checkPrice);

// some() method, check that any element in array fullfill the given condition.
// const numbers = [2, 4, 5, 8];
// const isAnyOdd = numbers.some(number => number % 2 === 1);
// console.log(isAnyOdd);

// fill() method, fill element on the basis of given condition & change the original array => value, startIndex, endIndex :
// const array1 = new Array(5).fill(2);
// console.log(array1);

// const array2 = [1, 2, 5, 7, 88, 66];
// array2.fill(0, 2, 4)
// console.log(array2);

// splice() => startIndex, delete, insert : use to delete & insert in mid of the array.
// const array1 = ['item1', 'item2', 'item3', 'item4', 'item5'];
// const deletedItem = array1.splice(1, 2);
// console.log(deletedItem);
// array1.splice(1, 2, 'insertedItem');
// console.log(array1);

// itereables => only String, Array, Set & Map are iterable and object is not : aplly for of loop.
// for (let item of array1) {
//     console.log(item);
// }

// array like object => string & Set : having length property & can be access by index.
// const userName = 'Nitesh';
// console.log(userName.length, userName[2]);

// Set : store unique iterable data => string & array, no duplicates allowed, 
// no index - based so order is not guranteed, Set have its own methods, typeof Array & Set is object.
// const numbers = new Set([1, 2, 3]);
// console.log(numbers, typeof numbers);

// const items = new Set(['item1', 'item2', 'item3', 'item4', 'item5']);
// items.add(5);
// console.log(items);
// if (items.has(5)) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// for (let i of items) {
//     console.log(i);
// }

// const myArray = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// const mySet = new Set(myArray);
// console.log(mySet);
// let length = 0;
// for (let item of mySet) {
//     length++
// }
// console.log(length);

// const myArray = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// const mySet = new Set(myArray);
// console.log(mySet);
// const newAr = new Array(mySet);
// console.log(newAr);

// Map : key, value pairs like object, but object keys must be a String or Symbol type, but Map key can be anything.
// stored data in Ordered fashion.
// Duplicate keys are not allowed in Map.
// const user = { name: 'John', age: 25, 1: 'Item' };
// for (let key in user) {
//     console.log(key, typeof key);
// }

// const user = new Map();
// user.set('name', 'John');
// user.set('age', 25);
// user.set(1, 'item');
// user.set([1, 2, 3], 'data');
// user.set({ city: 'Delhi' }, 'Town');
// console.log(user);
// for (let key of user.keys()) {
//     console.log(key, typeof key);
// }
// for of loop returns array in Map.
// for (let key of user) {
//     console.log(key, Array.isArray(key));
// }
// for (let [key, value] of user) {
//     console.log(key, value);
// }
// const person = new Map([
//     ['Id', 1],
//     ['city', 'Delhi'],
//     [5, true]
// ]);
// console.log(person);

// const person1 = { id: 1, name: 'John' };
// const extraInfo = new Map();
// extraInfo.set(person1, { age: 25, gender: 'Male' });
// console.log(extraInfo.get(person1).gender);
// arrays are good but not sufficient for real world data.
// object stores key value pairs. object don't have index. object is reference type.

//create object - object literal : keys are always String or Symbol.
// const person = { name: 'John', age: '25' };
// console.log(person, typeof person);

// access data from object :
// console.log(person.name);

// const person = {
//     name: 'Selena',
//     age: '32',
//     hobbies: ['cricket', 'music', 'travel'],
//     'home address': 'Delhi'
// };

// add key value pair to object :
// person.gender = 'Male';
// console.log(person);
// object keys is always a string, by default & without quotes also :
// console.log(person['name']);
// console.log(person.name);

// console.log(person.hobbies);
// dot vs bracket notation, space bw key not allowed in dot notation.
// console.log(person['home address']);

// const key = 'email';
// person[key] = 'test@gmail.com';
// console.log(person);

// for in loop :
// for (let key in person) {
//     console.log(person[key]);
// }

// for (let key in person) {
//     console.log(`${key} : ${person[key]}`);
// }

// Question :
// const key1 = 'objkey1';
// const key2 = 'objkey2';
// const value1 = 'myvalue1';
// const value2 = 'myvalue2';

// Object.keys method :
// keys = Object.keys(person)
// console.log(keys);
// console.log(typeof keys);
// console.log(Array.isArray(keys));

// for (let key of Object.keys(person)) {
//     console.log(`${key} : ${person[key]}`);
// }


// computed properties :
// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);

// const obj = {
//     [key1]: value1,
//     [key2]: value2
// }
// console.log(obj);

// spread operator in arrays :
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray1 = [...array1, ...array2, 10, 20, 'john'];
// console.log(newArray1);
// const newArray2 = [...'john'];
// console.log(newArray2);

// object can have only 1 unique key, similar key will be override by last value.
// const obj = {
//     key1: 1,
//     key2: 2,
//     key1: 23
// }
// console.log(obj);

// spread operator in object :
// const obj1 = {
//     key1: 'value1',
//     key2: 'value2',
// }

// const obj2 = {
//     key1: 'valueNew',
//     key3: 'value3',
//     key4: 'value4'
// }
// const newObj = { ...obj1, ...obj2 }
// console.log(newObj);

// const newObj2 = { ...['item1', 'item2'], ...obj1 }
// console.log(newObj2);

// const newObj3 = { ...'abcdefghijklmnopqrstuvwxyz' };
// console.log(newObj3);

// object cloning :
// const obj1 = { key1: 'value1', key2: 'value2' };
// const obj2 = obj1;
// obj1.key3 = 'value3';
// console.log(obj1);
// console.log(obj2);

// clonning way 1:
// const obj1 = { key1: 'value1', key2: 'value2' };
// const obj2 = { ...obj1 };
// obj1.key3 = 'value3';
// console.log(obj1);
// console.log(obj2);

// clonning way 2 :
// const obj1 = { key1: 'value1', key2: 'value2' };
// const obj2 = Object.assign({}, obj1);
// obj1.key3 = 'value3';
// console.log(obj1);
// console.log(obj2);

// optional chaining => ?. :
// const user = { name: "Selena" };
// console.log(user.name);
// TypeError: Cannot read properties of undefined(reading 'city')
// console.log(user.address.city);
// console.log(user?.address?.city);

// object destructuring :
// const user = {
//     name: 'john',
//     age: 26,
//     city: 'Delhi',
//     country: 'India'
// }

// const userName = user.name;
// console.log(userName);

// const { name, age, ...restProps } = user;
//  console.log(name, age);
// console.log(restProps);

// objects inside array :
// const users = [
//     { userId: 1, name: 'John', age: 26 },
//     { userId: 2, name: 'Selena', age: 24 },
//     { userId: 3, name: 'Taylor', age: 18 },
// ];
// console.log(users);

// for (let user of users) {
//     console.log(user);
// }

// Nested Destructuring :
// const [{ name: user1Name, }, , { age: user3Age }] = users;
// console.log(user1Name, user3Age);

// JSON vs JavaScript Object
// JSON key in key / value pair should be in double quotes.
// Object key in key / value pair can be without double quotes.
// JSON cannot contain functions.
// JavaScript objects can contain functions.
// JSON can be created and used by other programming languages.
// JavaScript objects can only be used in JavaScript.

// Methods : Function inside objects.
// this => runtime object.
// function personInfo() {
//     console.log(`Person name is ${this.name} and Person age is ${this.age}.`);
// }
// const person1 = {
//     name: 'Selena',
//     age: 26,
//     about: personInfo
// }
// const person2 = {
//     name: 'Tom',
//     age: 18,
//     about: personInfo
// }
// person1.about();
// person2.about();

// const person = {
//     name: 'Tom',
//     age: 18,
//     about() {
//         console.log(`Person name is ${this.name} and Person age is ${this.age}.`);
//     }
// }
// person.about();

// window object :
// this or window => represent global window object in browser only.
// console.log(this);
// console.log(window);
// in browser, below function gives window object, but in strict mode : it gives undefined.
// function myFun() {
//     console.log(this);
// }
// window.myFun();

// function call, apply & bind.
// .call() : call argument hold this value. Means it refers to which Object.
// function about(city, country) {
//     console.log(`Person name is ${this.name}, age is ${this.age}, city is ${city} and country is ${country}.`);
// }
// const person1 = {
//     name: 'Selena',
//     age: 26,
// }
// const person2 = {
//     name: 'Tom',
//     age: 18,
// }
// about.call(person2, 'Delhi', 'India');

// apply() : similar to call(), only difference is, its argument passed as Array.
// about.apply(person2, ['Delhi', 'India']);

// bind)() : similar to call(), only difference is, it returns function.
// const myFun = about.bind(person2, 'Delhi', 'India');
// myFun();

// Arrow Function does not have its own 'this', its 'this' refers to window object.

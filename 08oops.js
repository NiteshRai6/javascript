'use strict';

// JS OOPS :

// __proto__ or [[prototype]] => reference of given object, difference from prototype.
// const obj1 = { key1: 'value1', key2: 'value2' };
// const obj2 = Object.create(obj1);
// obj2.key3 = 'value3';
// console.log(obj2);
// console.log(obj2.__proto__);

// prototype : function is also object, function gives free space that is empty object {}, called prototype.
// only function provide prototype property.
// function hello() {
//     console.log('hello');
// }
// console.log(hello.prototype);
// hello.prototype.key1 = 'value1';
// console.log(hello.prototype);
// hello.prototype.name = function () {
//     console.log('Name is john');
// }
// hello.prototype.name();

// function createUser(name, age) {
//     const user = Object.create(createUser.prototype);
//     user.name = name;
//     user.age = age;
//     return user;
// };
// createUser.prototype.about = function () {
//     return `User name is ${this.name} and user age is ${this.age} years.`
// };
// createUser.prototype.is18 = function () {
//     return this.age >= 18;
// }
// const user1 = createUser('John', 19);
// console.log(user1.about());
// console.log(`is18 ? : ${user1.is18()}`);

// const user2 = createUser('Selena', 16);
// console.log(user2.about());
// console.log(`is18 ? : ${user2.is18()}`);

//  new keyword : <1> create empty object, 'this' refers to empty object. <2> new keyword return 'this'.
// function createUser(name, age) {
//     this.name = name;
//     this.age = age;
// }
// createUser.prototype.about = function () {
//     return `${this.name} is ${this.age} years old.`
// }
// const user1 = new createUser('John', 25);
// console.log(user1);
// console.log(user1.about());
// console.log(Object.getPrototypeOf(user1));

// class :
// implemented internally same as above, but as class (in simple form).
// new keyword call constructor.
// class createUser {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     about() {
//         return `${this.name} is ${this.age} years old.`
//     }
// }
// const user1 = new createUser('John', 25);
// console.log(user1);
// console.log(user1.about());
// console.log(Object.getPrototypeOf(user1));

// Here createUser is Base Class & Student is Sub Class.
// class Student extends createUser {

// }
// const student1 = new Student('Selena', 25);
// console.log(student1);
// console.log(student1.about());
// console.log(Object.getPrototypeOf(student1));
// super call parent constructor.
// JS firstly check in current class, if any method not found then it find in Base Class.
// class Employee extends createUser {
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }
//     run() {
//         return `${this.name} is running at ${this.speed} km/h.`
//     }
// }
// const employee1 = new Employee('Selena', 25, 60);
// console.log(employee1);
// console.log(employee1.about());
// console.log(employee1.run());
// console.log(Object.getPrototypeOf(employee1));

// getters & setters : call methods as property - without parantheses () :
// class createUser {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     get about() {
//         return `${this.name} ${this.age}`
//     }
//     set about(about) {
//         const [name, age] = about.split(' ');
//         this.name = name;
//         this.age = age;
//     }
// }
// const user1 = new createUser('John', 25);
// console.log(user1.about);

// const user2 = new createUser('Selena', 28);
// user2.about = 'Selena2 25';
// console.log(user2);

// static methods & properties :
// Normal methods & properties call by object, but static methods & properties can be called only by class.
// class createUser {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     static city = 'Delhi';
//     static classMethods() {
//         return 'This is static method.'
//     }
//     about() {
//         return `${this.name} is ${this.age} years old.`
//     }
// }
// const user1 = new createUser('John', 25);
// console.log(user1);
// console.log(user1.about());
// console.log(createUser.classMethods());
// console.log(createUser.city);
// callback & HOC :
// Callback function is passed as argument to another function (HOC).
// Higher Order Function (HOC) takes another function (callback) as its argument.

// function multiply(a, b, cb) {
//     cb(a, b);
// }
// function cb(a, b) {
//     console.log(a * b);
// }
// multiply(4, 6, cb);

// function add(a, b, cb) {
//     cb(a, b);
// }
// add(5, 8, (a, b) => {
//     console.log(a + b);
// })

// setTimeOut :
// setTimeout(() => {
//     console.log('Wait');
// }, 2000);

// Promise :
// function getPromise() {
//     return new Promise((resolve, reject) => {
//         console.log('I am a promise');
//         resolve('success');
//     });
// }
// let promise = getPromise();
// promise.then((res) => {
//     console.log('promise fullfilled.', res);
// })

// function getPromise() {
//     return new Promise((resolve, reject) => {
//         console.log('I am a promise');
//         reject('network error');
//     });
// }
// let promise = getPromise();
// promise.catch((error) => {
//     console.log('promise rejected.', error);
// })
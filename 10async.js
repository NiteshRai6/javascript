// Asynchronous JavaScript :
// Synchronous Programming : Code executes line by line, so further code can be block.
// By default : JS is synchronous & single threaded programming language.

// setTimeout() :
// console.log('code 1');
// setTimeout(() => {
//     console.log('code 2');
// }, 3000);
// const id = setTimeout(() => {
//     console.log('code 3');
// }, 1000);
// setTimeout(() => {
//     console.log('code 4');
// }, 0)
// console.log('Clearning timeout of 1 sec.');
// clearTimeout(id);
// console.log('code 5');

// setInterval() :
// Random backgroundColor Project :
// const randomDiv = document.querySelector('.random');
// const stopButton = document.querySelector('.change-button');
// stopButton.textContent = "Stop Background Change"
// const currentColor = document.querySelector('.current-color');

// const intervalId = setInterval(() => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomColor = `rgb(${red}, ${green}, ${blue}`;
//     randomDiv.style.backgroundColor = randomColor;
// }, 1000);

// stopButton.addEventListener('click', () => {
//     clearInterval(intervalId);
//     currentColor.textContent = randomDiv.style.backgroundColor;
// });

// callback : goes to callback queue.
// 1.
// function test(cb) {
//     console.log('Main Function');
//     cb();
// }
// test(() => {
//     console.log('Callback function.');
// })
// 2.
// function add(num1, num2, onSuccess, onFailure) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         onSuccess(num1, num2);
//     }
//     else {
//         onFailure();
//     }
// }
// function cb1(num1, num2) {
//     console.log(num1 + num2);
// }
// function cb2() {
//     console.log('Wrong Data Type.');
// }
// add(5, '9', cb1, cb2);
// 3.
// function add(num1, num2, onSuccess, onFailure) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         onSuccess(num1, num2);
//     }
//     else {
//         onFailure();
//     }
// }
// add(5, 8, (num1, num2) => {
//     console.log(num1 + num2);
// }, () => {
//     console.log('Wrong Data Type.');
// });
// 1.
// setTimeout(() => {
//     console.log('Timeout 1');
// }, 1000);
// setTimeout(() => {
//     console.log('Timeout 2');
// }, 1000);
// setTimeout(() => {
//     console.log('Timeout 3');
// }, 1000);
// 2. Callback Hell :
// setTimeout(() => {
//     console.log('Timeout 1');
//     setTimeout(() => {
//         console.log('Timeout 2');
//         setTimeout(() => {
//             console.log('Timeout 3');
//         }, 1000);
//     }, 1000);
// }, 1000);

// Promise : Future Value.
// Promise State : pending,fullfilled,dailed
// Promise Method : resolve,reject

// Promise creation/ produce :
// Promise goes to Microtask queue.
// const array = [1, 2, 3, 4, 5];
// const data = new Promise((resolve, reject) => {
//     if (array.includes(2) && array.includes(5)) {
//         resolve('Success');
//     }
//     else {
//         reject('Error')
//     }
// });
// consume promise : Browser consumes Promises.
// data.then(result => {
//     console.log(result);
// }
// ).catch(error => {
//     console.error(error)
// }
// )
// First Micro Task queue executed then call back queue executed cause of priority.
//promise chaining : .then always return Promise.
// function myPromise() {
//     return new Promise((resolve, reject) => {
//         resolve('Apple');
//     })
// }
// myPromise().then(value => {
//     console.log(value);
//     value += ' Mango';
//     return value;
// })
//     .then(value => {
//         console.log(value);
//         value += ' Orange';
//         return value;
//     })
//     .then(value => {
//         console.log(value);
//     });

// AJAX : Asynchronous JavaScript and XML.
// xhr.open() third default parameter will be : true, means Asynchronous.
// if it will be written false, then it works as synchronous.
// By Callback : 
// const URL = 'https://jsonplaceholder.typicode.com/posts';
// const xhr = new XMLHttpRequest();
// xhr.open('GET', URL);
// xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     }
//     else {
//         console.log('Something went wrong');
//     }
// }
// xhr.onerror = () => {
//     console.log('Network Error');
// }
// xhr.send();

// By Promise : 
// const URL = 'https://jsonplaceholder.typicode.com/posts';
// function getData(method, url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             }
//             else {
//                 reject(new Error('Something Went Wrong'));
//             }
//         }
//         xhr.onerror = () => {
//             reject(new Error('Something Went Wrong'));
//         }
//         xhr.send();
//     })
// }
// getData('GET', URL)
//     .then(res => {
//         const data = JSON.parse(res);
//         return data;
//     })
//     .then(data => {
//         const id = data[5]?.id;
//         return id;
//     })
//     .then(id => {
//         const newUrl = `${URL}/${id}ss`
//         return getData('GET', newUrl);
//     })
//     .then(newData => {
//         const singleData = JSON.parse(newData);
//         console.log(singleData);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// fetch() : Gives promise by default, resolve it by chaining (.then);
// The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
// const URL = 'https://jsonplaceholder.typicode.com/posts';
// function getData(url) {
//     fetch(url)
//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//             }
//             else {
//                 throw new Error('Something went wrong');
//             }
//         })
//         .then(data => {
//             console.log(data);
//         })
// }
// getData(URL);

// function postData() {
//     const URL = 'https://jsonplaceholder.typicode.com/posts';
//     fetch(URL, {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Selena',
//             body: 'Actor',
//             userId: 2
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })
//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//             }
//             else {
//                 throw new Error('Something went wrong.')
//             }
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error(error);
//         })
// }
// postData();

// async await :
// const URL = 'https://jsonplaceholder.typicode.com/posts';
// async function getData() {
//     const res = await fetch(URL);
//     const data = await res.json();
//     console.log(data);
// }
// getData();


// The End //

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
// event :
// onClick event :
// const btn = document.querySelector('.btn-headline');
// Arrow function : this refers to window here (one level up).
// btn.addEventListener('click', () => {
//     console.log('You clicked me!');
//     console.log(this);
// });
// Normal function : this refers to button here.
// btn.addEventListener('click', function () {
//     console.log('You clicked me!');
//     console.log(this);
// });

// const allButtons = document.querySelectorAll('.btn-group');
// for (let button of allButtons) {
//     button.addEventListener('click', function () {
//         console.log(this.textContent);
//     });
// }


// const allButtons = document.querySelectorAll('.btn-group');
// for (let button of allButtons) {
//     button.addEventListener('click', event => {
//         console.log(event);
//         console.log(event.currentTarget.textContent);
//     });
// }

// const allButtons = document.querySelectorAll('.btn-group');
// for (let button of allButtons) {
//     button.addEventListener('click', e => {
//         e.target.style.backgroundColor = 'gray';
//         e.target.style.color = 'white';
//     });
// }

// Random Color Project :
// const randomDiv = document.querySelector('.random');
// const changeButton = document.querySelector('.change-button');
// const currentColor = document.querySelector('.current-color');

// function randomColorGenerator() {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomColor = `rgb(${red}, ${green}, ${blue}`;
//     return randomColor;
// }

// changeButton.addEventListener('click', () => {
//     const randomColor = randomColorGenerator();
//     randomDiv.style.backgroundColor = randomColor;
//     currentColor.textContent = randomColor;
// });

// keypress & mouseover event :
// const body = document.body;
// body.addEventListener('keypress', e => {
//     console.log(e);
//     console.log(e.key);
// });

// const button = document.querySelector('.btn-headline');
// button.addEventListener('mouseover', e => {
//     console.log(e);
//     console.log('mouseover event occured.');
// });

// Event Bubbling or Event Propagation (by default) - child to parent :
// const child = document.querySelector('.child');
// const parent = document.querySelector('.parent');
// const grandparent = document.querySelector('.grandparent');
// child.addEventListener('click', () => {
//     console.log('You clicked on child!');
// });
// parent.addEventListener('click', () => {
//     console.log('You clicked on parent!');
// });
// grandparent.addEventListener('click', () => {
//     console.log('You clicked on grandparent!');
// });

// Event Capturing - parent to child :
// const child = document.querySelector('.child');
// const parent = document.querySelector('.parent');
// const grandparent = document.querySelector('.grandparent');
// child.addEventListener('click', () => {
//     console.log('You clicked on child!');
// }, true);
// parent.addEventListener('click', () => {
//     console.log('You clicked on parent!');
// }, true);
// grandparent.addEventListener('click', () => {
//     console.log('You clicked on grandparent!');
// }, true);

// Event Delegation :
// const grandparent = document.querySelector('.grandparent');
// grandparent.addEventListener('click', e => {
//     console.log(e.target);
// });

// Todo Project :
// const todoList = document.querySelector('.todo-list');
// const todoForm = document.querySelector('.form-todo');
// const todoInput = document.querySelector('.form-todo input[type="text"]');
// todoForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const newTodoText = todoInput.value;
//     const newLi = document.createElement('li');
//     newLiInnerHTML = `
//                 <span class="todo-text">${newTodoText}</span>
//                 <div class="todo-buttons">
//                     <button class="todo-btn done">Done</button>
//                     <button class="todo-btn remove">Remove</button>
//                 </div>
//             `
//     newLi.innerHTML = newLiInnerHTML;
//     todoList.append(newLi);
//     todoInput.value = '';
// });

// todoList.addEventListener('click', e => {
//     if (e.target.classList.contains('done')) {
//         const liSpan = e.target.parentNode.previousElementSibling;
//         liSpan.style.textDecoration = 'line-through';
//     }
//     if (e.target.classList.contains('remove')) {
//         const targetedLi = e.target.parentNode.parentNode;
//         targetedLi.remove();
//     }
// });
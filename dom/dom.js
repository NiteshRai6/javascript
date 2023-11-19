// console.log(window);
// console.log(document);
// console.dir(document);

// One page can have one unique id & multiple same class.
// Selectors gives HTML elements as Object.
// select element using - getElementById :
// const mainHeading = document.getElementById('main-heading');
// console.log(mainHeading);
// innerText gives only displayed data.
// console.log(mainHeading.innerText);
// textContent gives hidden data also.
// console.log(mainHeading.textContent);
// mainHeading.textContent = 'Edited By JS';
// console.log(mainHeading);

// select element using - querySelector (gives nodeList) :
// const mainHeading = document.querySelector('#main-heading');
// console.log(mainHeading);

// It gives only one 1st found class element.
// const navItem = document.querySelector('.nav-item');
// console.log(navItem);

// It gives all found class element.
// const navItems = document.querySelectorAll('.nav-item');
// console.log(navItems);

// change the style of an element (use camelCase to style in JS) :
// const styledHeading = document.querySelector('#main-heading');
// const styledHeading = document.querySelector('div.headline h2');
// styledHeading.style.color = 'Magenta';
// styledHeading.style.backgroundColor = 'Pink';

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://react.dev');
// console.log(link.getAttribute('href'));

// get multiple element using : getElementByClassName (gives HTML collection) :
// const navItems = document.getElementsByClassName('nav-item');
// console.log(navItems);
// console.log(Array.isArray(navItems));

// HTML collection : iteretae through for lopp or for of loop, but can't by forEach loop caust it is not array.
const navItems = document.getElementsByTagName('a');

// for (let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = 'magenta';
//     navItem.style.color = 'pink';
//     navItem.style.fontWeight = 'bold';
// }

// for (let navItem of navItems) {
//     navItem.style.backgroundColor = 'magenta';
//     navItem.style.color = 'pink';
//     navItem.style.fontWeight = 'bold';
// }

// const items = Array.from(navItems);
// items.forEach(navItem => {
//     navItem.style.backgroundColor = 'magenta';
//     navItem.style.color = 'yellow';
//     navItem.style.fontWeight = 'bold';
// });

// An HTMLCollection is a collection of document elements.
// A NodeList is a collection of document nodes(element nodes, attribute nodes, and text nodes).
// HTMLCollection items can be accessed by their name, id, or index number.
// NodeList items can only be accessed by their index number.
// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
// The querySelectorAll() method returns a static NodeList.

// innerHTML :
// const headline = document.querySelector('.headline');
// console.log(headline.innerHTML);
// headline.innerHTML = '<h2>Edited Heading</h2>';
// console.log(headline.innerHTML);
// headline.innerHTML += "<button class='btn'>Edited</button>";
// console.log(headline.innerHTML);

// DOM Traversing :
// const rootNode = document.getRootNode();
// console.log(rootNode);
// const htmlElementNode = document.childNodes[1];
// console.log(htmlElementNode);
// const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode);
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextElementSibling);
// const textNode1 = htmlElementNode.childNodes[1];
// console.log(textNode1);
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(bodyElementNode);

// by default, white-space : normal applied, if it changed to : pre, then all space according to node diaplay.

// const h1 = document.querySelector('h1');
// const parent1 = h1.parentNode;
// parent1.style.color = 'blue';
// const parent2 = h1.parentNode.parentNode;
// parent2.style.backgroundColor = 'magenta';

// const header = document.querySelector('header');
// child = header.childNodes;
// console.log(child);
// child[3].style.color = 'purple';

// console.log(child[1].childNodes);
// console.log(child[1].childNodes[0]);
// console.log(child[1].childNodes[1].childNodes[0]);

// Manipulate classes :
// const todo = document.querySelector('.section-todo');
// todo.classList.add('bg-dark');
// console.log(todo.classList);
// todo.classList.remove('bg-dark');
// console.log(todo.classList);
// const ans = todo.classList.contains('container');
// console.log(ans);
// todo.classList.toggle('bg-dark');

// Manipulate HTML Element (not recommonded to create new html element by innereHTML, it reduce performance) :
// const todo = document.querySelector('.todo-list');
// todo.innerHTML += '<li>todo 2</li>';
// todo.innerHTML += '<li>todo 3</li>';

// document.createElement, append, prepend, remove :
// const todo2 = document.createElement('li');
// todo2.textContent = 'todo 2';
// const list = document.querySelector('.todo-list');
// list.append(todo2);
// console.log(todo2);

// const todo0 = document.createElement('li');
// todo0.textContent = 'todo 0';
// const list = document.querySelector('.todo-list');
// list.prepend(todo0);
// console.log(todo0);

// const todo = document.querySelector('.todo-list li');
// todo.remove();
// console.log(todo);

// before & after :
// const todo0 = document.createElement('li');
// todo0.textContent = 'todo 0';
// const list = document.querySelector('.todo-list');
// list.before(todo0);

// const todo2 = document.createElement('li');
// todo2.textContent = 'todo 2';
// const list = document.querySelector('.todo-list');
// list.after(todo2);

// element.insertAdjacentHTML(where, html) : beforebegin, beforeend, afterbegin, afterend) :
// const todoList = document.querySelector('.todo-list');
// todoList.insertAdjacentHTML('beforebegin', '<li>before begin</li>');
// todoList.insertAdjacentHTML('beforeend', '<li>before end</li>');
// todoList.insertAdjacentHTML('afterbegin', '<li>after begin</li>');
// todoList.insertAdjacentHTML('afterend', '<li>after end</li>');

// clone nodes :
// const ul = document.querySelector('.todo-list');
// const li = document.createElement('li');
// li.textContent = 'new todo';
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);

// static list vs live list :
// querySelectorAll gives : Static List (Node List) & getElementsBy... gives Live List (HTML Collection).
// Static List :
// const listItem = document.querySelectorAll('.todo-list li');
// const sixthLi = document.createElement('li');
// sixthLi.textContent = 'item 6';
// const ul = document.querySelector('.todo-list');
// ul.append(sixthLi);
// console.log(listItem);

// Live List :
// const ul = document.querySelector('.todo-list');
// const listItem = document.getElementsByTagName('li');
// const sixthLi = document.createElement('li');
// sixthLi.textContent = 'item 6';
// ul.append(sixthLi);
// console.log(listItem);

// How to get the Dimensions of element :
// const sectionTodo = document.querySelector('.section-todo');
// const info = sectionTodo.getBoundingClientRect();
// console.log(info);


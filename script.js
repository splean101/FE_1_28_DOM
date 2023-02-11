'use strict';

//--------------------1-----------------------------
document.querySelector('span').previousElementSibling.textContent =
  'DOM method description';
//--------------------2-----------------------------

//document.querySelectorAll()
document.querySelectorAll("a[href*='/ua/']");

//--------------------3-----------------------------

const liNull = document.createElement('li');
const liSecond = document.createElement('li');
const liFourth = document.createElement('li');

liNull.id = 'null';
liNull.textContent = '0';
liSecond.id = 'second';
liSecond.textContent = '2';
liFourth.id = 'fourth';
liFourth.textContent = '4';
document.querySelector('#ul').prepend(liNull);
document.querySelector('#third').before(liSecond);
document.querySelector('#third').after(liFourth);
//--------------------4-----------------------------
 const h1 = document.querySelectorAll('h1')[1];
 console.log(h1);
const link = document.createElement('a');
link.id = 'link';
link.href = 'https://dom.spec.whatwg.org/';
console.log(link);
link.prepend(h1);
document.body.appendChild(link)
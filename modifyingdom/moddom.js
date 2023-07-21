console.log("hello");

//Traversing the DOM

var itemlist = document.querySelector('#items');
//parentnode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode);

//ParentElement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentElement.parentElement);

//childNodes
// console.log(itemlist.childNodes); not prefarable

console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor = 'yellow';

//First child
console.log(itemlist.firstChild); // useless

// first Element child
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'Hello 1';

//last child
console.log(itemlist.lastChild); // useless

// last Element child
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemlist.nextSibling);
 // next ELEment sibling
 console.log(itemlist.nextElementSibling);

 //previousSibling
 console.log(itemlist.previousSibling); //#text

 // previousElementSibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'green';

//****************************************************************************************************************** */
// CREATE  ELEMENT

// create a div
var newDiv = document.createElement('div');

//ADD class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node

var newDivText = document.createTextNode ('HEllo word');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

// //adding hello world before item 1
// var newHello = document.createElement('div'); //create a div
// newHello.className = 'hmm'; // Add class
// newHello.id = 'hmm1';
// newHello.setAttribute('title', 'hello hmm');

// //create textnode
// var addinghello = document.createTextNode ('HEllo word');
// //add text to div
// newHello.appendChild(addinghello);

// var listt1 = document.getElementById('#items');
// var l1 =document.getElementById('ul h2');

// console.log(newHello);

// listt1.insertBefore(newHello, l1);

var newele = document.createElement('li');
newele.className = 'list-group-item';

var newvalue = document.createTextNode('HEllo world');
newele.appendChild(newvalue);

console.log(newele);
var parent = document.getElementById('items');

    // Get the reference node (Item 1)
    var referenceNode = parent.firstElementChild;

    // Insert the new element before the reference node
    parent.insertBefore(newele, referenceNode);
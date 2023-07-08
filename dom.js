// console.dir(document);

// console.log(document.domain);

// console.log(document.URL);

// console.log(document.title);
// console.log('hi');
// document.all[10].textContent = 'Hello';
var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);

headerTitle.style.border='solid 3px #000';

var titleadd = document.getElementById('titleid');
// console.log(titleadd);
titleadd.style.fontWeight = 'bold';
titleadd.style.color= 'green';

var titleclass = document.getElementsByClassName('list-group-item');
// console.log(titleclass);
titleclass[2].style.backgroundColor = 'green';

var items = document.getElementsByClassName('list-group-item');

for (var i=0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
}

//GET ELEMENTS BY TAGNAME

var tagname = document.getElementsByTagName('li');
 console.log(tagname);
 tagname[4].style.backgroundColor = 'grey';
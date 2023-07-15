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

 //QUERYSELECTOR
 //can be used for only oone element
//  var input = document.querySelector('input');
//  input.value = 'Hello World';

//  var submit = document.querySelector('input[type="submit"]');
//  submit.value="SEND";

 var secondItem = document.querySelector('.list-group-item:nth-child(2)');
 secondItem.style.backgroundColor= 'green';

 var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
 thirdItem.style.visibility = 'hidden';

 //QUERYSELECTORALL

 var oddgreen = document.querySelectorAll('li');
oddgreen[1].style.color= 'green';

var odd= document.querySelectorAll('li:nth-child(odd)');

for(var j=0; j < odd.length; j++){
    odd[j].style.backgroundColor= 'green';
}

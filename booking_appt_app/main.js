// // console.log(document.querySelectorAll('.item'));

// const btn =document.querySelector('.btn');

// btn.addEventListener('mouseout', (e) =>{
//     e.preventDefault();
    
//     document.querySelector('body').classList.add('bg-dark');
          
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(ee) {
    ee.preventDefault();
//     if(nameInput.value === '' || emailInput === ''){
//         msg.classList.add('error');
//         msg.innerHTML='Please enter all fields ';

//         setTimeout(() => msg.remove(), 3000);
//     } else {
        
//         const li =document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//         userList.appendChild(li);

//         nameInput.value ='';
//         emailInput.value= '';


//     }
  
    var nameinput = document.getElementById('name').value;
    var emailinput = document.getElementById('email').value;
    
     var rightformat = {
        nameinput: nameinput,
        emailinput: emailinput
     }
    // console.log(nameinput);
    // console.log(emailinput);
    localStorage.setItem('rightformat', JSON.stringify(rightformat) );
    // localStorage.setItem('Email', emailinput);
}

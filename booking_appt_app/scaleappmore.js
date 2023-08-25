// // console.log(document.querySelectorAll('.item'));

// const btn =document.querySelector('.btn');

// btn.addEventListener('mouseout', (e) =>{
//     e.preventDefault();
    
//     document.querySelector('body').classList.add('bg-dark');
          
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');



myForm.addEventListener('submit', onSubmit);

function onSubmit(ee) {
    ee.preventDefault();
    
        
    var nameinput = document.getElementById('name').value;
    var emailinput = document.getElementById('email').value;
    
    
    const  obj= {
            nameinput: nameinput,
            emailinput: emailinput
         }
     
    // console.log(nameinput);
    // console.log(emailinput);
    localStorage.setItem(obj.emailinput, JSON.stringify(obj) );
    // localStorage.setItem('Email', emailinput);

    console.log(localStorage.getItem('obj'));
    showonscreen(obj)
    
    nameInput.value ='';
     emailInput.value= '';
   
    
}


function showonscreen(obj){
    const parent = document.getElementById('users');
    const childitem = document.createElement('li');
    childitem.textContent =  obj.nameinput +  '--' + obj.emailinput;

    const delebutton = document.createElement('input');
    delebutton.type = "button";
    delebutton.value = 'Delete';

    delebutton.onclick = () =>{
        localStorage.removeItem(obj.emailinput)
        parent.removeChild(childitem)
    }
    childitem.appendChild(delebutton)
    parent.appendChild(childitem)
}
//         const li =document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//         userList.appendChild(li);

//         


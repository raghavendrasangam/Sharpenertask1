const myForm = document.querySelector('#tracker');
const nameInput = document.querySelector('#expense');
const emailInput = document.querySelector('#description');
const categoryInput = document.querySelector('#category')



myForm.addEventListener('submit', onSubmit);

function onSubmit(ee) {
    ee.preventDefault();
    
        
    var expenseAmt = document.getElementById('expense').value;
    var descriptioninput = document.getElementById('description').value;
    var categoryinput = document.getElementById('category').value;
    
    
    const  obj= {
        expenseAmt: expenseAmt,
        descriptioninput: descriptioninput,
        categoryinput: categoryinput
         }
     
    // console.log(nameinput);
    // console.log(emailinput);
    localStorage.setItem(obj.descriptioninput, JSON.stringify(obj) );
    // localStorage.setItem('Email', emailinput);

    console.log(localStorage.getItem('obj'));
    showonscreen(obj)
    
    expenseAmt.value ='';
    descriptioninput.value= '';
    categoryinput.value= '';
   
    
}


function showonscreen(obj){
    const parent = document.getElementById('users');
    const childitem = document.createElement('li');
    childitem.textContent =  obj.expenseAmt +  '--' + obj.descriptioninput + '--' + obj.categoryinput;

    const delebutton = document.createElement('input');
    delebutton.type = "button";
    delebutton.value = 'Delete';
    delebutton.className = 'btn btn-danger';

    delebutton.onclick = () =>{
        localStorage.removeItem(obj.descriptioninput)
        parent.removeChild(childitem)
    }

    const editbutton = document.createElement('input');
    editbutton.type = "button";
    editbutton.value = 'Edit';
    editbutton.className = 'btn btn-secondary';

    editbutton.onclick = () => {
        localStorage.removeItem(obj.descriptioninput)
        parent.removeChild(childitem)
        document.getElementById('expense').value =obj.expenseAmt;
        document.getElementById('description').value = obj.descriptioninput;
        document.getElementById('category').value = obj.categoryinput;
    }
    childitem.appendChild(delebutton)
    childitem.appendChild(editbutton)
    parent.appendChild(childitem)
}
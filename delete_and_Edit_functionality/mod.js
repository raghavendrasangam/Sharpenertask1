var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit' , addItem);

// Delete Event

itemList.addEventListener('click' , removeItem);

// Add item
function addItem(e){
    e.preventDefault();

  // Get input value

    var newItem = document.getElementById('item').value;

    // Create new Li ELement

    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button
    var deleteBtn = document.createElement('button');

    // Add classes to del button
   
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    // Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
}

  // Remove item
 function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
 }

 /////////////////////////////////////////////////////////////
 function deleteListItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function editListItem(button) {
    // Implementation for the edit functionality (if needed) goes here.
}

function deleteNewlyAddedItem() {
    const itemList = document.getElementById('items');
    const newlyAddedItem = itemList.querySelector('.newly-added-item');
    if (newlyAddedItem) {
        itemList.removeChild(newlyAddedItem);
        // Remove the click event listener after deleting the newly added item
        document.querySelector('.btn-danger.float-right').removeEventListener('click', deleteNewlyAddedItem);
    }
}

function addNewItemToList(itemText) {
    var li = document.createElement('li');
    li.className = 'list-group-item newly-added-item'; // Add a class to identify newly added items
    li.appendChild(document.createTextNode(itemText));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.addEventListener('click', function () {
        deleteListItem(deleteBtn);
    });
    li.appendChild(deleteBtn);
    document.getElementById('items').appendChild(li);
}

document.getElementById('addForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    addNewItemToList(newItem);
    document.getElementById('item').value = ''; // Clear the input after adding the item
    // Add the click event listener to the "Delete Newly Added" button after adding a new item
    document.querySelector('.btn-danger.float-right').addEventListener('click', deleteNewlyAddedItem);
});
let editButtons = document.querySelectorAll('.edit');

var removeButtons = document.querySelectorAll('.remove');

let rows = document.querySelectorAll('.table__row');

let addButton = document.querySelector('.add');

let container = document.querySelector('.container');

let submitButton = document.querySelector('.submit');

let table = document.querySelector('.table');

let tableRowContainers = document.querySelectorAll('.table__row__content')

let inputs = document.querySelectorAll('.info');

let number = document.querySelectorAll('.number');

let Length = rows.length;


addButton.addEventListener('click',() => {
    container.classList.toggle('_invisible');
    for(let i=0; i < inputs.length; i++) {
       inputs[i].value = "";
    }
});



submitButton.addEventListener('click',() =>{
   
table.insertAdjacentHTML('beforeend',
`<tr class="table__row">
<td class="table__row__content">${Length}</td>
<td class="table__row__content">${document.querySelector(".name").value}</td>
<td class="table__row__content">${document.querySelector(".surname").value}</td>
<td class="table__row__content">${document.querySelector(".email").value}</td>
<td class="table__row__content">${document.querySelector('.city').value}</td>
<td class="table__row__content">${document.querySelector('.company').value}</td>
<td class="table__row__content"><button class="edit" >Edit</button></td>
<td class="table__row__content"><button class="remove">Remove</button></td>
</tr>
`);
Length = Length + 1;

container.classList.toggle('_invisible');
})



removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click',() => {
        for(let i = 0; i < removeButtons.length; i++) {
            if(event.target === removeButtons[i]) {
                rows[i + 1].classList.add('_invisible');
            } 
            
            
            
        }
        
        
        
    })
})

editButtons.forEach(function(editButton) {
    
    editButton.addEventListener('click', function(){
        container.classList.toggle('_invisible');
       for(let i=0; i < inputs.length; i++) {
        if(event.currentTarget === editButtons[i]) {
            inputs[i].value= tableRowContainers[i + 1].innerHTML;
           
        }
        
       }
       
        submitButton.addEventListener('click',() =>{
                tableRowContainers[i + 1].innerHTML = cache;
            });
    })
});


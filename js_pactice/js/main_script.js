let editButtons = document.querySelectorAll('.edit');

var removeButtons = document.querySelectorAll('.remove');

let rows = document.querySelectorAll('.table__row');

let addButton = document.querySelector('.add');

let container = document.querySelector('.container');

let submitButton = document.querySelector('.submit');

let table = document.querySelector('.table');

let tableRowContainers = document.querySelectorAll('.table__row__content');

let inputs = document.querySelectorAll('.info');

let number = document.querySelectorAll('.number');

let rowsLength = rows.length;


addButton.addEventListener('click',() => {
    container.classList.toggle('_invisible');
    for(let i=0; i < inputs.length; i++) {
       inputs[i].value = "";
    }
});



submitButton.addEventListener('click',() =>{
   
table.insertAdjacentHTML('beforeend',
`<tr class="table__row">
<td class="table__row__content">${rows.length++}</td>
<td class="table__row__content">${document.querySelector(".name").value}</td>
<td class="table__row__content">${document.querySelector(".surname").value}</td>
<td class="table__row__content">${document.querySelector(".email").value}</td>
<td class="table__row__content">${document.querySelector('.city').value}</td>
<td class="table__row__content">${document.querySelector('.company').value}</td>
<td class="table__row__content"><button class="edit" >Edit</button></td>
<td class="table__row__content"><button class="remove">Remove</button></td>
</tr>
`);


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
       for(let i=0; i < editButtons.length; i++) {
        
        if(event.target === editButtons[i]) {
            
            let attr = editButtons[i].getAttribute("data-id");
            for(let j=0; j < inputs.length; j++) {
                let temp = document.querySelector(`.table__row[data-id="${attr}"]`);
                inputs[j].value = temp.children[j + 1].innerHTML;
            }

          
        }
        
       }
       
        submitButton.addEventListener('click',() =>{
       //         tableRowContainers[i + 1].innerHTML = cache;
            });
    })
});


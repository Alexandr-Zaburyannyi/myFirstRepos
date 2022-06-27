let editButtons = document.querySelectorAll('.edit');

let removeButtons = document.querySelectorAll('.remove');

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
    inputs.forEach(input => {
        input.value = '';
    })
});



submitButton.addEventListener('click',() =>{
   
table.insertAdjacentHTML('beforeend',
`<tr class="table__row" data-id="${rowsLength}">
<td class="table__row__content">${rowsLength}</td>
<td class="table__row__content">${document.querySelector(".name").value}</td>
<td class="table__row__content">${document.querySelector(".surname").value}</td>
<td class="table__row__content">${document.querySelector(".email").value}</td>
<td class="table__row__content">${document.querySelector('.city').value}</td>
<td class="table__row__content">${document.querySelector('.company').value}</td>
<td class="table__row__content"><button class="edit" data-id="${rowsLength}">Edit</button></td>
<td class="table__row__content"><button class="remove">Remove</button></td>
</tr>
`);
rowsLength++;

container.classList.toggle('_invisible');
})




    table.addEventListener('click',() => {
        removeButtons.forEach(button => {
            if(event.target === button){
                button.parentElement.parentElement.remove();
            }
        })
    })



    
    table.addEventListener('click', function(){
        editButtons.forEach(editButton => {
            if (event.target === editButton){
                let temp = editButton.parentElement.parentElement.innerText;
             
               
                
                
                container.classList.toggle('_invisible');
            }
        })
        
       
        submitButton.addEventListener('click',() =>{
       //         tableRowContainers[i + 1].innerHTML = cache;
            });
    })



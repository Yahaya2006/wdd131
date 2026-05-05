const input = document.querySelector('#favchap');
const button = document.querySelector('#addBtn');
const list = document.querySelector('#list');

button.addEventListener('click', function(){
    if (input.value.trim() !== '') { 
        const li = document.createElement('li');
        const deleteButton = document.createElement ('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute("aria-label", "Delete the chapter");
        deleteButton.setAttribute("id", "delete-button");

        li.appendChild (deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', function(){
          list.removeChild(li);
          input.focus()
        });
          input.value = '';
          input.focus();

          }else {
        input.focus(); // remet le curseur dans le champ
      }
      
    
})
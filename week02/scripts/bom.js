
const input = document.querySelector('#favchap');
const button = document.querySelector('#addBtn');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  const value = input.value.trim();

  if (value !== '') {

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');


    li.textContent = value;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', 'delete this chapter');

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
    input.focus();
  } else {
    input.focus();
  }
});

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    button.click();
  }
});

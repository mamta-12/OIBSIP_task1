const input = document.querySelector('#todo-input');
const button = document.querySelector('#add-btn');
const list = document.querySelector('#todo-list');

button.addEventListener('click', addTodo);

function addTodo() {
  const todoText = input.value;
  const newTodo = document.createElement('li');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'X';
  deleteBtn.classList.add('delete-btn');
  newTodo.innerText = todoText;
  newTodo.appendChild(deleteBtn);
  list.appendChild(newTodo);
  input.value = '';
}

list.addEventListener('click', deleteTodo);

function deleteTodo(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.remove();
  }
}
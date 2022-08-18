import { editForm, todoForm, todoInput, todoList } from './elements.js'
import { oldInputValue } from './main.js'

function saveTodo(text) {
  const todo = document.createElement('div')
  todo.classList.add('to-do')

  const todoTitle = document.createElement('h3')
  todoTitle.innerText = text
  todo.appendChild(todoTitle)

  const doneBtn = document.createElement('button')
  doneBtn.classList.add('finish-to-do')
  doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
  todo.appendChild(doneBtn)

  const editBtn = document.createElement('button')
  editBtn.classList.add('edit-to-do')
  editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
  todo.appendChild(editBtn)

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('remove-to-do')
  deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
  todo.appendChild(deleteBtn)

  todoList.appendChild(todo)

  todoInput.value = ''
  todoInput.focus()
}

function toggleForms() {
  editForm.classList.toggle('hide')
  todoForm.classList.toggle('hide')
  todoList.classList.toggle('hide')
}

function updateTodo(text) {
  const todos = document.querySelectorAll('.to-do')

  todos.forEach(todo => {
    let todoTitle = todo.querySelector('h3')

    if(todoList.innerText === oldInputValue) {
      todoTitle.innerText = text
    }
  })
}

export {
  toggleForms,
  saveTodo, 
  updateTodo
}
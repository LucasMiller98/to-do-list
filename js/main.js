import { saveTodo, toggleForms, updateTodo } from './functions.js'
import { 
  cancelEditBtn, 
  editForm, 
  editInput, 
  todoForm, 
  todoInput, 
} from './elements.js'

let oldInputValue

todoForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const inputValue = todoInput.value

  if(inputValue) {
    saveTodo(inputValue)
  }

})

document.addEventListener('click', (event) => {

  const targetEl = event.target
  const parentEl = targetEl.closest('div') // elemento pai "div" mais próxima.
  let todoTitle

  if(parentEl && parentEl.querySelector('h3')) {
    todoTitle = parentEl.querySelector('h3').innerText
  }

  if(targetEl.classList.contains('finish-to-do')) {
    parentEl.classList.toggle('done') // adiciona e remove a classe
  }

  if(targetEl.classList.contains('remove-to-do')) {
    parentEl.remove()
  }

  if(targetEl.classList.contains('edit-to-do')) {
    toggleForms()

    editInput.value = todoTitle
    oldInputValue = todoTitle
  }
})

cancelEditBtn.addEventListener('click', (event) => {
  event.preventDefault()

  toggleForms()
})

editForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const editInputValue = editInput.value

  if(editInputValue) {
    updateTodo(editInputValue)
  } 

  toggleForms()
})

export { oldInputValue }
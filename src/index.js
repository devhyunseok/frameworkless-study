import getTodos from "./model/getTodos";
import counterController from './controller/counter'
import filtersController from './controller/filters'
import todosController from './controller/todos'

import {add, renderRoot} from './utils/registry'

add('todos', todosController)
add('counter', counterController)
add('filters', filtersController)

const state = {
  todos: getTodos(),
  currentFilter: 'All'
}

window.requestAnimationFrame(() => {
  const main = document.querySelector('.todoapp')
  const newMain = renderRoot(main, state)
  main.replaceWith(newMain)
})
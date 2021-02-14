const getTodoCount = todos => {
  const notCompleted = todos.filter(todo => !todo.completed)

  const { length } = notCompleted

  if(length === 1) {
    return "1개 todo가 남음"
  }

  return `${length}개 todo가 남음`
}

export default (targetElement, { todos}) => {
  const newCounter = targetElement.cloneNode(true)
  newCounter.textContent = getTodoCount(todos)
  return newCounter
}
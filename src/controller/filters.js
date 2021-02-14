const filters = (newCounter, { currentFilter }) => {
  Array.from(newCounter.querySelectorAll('li a'))
    .forEach(anchor => {
      if(anchor.textContent === currentFilter) {
        anchor.classList.add('selected')
        return;
      }

      anchor.classList.remove('selected')
    })
  return newCounter
}

export default (targetElement, { currentFilter }) => {
  const newCounter = targetElement.cloneNode(true)
  return filters(newCounter, { currentFilter })
}
import filtersController from './filters'

let targetElement
const TEMPLATE = `<ul class="filters">
    <li>
        <a href="#/">All</a>
    </li>
    <li>
        <a href="#/active">Active</a>
    </li>
    <li>
        <a href="#/completed">Completed</a>
    </li>
</ul>`

describe('filtersController', () => {
  beforeEach(() => {
    const tempElement = document.createElement('div')
    tempElement.innerHTML = TEMPLATE
    targetElement = tempElement.childNodes[0]
  })

  test('현재 필터와 동일한 텍스트의 anchor에 selected 추가', () => {
    const newCounter = filtersController(targetElement, {
      currentFilter: 'Active'
    })

    const selectedItem = newCounter.querySelector('li a.selected')

    expect(selectedItem.textContent).toBe('Active')
  })
})
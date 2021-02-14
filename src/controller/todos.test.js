import todosController from './todos'

let targetElement

describe('filtersController', () => {
  beforeEach(() => {
    targetElement = document.createElement('ul')
  })

  test('모든 todos element를 li로 생성', () => {
    const newCounter = todosController(targetElement, {
      todos: [
        {
          text: 'First',
          completed: true
        },
        {
          text: 'Second',
          completed: false
        },
        {
          text: 'Third',
          completed: false
        }
      ]
    })

    const items = newCounter.querySelectorAll('li')
    expect(items.length).toBe(3)
  })

  test('모든 todos에 속성을 부여', () => {
    const newCounter = todosController(targetElement, {
      todos: [
        {
          text: 'First',
          completed: true
        },
        {
          text: 'Second',
          completed: false
        }
      ]
    });

    const [firstItem, secondItem] = newCounter.querySelectorAll('li')

    expect(firstItem.classList.contains('completed')).toBe(true)
    expect(firstItem.querySelector('.toggle').checked).toBe(true)
    expect(firstItem.querySelector('label').textContent).toBe('First')
    expect(firstItem.querySelector('.edit').value).toBe('First')

    expect(secondItem.classList.contains('completed')).toBe(false)
    expect(secondItem.querySelector('.toggle').checked).toBe(false)
    expect(secondItem.querySelector('label').textContent).toBe('Second')
    expect(secondItem.querySelector('.edit').value).toBe('Second')
  })
})
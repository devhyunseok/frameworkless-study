import counterController from './counter'

let targetElement

describe('counterController', () => {
  beforeEach(() => {
    targetElement = document.createElement('div')
  })

  test('완료되지 않은 todo를 추가할 수 있다.', () => {
    const newCounter = counterController(targetElement, {
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

    expect(newCounter.textContent).toBe('2개 todo가 남음')
  })

  test('1개 항목만 남았을 때 텍스트 출력이 정상적으로 되는지', () => {
    const newCounter = counterController(targetElement, {
      todos: [
        {
          text: 'First',
          completed: true
        },
        {
          text: 'Third',
          completed: false
        }
      ]
    })
    expect(newCounter.textContent).toBe('1개 todo가 남음')
  })
})
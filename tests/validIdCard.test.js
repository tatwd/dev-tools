var validIdCard = require('../src/validIdCard')

describe('validIdCard tests', () => {
  test('is valid id', () => {
    expect(validIdCard('220202202002020022')).toBeTruthy()
  })

  test('is invalid id', () => {
    expect(validIdCard('22020220200202002X')).toBeFalsy()
  })
})

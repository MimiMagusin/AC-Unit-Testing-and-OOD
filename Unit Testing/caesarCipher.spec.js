const caesarShift = require('./caesarCipher')

describe('Caesar Shift', () => {

  it('moves a letter the given amount in the alphabet', () => {
    expect(caesarShift('a', 1)).toBe('b')
  })

  it('works with multiple letters', () => {
    expect(caesarShift('abcd', 4)).toBe('efgh')
  })

  it('works with Upper Case letters', () => {
    expect(caesarShift('AbC', 1)).toBe('BcD')
  })

  it('does not fail when you enter an empty string', () => {
    expect(caesarShift('', 1)).toBe('')
  })

  it('works when amount is 0', () => {
    expect(caesarShift('b', 0)).toBe('b')
  })

  it('works when amount is 26', () => {
    expect(caesarShift('a', 26)).toBe('a')
  })

  it('works when amount is bigger than 26', () => {
    expect(caesarShift('a', 105)).toBe('b')
  })

  it('works when amount is negative', () => {
    expect(caesarShift('b', -1)).toBe('a')
  })

})
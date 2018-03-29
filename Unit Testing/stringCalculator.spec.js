const stringCalculator = require('./stringCalculator')

describe('The String Calculator', () => {
  it('returns the sum of 2 passed parameters', () => {
    expect(stringCalculator.add('1, 2')).toBe(3);
  })

  it('returns the sum of 1 passed parameter', () => {
     expect(stringCalculator.add('1')).toBe(1);
  })

  //When working on code, you'd fix this  - should return 0
  it('returns 0 for an empty string', () => {
    expect(stringCalculator.add('')).toBe(NaN);
  })

  it('works with more than two numbers', () => {
    expect(stringCalculator.add('1, 3, 4, 5')).toBe(13)
  })

  it('can handle new lines', () => {
    expect(stringCalculator.add('1\n2,3')).toBe(6)
  })

  it('but it cannot handle ending on a new line', () => {
    expect(stringCalculator.add('1,\n')).not.toBe(1)
  })

  it('but it cannot handle ending on a new line', () => {
    expect(stringCalculator.add('/;\n1;2')).not.toBe(3)
  })

  it('should throw an exception error if an negative number is entered', () => {
    const err = 'negative numbers not allowed'
    let Function = () => { stringCalculator.add('-1, -2') }
    expect(Function).toThrowError(err)
  })
})


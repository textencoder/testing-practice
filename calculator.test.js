const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toEqual(3)
})

test('subtracts 2 - 1 to equal 1', () => {
    expect(calculator.subtract(2, 1)).toEqual(1)
})

test('divides 10 / 2 to equal 5', () => {
    expect(calculator.divide(10, 2)).toEqual(5)
})

test('multiplies 2 * 4 to equal 8', () => {
    expect(calculator.multiply(2, 4)).toEqual(8)
})
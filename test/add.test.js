const { add } = require('../src/index')

test('TESTE add(1, 2) = 3', () => expect(add(1, 2)).toBe(3))
test('TESTE add(1, 2) = 3', () => expect(add(2, 1)).toBe(3))
test('TESTE add(1, 2) = 8', () => expect(add(5, 3)).toBe(8))
test('TESTE add(1, 2) = 8', () => expect(add(3, 5)).toBe(8))

const { isLucky } = require('../src/index')

test('TESTE isLucky(1230) = true', () => expect(isLucky(1230)).toBe(true))
test('TESTE isLucky(239017) = false', () => expect(isLucky(239017)).toBe(false))

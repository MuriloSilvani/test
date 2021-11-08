const { centuryFromYear } = require('../src/index')

test('TESTE centuryFromYear(1905) = 20', () => expect(centuryFromYear(1905)).toBe(20))
test('TESTE centuryFromYear(1700) = 17', () => expect(centuryFromYear(1700)).toBe(17))

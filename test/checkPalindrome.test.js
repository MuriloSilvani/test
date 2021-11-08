const { checkPalindrome } = require('../src/index')

test('TESTE checkPalindrome("aabaa") = true', () => expect(checkPalindrome('aabaa')).toBe(true))
test('TESTE checkPalindrome("abac") = false', () => expect(checkPalindrome('abac')).toBe(false))
test('TESTE checkPalindrome("a") = true', () => expect(checkPalindrome('a')).toBe(true))

const { isIPv4Address } = require('../src/index')

test('TESTE isIPv4Address("172.16.254.1") = true', () => expect(isIPv4Address('172.16.254.1')).toBe(true))
test('TESTE isIPv4Address("172.316.254.1") = false', () => expect(isIPv4Address('172.316.254.1')).toBe(false))
test('TESTE isIPv4Address(".254.255.0") = false', () => expect(isIPv4Address('.254.255.0')).toBe(false))

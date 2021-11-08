
const add = (param1, param2) => {
  return param1 + param2
}

const centuryFromYear = (year) => {
  return Math.ceil(year / 100)
}

const checkPalindrome = (inputString) => {
  return inputString.split('').reverse().join('') === inputString
}

const isLucky = (n) => {
  const string = `${n}`
  const length = string.length

  const sum = (param) => param.split('').reduce((total, item) => total + +item, 0)

  return sum(string.slice(0, length / 2)) === sum(string.slice(length / 2, length))
}

const isIPv4Address = require('./lib/isIPv4Address')

module.exports = {
  add,
  centuryFromYear,
  checkPalindrome,
  isLucky,
  isIPv4Address
}

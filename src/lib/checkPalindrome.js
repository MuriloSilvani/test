const checkPalindrome = (inputString) => {
  return inputString.split('').reverse().join('') === inputString
}

module.exports = checkPalindrome

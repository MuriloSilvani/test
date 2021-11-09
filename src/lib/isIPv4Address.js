const isIPv4Address = (inputString) => {
  const arr = inputString.split('.')

  const checkNumber = num => num && `${+num}` === num && num >= 0 && num <= 255

  return arr.length === 4 && arr.every(num => checkNumber(num))
}

module.exports = isIPv4Address

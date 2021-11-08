const isLucky = (n) => {
  const string = `${n}`
  const length = string.length

  const sum = (param) => param.split('').reduce((total, item) => total + +item, 0)

  return sum(string.slice(0, length / 2)) === sum(string.slice(length / 2, length))
}

module.exports = isLucky

var isIdCard = require('./isIdCard')

/**
 * 校验身份证号是否有效
 * @param {string} id 身份证号
 */
function validIdCard(id) {
  if (!isIdCard(id)) return false
  var sum = 0
  var len = id.length
  for (var i = len - 1; i >= 0; i--) {
    var num = i === len - 1 && (id[i] === 'x' || id[i] === 'X') ? 10 : id[i]
    var w = Math.pow(2, len - i - 1) % 11
    sum += num * w
  }
  return sum % 11 === 1
}

module.exports = validIdCard

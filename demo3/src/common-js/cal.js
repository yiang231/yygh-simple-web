//common-js 模块化
// 定义成员：
const sum = function (a, b) {
    return parseInt(a) + parseInt(b)
}
const subtract = function (a, b) {
    return parseInt(a) - parseInt(b)
}
const multiply = function (a, b) {
    return parseInt(a) * parseInt(b)
}
const divide = function (a, b) {
    return parseInt(a) / parseInt(b)
}
//简写
module.exports = {
    sum,
    subtract,
    multiply,
    divide
}
// 导出成员：传统写法
/*
module.exports = {
    sum: sum,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}*/

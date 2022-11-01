const http = require('http')
http.createServer(function (request, response) {
    response.end('{name:"jack",age:20}')//给客户端返回的数据
}).listen(8888)
console.log('Server running at http://127.0.0.1:8888/');
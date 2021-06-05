// 引入HTTP包
const http = require('http')

http.createServer(function(request,response){
    // 返回HTTP头部信息
    // 返回HTTP相应的状态码；200(请求成功)
    // 返回数据内容的类型：text/plain
    // 指定返回的code以及形式
    response.writeHead(200,{'Content-Type':'text/html'});

    // 发送HTML文档内容
    //打印输出一个<h1>元素
    response.end('<h1>Hello World</h1>');
}).listen(3000);

console.log('Server running st http://127.0.0.1:3000/');

var http = require('http');
var path = require('path')
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8124);
console.log('Server running at http://127.0.0.1:8124/');
console.log('绝对路径当前正在执行的文件路径'+__filename);
console.log('绝对路径当前正在执行脚本所在的目录名。'+__dirname);
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

console.log(path.resolve('/foo', 'bar', 'baz/asdf', 'quux', '..','/sadf/sadfsa/sadfsdaf/saf'));//当存在'/'时会指向根目录



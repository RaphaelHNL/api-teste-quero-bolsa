var http = require('http');
var url = require('url');

const bolsas = require('./db.json')


function callback(request, response){
    var parts = url.parse(request.url);
    var path = parts.path;

    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    if(path == '/bolsas'){
        response.end(JSON.stringify(bolsas))
    }else {
        response.end("Not found: " + path);
    }
}

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000/");

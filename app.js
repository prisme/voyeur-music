var nodeStatic = require('node-static');
var fileServer = new nodeStatic.Server('./build');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);

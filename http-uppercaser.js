//
//
// HTTP Server that receives only POST requests and converts
// incoming POST body characters to uppercase. Returns to the client.
//
// Server should listen on the port provided by the first argument to the program.
//
//

var fs = require('fs');
var http = require('http');
var port = process.argv[2];

// npm package that you can use to 
// tranform stream data as it's passed through.
var map = require('through2-map');

var server = http.createServer(function(request, response) {
    request.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(port);

// Solution:
/*
    var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/
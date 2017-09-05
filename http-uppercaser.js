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
http.post = require('http-post');

var port = process.argv[2];

// npm package that you can use to 
// tranform stream data as it's passed through.
var map = require('through2-map');

// test
var server = http.createServer(function(request, response) {

});
inStream.pipe(map(function (chunk) {
    return chunk.toString().split('').reverse().join('');
})).pipe(outStream);
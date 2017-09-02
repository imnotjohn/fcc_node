//
//
// Serves the same text file for each request it receives.
// The server should listen on the port provided by the first CL argument.
//
// You will be provided with the location of the file to serve as the 2nd CL argument.
// You MUST use fs.createReadStream() method to stream the file contents to the response.
//
//

var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (req, res) {
//    filePath += req.url;
    var readStream = fs.createReadStream(filePath);

    readStream.on('open', function() {
        readStream.pipe(res);
    });
    readStream.on('error', function(err) {
        res.end(err);
    });
});

server.listen(port);

// Solution:
/*
    var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/
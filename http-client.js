//
//
// HTTP Client - 
// Performs an HTTP GET request to a URL provided via first CL argument.
// Writes the String contents of each "data" event from the response to
// a new line on the console.
//
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html#http_class_http_serverresponse
//

var http = require('http');
var url = process.argv[2]; //Provided URL

http.get(url, callback);

function callback(response) {
    //must setEncoding before operate on 'data'.
    response.setEncoding('utf8');     
    response.on('data', function(data) {
       console.log(data);
    });
}


// Solution

/*
    var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)
*/
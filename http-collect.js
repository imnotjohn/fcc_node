//
//
// Performs an HTTP GET request to a URL (first CL argument)
// Collects all data from the server (across multiple 'data' events).
// Then writes two lines to the console.
//
// First line should just be an integer representing the number of char received.
// Second line should contain the complete String of characters sent by the server.
//
//

var http = require('http');
var cs = require('concat-stream');

var url = process.argv[2];
var arr = [];

http.get(url, function(response) {
    response.setEncoding('utf8');
    response.pipe(cs(function(data) {
        arr.push(data);
        console.log(arr[0].length);
        console.log(arr[0]);
    }));
}).on('error', console.error);

// Solution
/*
    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/
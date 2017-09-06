//
//
// HTTP Server that serves JSON data when it receives a GET request
// to the path '/api/parsetime'. 
//
// Expect the request to contain a query string with a key 'iso' and
// an ISO-format time as the value.
//
// example:
// /api/parsetime?iso=2013-08-10T12:10:15.474Z
//
// The JSON response should contain only
// 'hour'
// 'minute'
// 'second'
//
// example:
// {
//   "hour": 14,
//   "minute": 23,
//   "second": 15
// }
//
// Add second endpoint for the path '/api/unixtime' which
// accepts the same query string but returns UNIX epoch time in ms 
// under the property 'unixtime'.
//
// example:
// {  "unixtime": 1376136615474 }
//
// The server should listen on the port provided by the first argument to your program.
//
//

var http = require('http');
var port = process.argv[2];
var url = require('url');

var server = http.createServer(function (request, response) {
    if (request.method !== 'GET') {
        response.writeHead(405);
        return response.end('Send me a GET\n');
    }

    response.writeHead(200, {'Content-Type': 'application/json'});
    url = url.parse(request.url, true);
    response.end(JSON.stringify(parseQuery(url)));
});

server.listen(port);

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixTime(time) {
    return {unixtime: time.getTime()};
}

function parseQuery(url) {
    switch(url.pathname) {
        case '/api/parsetime':
            return parseTime(new Date(url.query.iso));
        case '/api/unixtime':
            return unixTime(new Date(url.query.iso));
        default:
            return 'Invalid URL: ' + url;
    }
}


// Solution:
/*
var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/
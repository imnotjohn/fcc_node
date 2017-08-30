//
//
// Take the first three CL arguments. 
// Collect the complete content.
// Print out the data as a String; one line per URL.
//
// Must print out in the same order that the URLs are provided.
//
//

var http = require('http');
var cs = require('concat-stream');

var arr = [];
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

/* This was helpful:
https://stackoverflow.com/questions/5187968/how-should-i-call-3-functions-in-order-to-execute-them-one-after-the-other
*/

http.get(url1, function(response1) {
    response1.setEncoding('utf8');
    http.get(url2, function(response2) {
        response2.setEncoding('utf8');
        http.get(url3, function(response3) {
            response3.setEncoding('utf8');

            response1.pipe(cs(function(data1) {
                console.log(data1);
            }));
            response2.pipe(cs(function(data2) {
                console.log(data2);
            }));
            response3.pipe(cs(function(data3) {
                console.log(data3);
            }));
        });
    });
});

// Solutions:
/*
var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
*/
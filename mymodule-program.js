//
// Prints a list of files in a given directory based on 
// callback output from mymodule.js
//

var dir = process.argv[2];
var ext = process.argv[3];

var myModule = require('./mymodule.js');

myModule(dir, ext, function(err, list) {
    if (err) {
        console.log("You've encountered an error!");
    } else {
        list.forEach(function(file) {
            console.log(file);
        });
    }
});


// Solution

/*
    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })
*/
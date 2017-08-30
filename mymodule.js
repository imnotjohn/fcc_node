//
//
// This file contains the directory reading and filtering function.
//
//


/* To define a single function export, you assign your function to the 
 * module.exports object, overwriting what is already there:
 */

var fs = require('fs');
var path = require('path');
var filteredFileList = [];

module.exports = filterList;

function filterList(directoryName, extensionFilter, callback) {
    fs.readdir(directoryName, function(err, files) {
        if (err) {
            return callback(err);
        } else {
            files.forEach(function(file) {
                if (path.extname(file) == '.' + extensionFilter) {
                    filteredFileList.push(file);
                }
            });
            return callback(null, filteredFileList);
        }
    });
}

// Solution

/*
var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }
*/
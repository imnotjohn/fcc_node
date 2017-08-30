//
//
// Create a TCP Time Server:
// Listens to connections on the port provided by the first argument to the program.
// For each connection, write the current date in 24-hour time format:
//
// YYYY-MM-DD hh:mm
//
// followed by a newline character.
// Month, Day, Hour, and Minute must be 
// zero-filled to 2 integers.
//
// Close the connection after sending the String.
//
//

var net = require('net');
var portNum = process.argv[2];

var builtDate = "";
var date = new Date();
var fullYear = date.getFullYear();
var month = date.getMonth() + 1;
var dateOfMonth = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();

var server = net.createServer(function listener(socket) {
    // socket handling logic
    socket.write(builtDate);
    socket.end();    
});
server.listen(portNum);

builtDate = buildDate();
function buildDate() {
    if (month < 10) {
       month = makeZero(month); 
    }
    if (dateOfMonth < 10) {
        dateOfMonth = makeZero(dateOfMonth);
    }
    if (hours < 10) {
        hours = makeZero(hours);
    }
    if (minutes < 10) {
        minutes = makeZero(minutes);
    }
    return fullYear + "-" + month + "-" + dateOfMonth + " " + hours + ":" + minutes + "\n";
}
function makeZero(n) {
   return "0" + n; 
}

// Solution:
/*
var net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))
*/
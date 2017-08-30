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
var port = process.argv;

var server = net.createServer(function(socket) {
    // socket handling logic
});

console.log(port);
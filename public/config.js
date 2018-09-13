// Start a socket connection to the server
// Some day we would run this server somewhere else
var socket;
socket = io.connect('http://192.168.1.85:3000');
var acceleration = 1;
var resistance = .4;
var resistanceRate = 6;//resist once every X frame
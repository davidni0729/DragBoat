// Start a socket connection to the server
// Some day we would run this server somewhere else
var socket;
socket = io.connect('http://192.168.1.84:3000');
var acceleration = .4;
var resistance = .2;
var resistanceRate = 4;//resist once every X frame
var turboDiffTime = 10;
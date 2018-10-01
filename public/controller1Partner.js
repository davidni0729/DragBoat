// prevent scrolling of page
document.ontouchmove = function(event) {
  event.preventDefault();
}
var startX;
var startY;
var endX;
var endY;
var touchDist;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(5);
  stroke(0);
}

function draw() {
  
}

function touchStarted(){
  startX = touchX;
  startY = touchY;
}
function touchMoved(){
  
}
function touchEnded(){
  endX = touchX;
  endY = touchY;
  touchDist = dist(startX, startY, endX, endY);
  console.log('touchDist', touchDist, startX, startY, endX, endY);
  if(touchDist > 100) {
    stroke(0, 0, 255);
    line(startX, startY, endX, endY);
    var data = {
      btn1Partner: true,
    };
    socket.emit('button',data);
  }
}

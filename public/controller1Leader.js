// prevent scrolling of page
document.ontouchmove = function(event) {
  event.preventDefault();
}
var startX;
var startY;
var endX;
var endY;
var touchDist;
var btnReady;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  btnReady = createSprite(100, 200);
  btnReady.addAnimation('normal', 'assets/boat1.png', 'assets/boat3.png');
  btnReady.mouseActive = true;
  btnReady.onMouseReleased = function() {
    btnReady.visible = true;
  };
  background(0);
  strokeWeight(5);
  stroke(0);

}

function draw() {
  background(0);
  //draw the btn
  // drawSprites();
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
  if(touchDist >= 0) {
    stroke(0, 0, 255);
    line(startX, startY, endX, endY);
    var data = {
      btn1Leader: true,
    };
    socket.emit('button',data);
  }
}

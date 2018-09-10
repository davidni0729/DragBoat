var btnWidth;
var btn1Color;
var btn1OverlayAlpha;
var btn1x;
var btn2Color;
var btn2OverlayAlpha;
var btn2x;
var btn3Color;
var btn3OverlayAlpha;
var btn3x;
var btn4Color;
var btn4OverlayAlpha;
var btn4x;
var ptouchIsDown;
var pmouseIsPressed;



function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  background(0);

  btnWidth = windowWidth/4;
  btn1Color = color(190,194,63);
  btn1OverlayAlpha = 0;
  btn1x = 0; 
  btn2Color = color(232,122,144);
  btn2OverlayAlpha = 0;
  btn2x = btnWidth;
  btn3Color = color(88,178,220);
  btn3OverlayAlpha = 0;
  btn3x = btnWidth * 2;
  btn4Color = color(152,109,178);
  btn4OverlayAlpha = 0;
  btn4x = btnWidth * 3;

  strokeWeight(5);
  stroke(0);
  ptouchIsDown = touchIsDown;
  pmouseIsPressed = mouseIsPressed;
}

function draw() {
  background(0);

  if (ptouchIsDown && touchIsDown){
    stroke(255, 0, 0);
    line(touchX, touchY, ptouchX, ptouchY);
    var distance;
    distance = dist(mouseX, mouseY, pmouseX, pmouseY);
    console.log(distance);
    if(distance > 15) {
      var data = {
                btn1: true,
                btn2: false,
                btn3: false,
                btn4: false
              };
      socket.emit('button',data);
    }
  }
  if (pmouseIsPressed && mouseIsPressed){
    var distance;
    distance = dist(mouseX, mouseY, pmouseX, pmouseY);
    console.log(distance);
    if(distance > 15) {
      var data = {
                btn1: false,
                btn2: true,
                btn3: false,
                btn4: false
              };
      socket.emit('button',data);
    }
    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  ptouchIsDown = touchIsDown;
  pmouseIsPressed = mouseIsPressed;
}

function touchMoved(){
  //stroke(255, 0, 0);
  //line(touchX, touchY, ptouchX, ptouchY);
  return false;
}

function touchEnded(){
  //stroke(0, 0, 255);
  //line(touchX, touchY, ptouchX, ptouchY);
  return false;
}

function mouseDragged(){
  //stroke(0, 255, 0);
  //line(mouseX, mouseY, pmouseX, pmouseY);
}

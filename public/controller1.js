var ptouchIsDown;
var pmouseIsPressed;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  background(0);

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
                btn1: true,
                btn2: false,
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

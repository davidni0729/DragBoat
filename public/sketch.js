var ghost1;
var ghost2;
var ghost3;
var ghost4;
var shift = 200;
var draggedSprite;
var velocity1 = 0;
var velocity2 = 0;
var direction = 0;

function setup() {
  
createCanvas(windowWidth, windowHeight);

  ghost1 = createSprite(100, 80);
  ghost1.addAnimation('normal', 'assets/boat1.png', 'assets/boat3.png');
  ghost1.mouseActive = true;

  ghost2 = createSprite(100, 280);
  ghost2.addAnimation('normal', 'assets/boat1.png', 'assets/boat3.png');
  ghost2.mouseActive = true;

  ghost3 = createSprite(100, 480);
  ghost3.addAnimation('normal', 'assets/boat1.png', 'assets/boat3.png');
  ghost3.mouseActive = true;

  ghost4 = createSprite(100, 680);
  ghost4.addAnimation('normal', 'assets/boat1.png', 'assets/boat3.png');
  ghost4.mouseActive = true;

  // We make a named event called 'mouse' and write an
  // anonymous callback function
   socket.on('button',
    // When we receive data
    function(data) {
      console.log("Got: " + data.btn1 + " " + data.btn2 + " " + data.btn3 + " " + data.btn4 + " " );
      
        if(data.btn1) {
          ghost1.rotation-= 10;
          velocity1 +=1;
          ghost1.setSpeed(velocity1, direction);
        }
          
        if(data.btn2) {
          ghost2.rotation-= 10;
          velocity2 +=1;
          ghost2.setSpeed(velocity2, direction);
        }

        drawSprites();
    }
  );
}

function draw() {
  
  background(255, 255, 255);

  if (draggedSprite != null) {
    draggedSprite.position.x = mouseX;
    draggedSprite.position.y = mouseY;
  }

  //draw the ghosts
    drawSprites();

  if(velocity1 > 0) {
    velocity1--;
    ghost1.setSpeed(velocity1, direction);
  }
  if(velocity2 > 0) {
    velocity2--;
    ghost2.setSpeed(velocity2, direction);
  }
  console.log(velocity1, velocity2);
}

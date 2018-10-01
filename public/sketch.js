var boat1;
var boat2;
var btn1LeaderTime;
var btn1PartnerTime;
var shift = 200;
var draggedSprite;
var velocity1 = 0;
var velocity2 = 0;
var direction = 0;

function setup() {
  
createCanvas(windowWidth, windowHeight);

  boat1 = createSprite(100, 200);
  boat1.addAnimation('normal', 'assets/boat1.png', 'assets/boat3.png');
  boat1.mouseActive = true;

  boat2 = createSprite(100, 600);
  boat2.addAnimation('normal', 'assets/boat1.png', 'assets/boat3.png');
  boat2.mouseActive = true;

  // We make a named event called 'mouse' and write an
  // anonymous callback function
   socket.on('button',
    // When we receive data
    function(data) {
      console.log("Got: " + data.btn1Leader + " " + data.btn1Partner + " " + data.btn2Leader + data.btn2Partner + " " + data.btn3 + " " + data.btn4 + " " );
      
        if(data.btn1Leader) {
          velocity1 += acceleration;
          boat1.setSpeed(velocity1, direction);
          btn1LeaderTime = frameCount;
        }
        if(data.btn1Partner) {
          velocity1 += acceleration;
          boat1.setSpeed(velocity1, direction);
          console.log("abs" + Math.abs(frameCount - btn1LeaderTime));
          if(Math.abs(frameCount - btn1LeaderTime) < turboDiffTime) {
            console.log("turbo");
            velocity1 += acceleration;
          }
        }
          
        if(data.btn2) {
          velocity2 += acceleration;
          boat2.setSpeed(velocity2, direction);
        }

        drawSprites();
    }
  );
}

function draw() {
  
  background(0);

  if (draggedSprite != null) {
    draggedSprite.position.x = mouseX;
    draggedSprite.position.y = mouseY;
  }

  //draw the ghosts
    drawSprites();
    if(frameCount%resistanceRate == 0) {
      if(velocity1 > 0) {
        velocity1 -= resistance;
        if(velocity1<0)velocity1=0;
        boat1.setSpeed(velocity1, direction);
      }
      if(velocity2 > 0) {
        velocity2 -= resistance;
        if(velocity2<0)velocity2=0;
        boat2.setSpeed(velocity2, direction);
      }
      console.log(velocity1, velocity2);

    }
  
}

var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  object1 = createSprite(600, 400, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(400,400,80,30);
  object2.shapeColor = "orange";
  object2.debug = true;
  object3 = createSprite(100,400,50,80);
  object3.shapeColor = "yellow";
  object3.velocityX = 2;
  object4 = createSprite(300,400,50,80);
  object4.shapeColor = "purple";
  object4.velocityX = -2;
}

function draw() {
  background(0,0,0);  
  object2.x = World.mouseX;
  object2.y = World.mouseY;

bounceOff(object3,object1);

  if (isTouching(object1,object2)){

  
    object2.shapeColor = "red";
    object1.shapeColor = "red";
}
  else {
    object2.shapeColor = "orange";
    object1.shapeColor = "green";
  }
  drawSprites();
}


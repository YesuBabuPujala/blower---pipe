var ball, blower, blowermouth;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ball = new Ball(150,50);
  blower = new Blower(300,150);
  blowermouth = new Blowermouth(500, 300);

  button = createCanvas("Click to Blow");
  button.position(width/2, height-100);
  button.class(blowButton);
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  ball.show();
  blower.show();
  blowermouth.show();
}

function blow() {
  Matter.Body.applyForce(ball.body,  {x:0, y:0}, {x:0, y:0.05});
}
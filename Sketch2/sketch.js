function setup() {
  createCanvas(600, 400);
  frameRate(100);
}

function draw() {
  // background(0, 200, 255);
  var headWidth=200;
  var headHeight=headWidth/120*160;
  //draw tongue
  fill(200,0,0);
  ellipse(mouseX, mouseY+headHeight*0.5,headWidth/4,headHeight/4);
  //draw head
  fill(255);
  ellipse(mouseX, mouseY,headWidth,headHeight);
  //draw the nose
  fill(160,120,80);
  ellipse(mouseX, mouseY + headHeight/80*30, headWidth/3, headHeight/8);
  //draw the eyes
  fill(0, 50, 120);
  var eyeWidth=headWidth*0.1;
  ellipse(mouseX-headWidth/3, mouseY, eyeWidth, headHeight*0.2);
  ellipse(mouseX+headWidth/3, mouseY, eyeWidth, headHeight*0.2);
}
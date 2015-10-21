function setup (){
  createCanvas(600,400);
  frameRate(100);
}

function draw (){
   background(0,200,255);
 ellipse(mouseX,mouseY,60,60);
 fill(200,0,0);
 ellipse(mouseX,mouseY+20,20,10);
}
function setup() {
  createCanvas(640, 480);
  noStroke();
}

function draw() {
  if (!mouseIsPressed) {
    var clr = color(random(255), random(255), random(255));
    fill(clr);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
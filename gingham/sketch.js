function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  var clr = color(random(255), random(255), random(255));
  fill(clr);
  var s = 20;
  for (x = 0; x < width; x += 2 * s) {
    for (y = 0; y < height; y += 2 * s) {
      rect(x, y, s, s);
    }
  }
}
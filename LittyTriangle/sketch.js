"use strict"
var mouseClickPoints = [];

function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(255);
  noStroke();
  fill(200, 0, 100, 20);
  rect(0,0,width,height);
  text("" + mouseX + ", " + mouseY, 10, 10);
  // translate(width * 0.5, height * 0.5);
  mouseClickPoints.forEach(function(point) {
    drawTriangle(point.x, point.y, point.r, point.g, point.b, point.alpha);
  });
  drawTriangle(mouseX, mouseY, 255, 255, 255, 255);
}

function drawTriangle(x, y, r, g, b, a) {
  push();
  translate(x, y);
  scale(1, -1);
  var sideLength = 75;
  var yBottom = -sideLength / (2 * sqrt(3));
  var halfLength = sideLength * 0.5;
  fill(r, g, b, a);
  triangle(-halfLength, yBottom, halfLength, yBottom, 0, sideLength * sqrt(3) / 3.0);
  pop();
}

class Point {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.r = randomColorLevel();
    this.g = randomColorLevel();
    this.b = randomColorLevel();
    this.alpha = randomColorLevel() / 2;
  }
}

function randomColorLevel() {
 return Math.floor((Math.random() * 255) + 1)
}

function mouseClicked() {
  mouseClickPoints.push(new Point());
  console.log("number of points = " + mouseClickPoints.length);
}
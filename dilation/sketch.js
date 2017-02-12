"use strict"
var maxCoordinate = 25;
var gridSize;
var tri;
var slider;

function setup() {
  createCanvas(800, 800);
  tri = new Triangle(4, 8, 8, 4, 12, 12);
  gridSize = width / (2.0 * maxCoordinate);
  slider = createSlider(0.25, 4, 1, 0.01);
  slider.position(90, 16);
  slider.style('width', '250px');
}

function draw() {
  background(255);
  textSize(16);
  text("Dilation:", 30, 30);
  text(slider.value(), 360, 30);
  var halfWidth = width * 0.5;
  translate(halfWidth, halfWidth);
  scale(1, -1);

  stroke(0);
  //x-axis
  line(-halfWidth, 0, halfWidth, 0);
  //y-axis
  line(0, -halfWidth, 0, halfWidth);

  //grid
  stroke(0, 30);
  var coordinate = -halfWidth;
  while (coordinate < halfWidth) {
    line(-halfWidth, coordinate, halfWidth, coordinate);
    line(coordinate, -halfWidth, coordinate, halfWidth);
    coordinate += gridSize;
  }

  tri.draw();

}
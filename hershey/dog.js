var Dog = function() {
  this.x = mouseX;
  this.y = mouseY;
};

Dog.prototype.draw = function() {
  var headWidth = 200;
  var headHeight = headWidth / 120 * 160;
  //draw tongue
  fill(200, 0, 0);
  ellipse(this.x, this.y + headHeight * 0.5, headWidth / 4, headHeight / 4);
  //draw head
  fill(255);
  ellipse(this.x, this.y, headWidth, headHeight);
  //draw the nose
  fill(160, 120, 80);
  ellipse(this.x, this.y + headHeight / 80 * 30, headWidth / 3, headHeight / 8);
  //draw the eyes
  fill(0, 50, 120);
  var eyeWidth = headWidth * 0.1;
  ellipse(this.x - headWidth / 3, this.y, eyeWidth, headHeight * 0.2);
  ellipse(this.x + headWidth / 3, this.y, eyeWidth, headHeight * 0.2);
}
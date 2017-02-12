
"use strict"
class Triangle {
  constructor(x0_, y0_, x1_, y1_, x2_, y2_) {
    this.x0 = x0_;
    this.y0 = y0_;
    this.x1 = x1_;
    this.y1 = y1_;
    this.x2 = x2_;
    this.y2 = y2_;
  }
  
  draw(){
    push();
    scale(gridSize, gridSize);
    // strokeWeight(1.0 / gridSize);
    // stroke(66, 244, 197);
    noStroke();
    

    // original triangle 
    fill(66, 244, 197, 45);
    triangle(this.x0, this.y0, this.x1, this.y1, this.x2, this.y2);   
    // dilated triangle 
    fill(223, 66, 244, 45);
    var k = slider.value();
    scale(k, k);
    triangle(this.x0, this.y0, this.x1, this.y1, this.x2, this.y2);
    // line(this.x0, this.y0, this.x1, this.y1);
    pop();
  }
}
var dogs = [];

function setup() {
  createCanvas(600, 400);
  frameRate(100);
}

function draw() {
  background(160, 120, 160);
  // var hershey = new Dog();
  // hershey.draw();
  for (var dogCounter = 0; dogCounter < dogs.length; ++dogCounter) {
   dogs[dogCounter].draw();
  }
}

function mouseClicked() {
  // console.log('you clicked');
  dogs.push(new Dog());
}
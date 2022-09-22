function setup() {
  createCanvas(400, 400);
  strokeWeight(8);
  frameRate(60);
  background(200);
}

function draw() {
  line(mouseX,mouseY,pmouseX,pmouseY)  
  }
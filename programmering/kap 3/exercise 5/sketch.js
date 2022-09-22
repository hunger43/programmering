function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (keyCode===70){
    rect(mouseX,mouseY,50,50)
  }
  if (keyCode===67){
    circle(mouseX,mouseY,60)
  }
  if(keyCode===69){
    ellipse(mouseX,mouseY,50,300)
  }
}

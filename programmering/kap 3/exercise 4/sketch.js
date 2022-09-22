function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(200);
  if (keyCode===70){
    rect(100,300,50,50)
  }
  if (keyCode===67){
    circle(200,100,60)
  }
  if(keyCode===69){
    ellipse(350,200,50,300)
  }

}
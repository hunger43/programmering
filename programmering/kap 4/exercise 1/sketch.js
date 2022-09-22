function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(mouseX<200){
    circle(200,200,50)
  }
    else{
      rect(200,200,50,30)
    }
}

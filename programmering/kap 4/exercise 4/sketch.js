let y;
let justHitRightWall;
let xspeed = 3;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
}

function draw() {
  background(220);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  x += xspeed;
  circle(x, height / 2, 50);
}

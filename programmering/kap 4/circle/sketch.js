let x;
let y;
let a;
let b;
let speed;
let d = 20;
function setup() {
  createCanvas(400, 400);
  x = random(0, width);
  y = random(0, height);
  a = speed;
  b = speed;
}

function draw() {
  background(220);
  circle(x, y, d);
  x += a;
  y += b;
}

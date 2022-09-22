let x = random(0, width);
let y = random(0, height);
let a = speed;
let b = 0;
let d = 20;

function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background(220);
  circle(20, 20, d);
}

function borderCheck() {
  if (x + d / 2 >= width) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
}

let x;
let y;
let x1;
let y1;
let a;
let b;
let d = 20;
let speed = 2;

function setup() {
  createCanvas(400, 400);
  x = random(0, width);
  y = random(0, height);
  x1 = random(0, width);
  y1 = random(0, height);
  x != x1;
  y != y1;
  a = speed;
  b = speed;
}

function draw() {
  background(220);
  circle(x, y, d);
  circle(x1, y1, d + 10);
  x += a;
  y += b;
  keyPressed();
  borderCheck();

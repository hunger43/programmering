let x;
let y;
let x1;
let y1;
let a;
let b;
let a1;
let b1;
let d = 20;
let d1 = 30;
let speed = 2;
let speed1 = 3;

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
  a1 = speed1;
  b1 = speed1;
  keyPressed();
}

function draw() {
  background(220);
  circle(x, y, d);
  circle(x1, y1, d1);//kat
  x += a;
  y += b;
  x1 += a1;
  y1 += b1;

  borderCheck();
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

  if (x1 + d1 / 2 >= width) {
    //bordercheck kat
    a1 = -2;
    b1 = 2;
  }
  if (x1 - d1 / 2 <= 0) {
    a1 = 2;
    b1 = -2;
  }
  if (y1 + d1 / 2 >= height) {
    a1 = -2;
    b1 = -2;
  }
  if (y1 - d1 / 2 < 0) {
    a1 = 2;
    b1 = 2;
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
  if (keyCode === 74) {
    b = 2;
    a = 2;
  }
}

function preload(){
  img=image()
}

function collision() {
  if ( {
    explode;
  }
}

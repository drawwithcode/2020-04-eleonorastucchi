let paint;
let myButton;
let hSlide, sSlide, bSlide;
let h, s, b;
let pg;
let slide;

function preload() {
  paint = loadImage("./assets/images/paint.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);

  background(h, s, b);

  colorMode(HSB);
  //create the sliders
  hSlide = createSlider(0, 360, 360);
  sSlide = createSlider(0, 100, 100);
  bSlide = createSlider(0, 100, 0);
  slide = createSlider(0, 70, 20);

  //position the sliders
  hSlide.position(windowWidth / 60, windowHeight * 3 / 20);
  sSlide.position(windowWidth / 60, windowHeight * 6 / 20);
  bSlide.position(windowWidth / 60, windowHeight * 9 / 20);
  slide.position(windowWidth / 60, windowHeight * 12 / 20);

  //slider size
  hSlide.size(120);
  sSlide.size(120);
  bSlide.size(120);
  slide.size(120);


  // variables to hold the color
  h = 180;
  s = 50;
  b = 50;

  p1 = createP("Move the sliders to customize the canvas");
  p1.position(windowWidth / 2.5, windowHeight * 8.9 / 10);

  p2 = createP("Click Save to download your new desktop background");
  p2.position(windowWidth / 2.7, windowHeight * 9.1 / 10);

  p3 = createP("Hue");
  p3.position(windowWidth / 60, windowHeight * 3.3 / 20);

  p4 = createP("Saturation");
  p4.position(windowWidth / 60, windowHeight * 6.3 / 20);

  p5 = createP("Brightness");
  p5.position(windowWidth / 60, windowHeight * 9.3 / 20);

  p6 = createP("Circles");
  p6.position(windowWidth / 60, windowHeight * 12.3 / 20);

  push();
  myButton = createButton("Save");
  myButton.position(windowWidth / 18.5 - myButton.width / 2, windowHeight * 7.9 / 9 - myButton.height / 2);
  myButton.mousePressed(printBackground);
  pop();

}

function draw() {

  push();
  h = hSlide.value();
  s = sSlide.value();
  b = bSlide.value();

  pg.background(h, s, b);
  pop();

  for (let scl = 0; scl < slide.value(); scl++) {

    image(pg, windowWidth / 2, windowHeight / 2);

    push();
    pg.noFill();
    pg.strokeWeight(1);
    pg.stroke("white");
    pg.ellipse(windowWidth / 2, windowHeight / 2.1, scl * 10, scl * 10);
    pop();

    push();
    pg.noFill();
    pg.strokeWeight(1);
    pg.stroke("black");
    pg.ellipse(windowWidth / 3, windowHeight / 2.1, scl * 10, scl * 10);
    pop();

    push();
    pg.noFill();
    pg.strokeWeight(1);
    pg.stroke("black");
    pg.ellipse(windowWidth / 1.5, windowHeight / 2.1, scl * 10, scl * 10);
    pop();

  }

  imageMode(CENTER);
  image(paint, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function printBackground() {
  save(pg, "NewBackground.png");
}

// costanti
let capture;
let myMeme;
let myInput;

function preload() {
  // image
  myMeme = loadImage("./assets/image/3.png");
}

function setup() {
  //video
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();

  // to write
  p1 = createP("Write here your meme");
  p1.position(windowWidth / 25, windowHeight / 10);

  //to save
  p2 = createP("Click ENTER to save your meme");
  p2.position(windowWidth / 25, windowHeight * 10 / 13);

  // button
  buttonStart = createButton("Click here to get back to start");
  buttonStart.position(windowWidth / 25, windowHeight * 11 / 13);
  buttonStart.mousePressed(nextStep);

  //my input
  myInput = createInput("");
  myInput.position(windowWidth / 25, windowHeight * 2 / 13);
}

function draw() {
  // webcam
  if (capture.loadedmetadata) {
    push();
    imageMode(CENTER);
    translate(windowWidth / 2, windowHeight / 2);
    scale(-1, 1);
    image(capture, 0, 0, width, width * capture.height / capture.width);
    pop();
  }
  //image
  imageMode(CENTER);
  image(myMeme, windowWidth / 2, windowHeight / 2, 1712 * 1.1, 1032 * 1.1);

  //text
  push();
  fill("white");
  strokeWeight(5);
  stroke("black");
  textSize(50);
  textFont("Coda Caption");
  textAlign(CENTER);
  text(myInput.value(), windowWidth / 2, windowHeight * 8 / 9);
  pop();
}

// to get back to the start
function nextStep() {
  window.open("index.html", "_self");
}

// to save
function keyPressed() {
  if (keyCode == ENTER) save("Meme3.jpg");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

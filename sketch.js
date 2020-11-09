// costanti
let myFace;
let myText;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  // put setup code here
  background("purple");
  myFace = loadImage("./assets/image/face.png");

  // button
  buttonStart = createButton("Click to start");
  buttonStart.position(windowWidth * 3 / 7, windowHeight * 6 / 7);
  buttonStart.mousePressed(nextStep);
}

function draw() {
  // put drawing code here
  // image
  imageMode(CENTER);
  image(myFace, windowWidth / 2, windowHeight / 2, windowWidth / 3, windowHeight / 2);

  // text
  push();
  let myText = "Welcome to the purple meme photobooth"
  fill("white");
  strokeWeight(5);
  stroke("black");
  textSize(50);
  textFont("Coda Caption");
  textAlign(CENTER);
  text(myText, windowWidth / 2, windowHeight / 6);
  pop();
}

// to next step
function nextStep() {
  window.open("main.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

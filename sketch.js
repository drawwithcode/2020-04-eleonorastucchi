let myText = "Enter password";
let myImage;
let inp;

function preload() {
  myImage = loadImage("./assets/images/myimage.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 128, 130);


  let inp = createInput('');
  inp.input(myInputEvent);
  inp.position(windowWidth / 2 - inp.width / 2, windowHeight * 3.4 / 5);

}


function draw() {

  push();
  fill(0, 128, 130);
  noStroke();
  rect(windowWidth / 2.2, windowHeight * 3.25 / 5, 150, 30)
  pop();

  imageMode(CENTER);
  image(myImage, windowWidth / 2, windowHeight / 2, myImage.width / 2, myImage.height / 2);

  push();
  textFont("Arimo");
  stroke("black")
  strokeWeight(0.7)
  textSize(17);
  fill("black");
  text(myText, windowWidth / 2.15, windowHeight * 3.35 / 5);
  pop();
}


function keyPressed() {
  if (keyCode == ENTER) {
    window.open("index1.html", "_self");
  }
}

function myInputEvent() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

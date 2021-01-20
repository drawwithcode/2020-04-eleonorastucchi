let gray_bar;
let icon;
let buttonIcon;
let sound;

function preload() {
  gray_bar = loadImage("./assets/images/gray_bar.png");
  icon = loadImage("./assets/images/icon.png");
  sound = loadSound("./assets/sounds/enter_sound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 128, 130);

  sound.setVolume(0.10);
  sound.play();


  //buttonIcon
  push();
  buttonIcon = createButton("Create your background image");
  buttonIcon.position(windowWidth / 2.04 - buttonIcon.width / 2, windowHeight / 1.55 - buttonIcon.height / 2);
  buttonIcon.mousePressed(newSketch1);
  pop();
}

function draw() {
  imageMode(CENTER);
  image(gray_bar, windowWidth / 2, windowHeight * 25 / 26, windowWidth, gray_bar.height / 2.79);
  image(icon, windowWidth / 2, windowHeight / 2, icon.width / 2, icon.height / 2);
}


function newSketch1() {
  window.open("index2.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

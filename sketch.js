function setup() {
  createCanvas(windowWidth, windowHeight) .position(0,0) .style('z-index',-1);
  createA("https://github.com/DaphneMoreno","Mi GitHub! :3","_blank").id("miGH");
 textSize(100);
}

function draw() {
  text("✨", mouseX, mouseY);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  }

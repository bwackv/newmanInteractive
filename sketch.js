var linex = 5;
var linex2 = 505;

function setup() {
  createCanvas (800,400);
}

function draw() {
background(200,0,200);
	fill(102,0,0);
	stroke(230);
	rect(5,5, 790,390);
  strokeWeight(10);
  stroke(39,25,24);
  line(linex,15,linex,385); //300,15,300,385
	strokeWeight(10);
  stroke(198,140,67);
line(linex2,15,linex2,385);

}

function mousePressed(){
  if  (linex == 5){
    linex = random(5,500);
  } else {
    linex = 5;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    linex2 = random(505,800);
  } else if (keyCode === RIGHT_ARROW) {
    linex2 = random(505,800);
  }
}

//how do I randomize the colors with every keypress/mousepress?

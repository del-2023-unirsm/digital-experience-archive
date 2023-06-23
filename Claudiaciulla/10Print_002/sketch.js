

let x = 0;
let y = 0;
let d = 50;
strokeSize=5;


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
 
}

function draw() {
   stroke(255);
   strokeWeight(strokeSize);
   if(random(1) < 0.4){
      point(x+d/2,y+d);
    }
    else{
      
      line(x + strokeSize,y + d,x + d - strokeSize,y + d);
    }
  x += d;
  if (x > width) {
    x = 0;
    y +=  d;
  }
 
  
  if (y > height) {
    background(0);
    strokeSize=strokeSize-2;
 
    x=0;
    y = 0;
  }

}

function mousePressed() {
  background(0);
    strokeSize=strokeSize+2;
  
    x=0;
    y = 0;
    }
  


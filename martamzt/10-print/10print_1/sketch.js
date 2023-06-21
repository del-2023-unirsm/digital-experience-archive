// Marta Mezzetti @martamzt © 2023 MIT License
// 10 print porting to P5js | Venezia, IT | 6.2023

// inspired by Daniel Shiffman - Coding Train
// https://editor.p5js.org/codingtrain/full/YBL4TaBkW
// https://www.youtube.com/watch?v=bEyTZ5ZZxZs

function setup() {
  createCanvas(400, 400);
  frameRate(1); // 1 frame al secondo
}

function draw() {
  background(0);
  
  // creo una griglia delle dimensioni della canvas, 20x20
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      
      // creo una funzione simile al 10print
      if (random() > 0.5) {
        // lascio spazio nero
        fill(0);
      } else {
        // disegno cerchio bianco
        fill(255);
        ellipse(x + 10, y + 10, 15, 15);
      }
    }
  }
}

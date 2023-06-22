var x = 0;
var y = 0;
var g = 50; // griglia di base
var sfondo = 0;
var forma;

function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();

  // lancia il dado e disegna la forma corrispondente
  if (testa()) {
    fill(0);
    if (forma === 'circle') {
      ellipse(x + g / 2, y + g / 2, g);
    } else {
      rect(x + g / 2, y + g / 2, g);
    }
  } else {
    fill(255);
    if (forma === 'circle') {
      ellipse(x + g / 2, y + g / 2, g);
    } else {
      rect(x + g / 2, y + g / 2, g);
    }
  }

  // vai alla casella sucessiva
  x = x + g;

  // se la riga è completa vai alla sucessiva
  if (x >= width) {
    x = 0;
    y = y + g;
  }

  // quando la y raggiunge la lunghezza della finestra si ricomincia da capo
  // e cancella le linee disegnate finora
  if (y >= height) {
    background(255);
    x = 0;
    y = 0;
    g = g / 1.5;
  }
}

// funzione stile dado a due facce
//se il risultato della funzione che lancia la monetina è vero 
// la linea andrà da sinistra a destra
// se è falso andrà da destra a sinistra
function testa() {
  if (random(2) <= 1) {
    return true; // testa
  } else {
    return false; // croce
  }
}

// al click cambia forma e colore di sfondo
function mousePressed() {
  if (forma === 'rect') {
    forma = 'circle';
  } else {
    forma = 'rect';
  }
  
  if (sfondo === 0) {
    sfondo = 255;
  } else {
    sfondo = 0;
  }
  
  background(sfondo);
}


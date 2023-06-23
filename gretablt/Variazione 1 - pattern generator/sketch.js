let x;
let y;
let g = 20;
let colori = [];
let nuovoPatternBottone;
let downloadBottone;
let patternCompleted = false;

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  
  // Draw the initial pattern without clicking the button
  creaPalette();
  disegnaPattern();

  nuovoPatternBottone = createButton('Reload Pattern');
  nuovoPatternBottone.position(50, height + 50);
  nuovoPatternBottone.mousePressed(reloadPattern);

  downloadBottone = createButton('Download Image');
  downloadBottone.position(250, height + 50);
  downloadBottone.mousePressed(scaricaImmagine);
}

//bottone per ridisegnare pattern
function reloadPattern() {
  patternCompleted = false;
  x = 0;
  y = 0;
  background(220);
  disegnaPattern();
}

function scaricaImmagine() {
  saveCanvas('pattern', 'png');
}

function draw() {
  //non voglio che continui a disegnare, deve ricaricare il pattern al click del bottone
}

//sposto tutto ciò che c'è new draw in questa funzione così il pattern non si aggiorna in automatico ma solo al click del bottone
function disegnaPattern() {
  if (patternCompleted) {
    return;
  }
  
  while (y < height) {
    // lancia il dado e disegna la forma corrispondente
    let formaSelezionata = floor(random(4));
    let coloreSelezionato = floor(random(colori.length));
    let fillColor = colori[coloreSelezionato];
    
    fill(fillColor);
    
    if (formaSelezionata === 0) {
      ellipse(x + g / 2, y + g / 2, g);
    } else if (formaSelezionata === 1) {
      rect(x + g / 2, y + g / 2, g);
    } else if (formaSelezionata === 2) {
      rect(x + g / 2 - 1, y, 2, g);
    } else {
      ellipse(x + g / 2, y + g / 2, 2);
    }
    
    x = x + g;
    
    // se la riga è completa vai alla successiva
    if (x >= width) {
      x = 0;
      y = y + g;
      break; // esce dal ciclo per disegnare una riga alla volta
    }
  }
  
  // quando la y raggiunge la lunghezza della finestra, il pattern è completato
  if (y >= height) {
    patternCompleted = true;
  }
}

function creaPalette() {
  colori = [
    color(0),   // black
    color(255)  // white
  ];
}

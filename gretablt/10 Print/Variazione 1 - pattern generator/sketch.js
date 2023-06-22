// 10print 0.1 by gretablt
// 2022 © gretablt Daniele @Fupete and the course DS-2023 at DESIGN.unirsm 
// github.com/ds-2023-unirsm — github.com/fupete
// Educational purposes, MIT License, 2023, San Marino

var x;
var y;
let g = 20;
let colori = [];
let nuovoPatternBottone;
let downloadBottone;
let formaSelezionata;
let coloreSelezionato;

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  
  //disegno il primo pattern senza che sia necessario cliccare sul bottone
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
  creaPalette(); // crea una nuova palette
  disegnaPattern(); // ricarica il pattern
}

//bottone per scaricare png
function scaricaImmagine() {
  saveCanvas('pattern', 'png');
}


function draw() {
  //non voglio che continui a disegnare, deve ricaricare il pattern al click del bottone
}


//sposto tutto ciò che c'è new draw in questa funzione così il pattern non si aggiorna in automatico ma solo al click del bottone
function disegnaPattern() {
  background(220);
  
  for (x = 0; x < width; x += g) {
    for (y = 0; y < height; y += g) {
      formaSelezionata = floor(random(4)); // Seleziona una forma a caso
      coloreSelezionato = floor(random(colori.length)); // Seleziona un colore a caso (credo)
      
      fill(colori[coloreSelezionato]);
      
      if (formaSelezionata < 1) {
        ellipse(x + g/2, y + g/2, 10, 10); // cerchi
      } else if (formaSelezionata < 2) {
        rect(x + g/2 - 5, y + g/2 - 5, 10, 10); // quadrati
      } else if (formaSelezionata < 3) {
        rect(x + g/2 - 1, y, 2, g); // linee verticali
      } else {
        ellipse(x + g/2, y + g/2, 2, 2); // puntini
      }
    }
  }
}

function testa() {
  if (random(2) <= 1) {
    return true; // testa
  } else {
    return false; // croce
  }
}

function creaPalette() {
  colori = [
    color(0),   // nero
    color(255)  // bianco
  ];
}



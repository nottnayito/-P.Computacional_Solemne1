function setup() {
  createCanvas(420, 520); // Lienzo ajustado
  noLoop();
}

function draw() {
  background(248, 248, 248);
  noStroke();

  // Cuadraditos de colores
  rectMode(CENTER);

  // cuadrado Verde Superior
  fill(85, 175, 45);
  push();
  translate(140, 150);
  rotate(radians(120));
  rect(0, 0, 110, 110);
  pop();

  // cuadrado amarillo
  fill(255, 185, 0);
  push();
  translate(250, 100);
  rotate(radians(-18));
  rect(0, 0, 110, 110);
  pop();

  // cuadrado Rosa
  fill(235, 60, 150);
  push();
  translate(200, 335);
  rotate(radians(-8));
  rect(0, 0, 95, 95);
  pop();

  // cuadrado Rojo
  fill(240, 60, 40);
  push();
  translate(100, 285);
  rotate(radians(-30));
  rect(0, 0, 110, 110);
  pop();

  //  cuadrado Morado
  fill(80, 40, 130);
  push();
  translate(325, 325);
  rotate(radians(15));
  rect(0, 0, 110, 110);
  pop();

  // cuadrado Verde Inferior
  fill(75, 160, 40);
  push();
  translate(220, 435);
  rotate(radians(25));
  rect(0, 0, 110, 110);
  pop();

  // abejita (negro)
  // Cuerpito (rayitas negras)
  rectMode(CORNER);
  fill(0);
  push();
  translate(235, 170);
  rotate(radians(15));
  let barW = 55;
  let barH = 12;
  let gap = 10;
  for (let i = 0; i < 4; i++) {
    rect(0, i * (barH + gap), barW, barH);
  }
  pop();

  //Puntos grises den rectangulo
  function drawDottedWing(x, y, rot) {
    push();
    translate(x, y);
    rotate(radians(rot));
    fill(100); // Color gris de los puntos

    let wingWidth = 55; // Ancho
    let wingHeight = 90; // Alto
    let dotSpacing = 2; // Espacio entr3 puntos

    // cuadricula de los puntos
    for (let i = -wingWidth / 2; i < wingWidth / 50; i += dotSpacing) {
      for (let j = -wingHeight / 2; j < wingHeight / 30; j += dotSpacing) {
        ellipse(i, j, 2, 2);
      }
    }
    pop();
  }

  // Alitas (Gris puntitos)
  drawDottedWing(183, 205, 150); // izquierda
  drawDottedWing(280, 250, 70); // derecha

  // Ojitos (circulitos)
  ellipse(226, 262, 20, 20);
  ellipse(250, 268, 20, 20);

  // texto mini
  fill(0);
  textAlign(LEFT);
  textSize(7); // tamaño
  let textX = 295;
  text("Tokyo\nCommunication\nArts", textX, 390);
  text("Osaka\nCommunication\nArts", textX, 420);
}

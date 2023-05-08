function setup() {
    createCanvas(400, 400);
    background(220);
    
    // definimos un color original
    let colorOriginal = color(255, 0, 0);
    
    // desaturamos el color original en una escala del 0% al 100%
    for (let i = 0; i <= 100; i+=10) {
      let colorDesaturado = colorOriginal;
      colorDesaturado = colorDesaturado.levels.map(level => lerp(level, 128, i/100));
      colorDesaturado = color(colorDesaturado);
      
      // dibujamos un rectángulo con el color desaturado
      fill(colorDesaturado);
      rect(50 + i, 50, 50, 100);
    }
  }
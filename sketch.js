let formas = [];
let cantidad = 6;
let r;
let b;
let filtrito;
let miPaleta;

function preload() {
  miPaleta = new Paleta("data/pdecolores.png");
  filtrito = "data/filtro.png";
  for (let i = 1; i < cantidad; i++) {
    let nombre = "data/formas_00" + i + ".png";
    formas[i] = loadImage(nombre);
  }
}

function setup() {
  createCanvas(1080, 1920);
  imageMode(CENTER);
  background(50);
      let circulos = new Circulos(); 
      let ovalos = new Ovalo();
      let raris = new Rari();
      let triangulos = new Trianglo();
      let cuadrados = new Cuadrado();
}

function draw() {
  if (mouseIsPressed) {
    let colorFondo = miPaleta.darColor();
    background(red(colorFondo), green(colorFondo), blue(colorFondo));
    let circulos = new Circulos();
    let ovalos = new Ovalo();
    let raris = new Rari();
    let triangulos = new Trianglo();
    let cuadrados = new Cuadrado();

    ovalos.colorActual = miPaleta.darColor();
    circulos.colorActual = miPaleta.darColor();
    raris.colorActual = miPaleta.darColor();
    triangulos.colorActual = miPaleta.darColor();
    cuadrados.colorActual = miPaleta.darColor();
  }
}





// let formas = [];
// let cantidad = 6;
// let r;
// let b;
// let bandera=1;
// let filtrito;
// let miPaleta;


// function preload(){
//   miPaleta = new Paleta( "data/pdecolores.png" );
//   filtrito = "data/filtro.png";
//     for( let i=1 ; i<cantidad ; i++){
//       let nombre = "data/formas_00"+i+".png";
//       formas[i] = loadImage( nombre );
//     }
    
//   }

// function setup() 
// {
//    	createCanvas(1080, 1920);
//     // colorMode(HSB,255,255,255,255);
//     imageMode( CENTER );
//     background(20);
// }

// function draw(){
  
// /*if(bandera){
//     let esteColor =  miPaleta.darColor();
//       circulos= new Circulos();
//       cuadrado = new Cuadrado  ();
//       ovalo = new Ovalo();
//       rari = new Rari();
//       triangulo = new Trianglo();

//     bandera = 0;

// }*/
// if (mouseIsPressed) {
//   let circulos = new Circulos();
//   circulos.colorActual = miPaleta.darColor();
// }

// /*if (keyIsPressed === true) {
//   bandera = 1;
// } else {
//   bandera = 0;
// }*/
// }

// r= map(mouseX,0,1080,0,30);
// b= map(mouseY,0,1080,40,0);
// background(r,20,b);

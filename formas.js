
let numCantidad = 15;
let opacidad= 250;


class Circulos{
    
    constructor() {
        let posY1 = 100;
        let posY2 = 300;
        let posY3 = 950;
        let posY4 = 1750;
        let opacidad = 255;
        let rand = int(random(20, 80));
        let tamI1 = 100;
        let tamI2 = 250;
        let esteColor = miPaleta.darColor();
    
        // Nuevas propiedades
       // let cambioColor = false;
        let colorActual = esteColor;
    
        for (let i = 0; i < numCantidad; i++) {
            
              tint(red(colorActual), green(colorActual), blue(colorActual), opacidad);

          image(formas[1], 150, posY1, tamI1, tamI1);
          posY1 = posY1 + rand;
    
          image(formas[1], 870, posY2, tamI2, tamI2);
          posY2 = posY2 + rand;
    
          image(formas[1], 125, posY3, tamI2, tamI2);
          posY3 = posY3 + rand;
    
          image(formas[1], 600, posY4, tamI1, tamI1);
          posY4 = posY4 + rand;
    
          opacidad = opacidad - 15;
          tamI1 = int(random(50, 150));
          tamI2 = int(random(50, 300));
     
        }
      }
} 
// function mouseClicked() {
//     let circulos = new Circulos();
//     circulos.colorActual = miPaleta.darColor();
//   }

//
class Ovalo{
    constructor(){
        let posY1=500;
        let posY2=850;
        let posY3=1200;
        let opacidad= 200;
        let rand= int(random(20,80));
        let tamI1=100;
        let tamI2=250;
        let esteColor =  miPaleta.darColor();
        for(let i = 0; i < numCantidad; i++){
            tint( red(esteColor) , green(esteColor) , blue(esteColor) , opacidad );

            image(formas[2],700,posY1,tamI1,tamI1);
            posY1=posY1+rand;

            image(formas[2],320,posY2,tamI2,tamI2);
            posY2=posY2+rand;

            image(formas[2],900,posY3,tamI2,tamI2);
            posY3=posY3+rand;

            opacidad=opacidad-15;
            tamI1=int(random(50,150));
            tamI2=int(random(50,300));
        }
    }
}
class Rari{
    constructor(){
        let posY1=720;
        let posY2=1440;
        let posY3=1700;
        let opacidad= 200;
        let rand= int(random(20,80));
        let tamI1=200;
        let tamI2=250;
        let tamI3=300;
        let esteColor =  miPaleta.darColor();
        for(let i = 0; i < numCantidad; i++){
            tint( red(esteColor) , green(esteColor) , blue(esteColor) , opacidad );

            image(formas[3],540,posY1,tamI1,tamI1);
            posY1=posY1+rand;

            image(formas[3],320,posY2,tamI2,tamI2);
            posY2=posY2+rand;

            image(formas[3],900,posY3,tamI3,tamI3);
            posY3=posY3+rand;

            opacidad=opacidad-15;
            tamI1=int(random(50,150));
            tamI2=int(random(50,300));
        }

    }
}

class Trianglo{
    constructor(){
        let posY1=100;
        let posY2=900;
        let posY3=1300;
        let opacidad= 200;
        let rand= int(random(20,80));
        let tamI1=200;
        let tamI2=200;
        let tamI3=250;
        let tamI4=300;
        let esteColor =  miPaleta.darColor();
        for(let i = 0; i < numCantidad; i++){
            tint( red(esteColor) , green(esteColor) , blue(esteColor) , opacidad );

            image(formas[4],590,posY1,tamI2,tamI2);
            posY1=posY1+rand;
            image(formas[4],800,posY2,tamI3,tamI3);
            posY2=posY2+rand;
            image(formas[4],180,posY3,tamI1,tamI1);
            posY3=posY3+rand;
            opacidad=opacidad-15;
            tamI1=int(random(50,150));
            tamI2=int(random(50,300));

    }
}
}
class Cuadrado{
    constructor(){
        let posY1=400;
        let posY2=1100;
        let posY3=1300;
        let posY4=1700;
        let opacidad= 200;
        let rand= int(random(20,80));
        let tamI1=100;
        let tamI2=300;
        let esteColor =  miPaleta.darColor();
        for(let i = 0; i < numCantidad; i++){
            tint( red(esteColor) , green(esteColor) , blue(esteColor) , opacidad );

            image(formas[5],300,posY1,tamI2,tamI2);
            posY1=posY1+rand;
            image(formas[5],520,posY2,tamI1,tamI1);
            posY2=posY2+rand;
            image(formas[5],250,posY3,tamI1,tamI1);
            posY3=posY3+rand;
            image(formas[5],900,posY3,tamI2,tamI2);
            posY4=posY4+rand;
            opacidad=opacidad-15;
            tamI1=int(random(50,150));
            tamI2=int(random(50,300));
    }
}
}

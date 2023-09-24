// let num1 = prompt("ingrese un numero");
// num1 = parseInt(num1);

// let num2 = prompt("ingrese otro numero");
// num2 = parseInt(num2)

// let suma = num1 + num2;

// console.log("resultado: " + suma);

// alert("Resultado " + suma);

//If//

// Inicio de  la consola interactiva(Preentrega 1)

let apellido = prompt("Ingresa tu apellido");
let nombre = prompt("Ingresa tu nombre");

// const productos = [
//     { carrito: "Pizza", precio: 50},
//     { carrito: "Pollo frito", precio: 40},
//     { carrito: "Rolls", precio: 30},
// ];

let pregunta = prompt("Hola "+nombre+" "+apellido+" , te gustaria comprar en nuestra tienda?")

while(pregunta != "si" && pregunta != "no" && pregunta != "Si" && pregunta != "No"){
    alert("Debe escribir si o no")
    pregunta = prompt("Hola "+nombre+" "+apellido+" , te gustaria comprar en nuestra tienda?")  
}

if(pregunta == "si" || pregunta == "Si"){
    alert(" Disculpa "+nombre+", pronto tendremos las opciones para mostrar nuestros productos. Muchas gracias")
}
else if(pregunta == "no" || pregunta == "No"){
    alert(" Muchas gracias "+nombre+"  por pasar por nuestra tienda. Esperamos la proxima vez nos compre")
}

let cuestionario = parseInt(prompt("Cuantos años tienes?"))
if( cuestionario >= 18){
    alert("Eres mayor de edad, "+nombre+"")
}
else if( cuestionario < 18){
    alert(" "+nombre+", Debes contar con la supervision de un adulto para poder comprar en la web")
}
//Fin de la consola interactiva(Preentrega 1)


// let edad = parseInt(prompt("Ingresa tu edad"))
// let añoActual = parseInt("2023");
// let jubilacion = parseInt("65");

// let calculo = jubilacion - edad;
// let jubilo = añoActual + calculo;


// if( edad < 65){
//     alert("Hola "+nombre+" "+apellido+" Aun te quedan  "+calculo+" años para jubilarte" );
// }
// else{
//     alert("Hola "+nombre+" "+apellido+" ya estas jubilado");
// }

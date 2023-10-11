// Inicio de  la consola interactiva(Preentrega 2)

let apellido = prompt("Ingresa tu apellido");
let nombre = prompt("Ingresa tu nombre");

let pregunta = prompt("Hola "+nombre+" "+apellido+" , te gustaria comprar en nuestra tienda?")

while(pregunta.toLowerCase() != "si" && pregunta.toLowerCase() != "no"){
    alert("Debe escribir si o no")
    pregunta = prompt("Hola "+nombre+" "+apellido+" , te gustaria comprar en nuestra tienda?")  
}

if(pregunta.toLowerCase() == "si"){
    alert(""+nombre+", Aca estan todos nuestros productos y nuestros precios")
    const productos = [
        { carrito: "Pizza muzzarella", precio: 500},
        { carrito: "Pizza pepperoni", precio: 750},
        { carrito: "3 piezas de Pollo frito", precio: 300},
        { carrito: "Rolls", precio: 200},
        { carrito: "2 Pizza muzzarela + Refresco 1lt", precio: 750},
        { carrito: "Combo de 5 piezas de Pollo + Refresco 600ml", precio: 650},
        {carrito: "2x1 en Pizzas(solo lunes y martes", precio: 500},
        {carrito: "4x3 en Postres", precio: 600}
    ];

    let listaProductos = productos.map(producto => `${producto.carrito} - $${producto.precio.toFixed(2)}`).join('\n');

    // La lista en un alert
    alert("Lista de Productos:\n" + listaProductos);
    // La lista en la consola
     console.log("Lista de Productos:");
        productos.forEach(function(producto) {
            console.log(`${producto.carrito} - $${producto.precio}`);});
}    

else if(pregunta.toLowerCase() == "no"){
    alert(" Muchas gracias "+nombre+"  por pasar por nuestra tienda. Esperamos la proxima vez nos compre")
}

let 
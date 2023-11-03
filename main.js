// Inicio de  la consola interactiva(Preentrega 2)
// preentrega 3
document.getElementById('userInfoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const compra = document.getElementById('compra').value.toLowerCase();
    
    if (compra === 'si') {
        alert(`${nombre} ${apellido}, aquí están todos nuestros productos y precios`);
        const productos = [
            { carrito: "Pizza muzzarella", precio: 500 },
            { carrito: "Pizza pepperoni", precio: 750 },
            { carrito: "3 piezas de Pollo frito", precio: 300 },
            { carrito: "Rolls", precio: 200 },
            { carrito: "2 Pizza muzzarella + Refresco 1lt", precio: 750 },
            { carrito: "Combo de 5 piezas de Pollo + Refresco 600ml", precio: 650 },
            { carrito: "2x1 en Pizzas (solo lunes y martes)", precio: 500 },
            { carrito: "4x3 en Postres", precio: 600 }
        ];

        let listaProductos = productos.map(producto => `${producto.carrito} - $${producto.precio.toFixed(2)}`).join('\n');

        alert("Lista de Productos:\n" + listaProductos);

        console.log("Lista de Productos:");
        productos.forEach(producto => {
            console.log(`${producto.carrito} - $${producto.precio}`);
        });
    } else if (compra === 'no') {
        alert(`Muchas gracias ${nombre} ${apellido} por pasar por nuestra tienda. Esperamos que la próxima vez compres con nosotros.`);
    } else {
        alert("Debe escribir 'si' o 'no'");
    }
});
//preentrega

//actividad



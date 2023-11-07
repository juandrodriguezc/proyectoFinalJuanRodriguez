// Inicio de  la consola interactiva(Preentrega 2)
// preentrega 3
const formulario = document.getElementById('formUser');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const compra = document.getElementById('compra').value.toLowerCase();
    
    // Si el usuario escoge si
    if (compra === 'si') {
        const usuarioId = `${nombre}-${apellido}`;
        const storedDataJSON = localStorage.getItem('userData');
        const storedData = storedDataJSON ? JSON.parse(storedDataJSON) : {};


        storedData[usuarioId] = { nombre, apellido, compra };
        localStorage.setItem('userData', JSON.stringify(storedData));

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
        
        formulario.reset();
        //informacion del usuario y los productos


        //Mostrando la Lista de productos desde un alert y un Console.log
        let listaProductos = productos.map(producto => `${producto.carrito} - $${producto.precio.toFixed(2)}`).join('\n');
        alert("Lista de Productos:\n" + listaProductos);
        console.log("Lista de Productos:");
        productos.forEach(producto => {
        console.log(`${producto.carrito} - $${producto.precio}`);
        });
        //Caso en el que el usuario escoge no
    } else if (compra === 'no') {
        alert(`Muchas gracias, ${nombre} ${apellido} por pasar por nuestra tienda. Esperamos que la próxima vez compres con nosotros.`);
        //Eliminar los datos si el usuario dice que no
        localStorage.removeItem('userData');
        localStorage.removeItem('productos');
        formulario.reset();
    // Caso en el que el usuario no escoge ni si ni no
} else {
        alert("Debe escribir 'si' o 'no'");
    }
});

if (compra === 'si') {
    const productosJSON = localStorage.getItem('productos');
    const productos = JSON.parse(productosJSON);
}

//preentrega

//actividad



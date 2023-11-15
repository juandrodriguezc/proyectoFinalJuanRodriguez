// Proyecto final
const formulario = document.getElementById('formUser');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const compra = document.getElementById('compra').value.toLowerCase();
//Productos
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

    const listaProductos = productos.map(producto => `${producto.carrito} - $${producto.precio.toFixed(2)}`).join('\n');

    // Info del usuario
    const usuarioId = `${nombre}-${apellido}`;
    const storedDataJSON = localStorage.getItem('userData');
    const storedData = storedDataJSON ? JSON.parse(storedDataJSON) : {};

    storedData[usuarioId] = { nombre, apellido, compra };
    localStorage.setItem('userData', JSON.stringify(storedData));

    //En caso de que el usuario escriba ¨si¨
    if (compra === 'si') {
        // Mostrar la lista de productos utilizando SweetAlert
        swal({
            title: "Productos en el Carrito",
            text: `¡Gracias, ${nombre} ${apellido}! Aquí está la lista de productos y precios:\n\n${listaProductos}`,
            icon: "info",
            button: "OK",
        });

        productos.forEach(producto => {
        console.log(`${producto.carrito} - $${producto.precio}`);
        });

        formulario.reset();

    //En caso de que el usuario escriba ¨no¨
    } else if (compra === 'no') {
        
        swal({
            title: "Gracias por visitarnos",
            text: `Muchas gracias, ${nombre} ${apellido} por pasar por nuestra tienda. Esperamos que la próxima vez compres con nosotros.`,
            icon: "info",
            button: "OK",
        });
        // Eliminar los datos si el usuario dice que no
        localStorage.removeItem('userData');
        localStorage.removeItem('productos');
        formulario.reset();
        //En caso de que el usuario no escriba ni ¨si¨ ni ¨no¨
    } else {
        swal("Error", "Debe escribir 'si' o 'no'", "error");
    }
});



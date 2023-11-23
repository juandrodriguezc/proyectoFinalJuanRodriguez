// Proyecto final

const formulario = document.getElementById('formUser');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const compra = document.getElementById('compra').value.toLowerCase();
//Productos
fetch('./js/productos.json')
        .then(response => response.json())
        .then(productos => {
            
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
        swal.fire({
            title: "Productos en el Carrito",
            text: `¡Gracias, ${nombre} ${apellido}! Aquí está la lista de productos y precios:\n\n${listaProductos}`,
            icon: "success",
            button: "OK",
        });

        productos.forEach(producto => {
        console.log(`${producto.carrito} - $${producto.precio}`);
        });

        formulario.reset();

    //En caso de que el usuario escriba ¨no¨
    } else if (compra === 'no') {
        
        swal.fire({
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
        swal.fire("Error", "Debe escribir 'si' o 'no'", "error");
    }

})
.catch(error => {
    console.error('Error al obtener los productos:', error);
    swal.fire("Error", "Hubo un problema al cargar los productos. Por favor, inténtalo de nuevo más tarde.", "error");
});
});
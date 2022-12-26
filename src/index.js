document.addEventListener("DOMContentLoaded", () => {
    pintarProducto();
    
    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
        actualizarCarrito(carrito);
        contadorCarrito.innerText = carrito.length;
    }
})
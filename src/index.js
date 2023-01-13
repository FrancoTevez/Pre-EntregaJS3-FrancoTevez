document.addEventListener("DOMContentLoaded", () => {
    pintarProducto();
    
    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
        actualizarCarrito(carrito);
        contadorCarrito.innerText = carrito.length;
    };
    if (localStorage.getItem('historial')) {
        historial = obtenerHistorialStorage();
        actualizarHistorial(historial);
    };
});
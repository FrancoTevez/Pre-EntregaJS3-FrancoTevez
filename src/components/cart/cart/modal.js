const carritoIcono = document.getElementById("carritoIcono");
const modal = document.getElementById("modal");
const sideBar = document.getElementById("sideBarCarrito");
const cruzCarrito = document.getElementById("cerrarCarrito");

//Al abrir el modal de carrito
carritoIcono.addEventListener("click" , () => {
    sideBar.style.transform = "translateY(0px)"
    modal.style.visibility = "visible"
    cruzCarrito.style.opacity = "1"
    cruzCarrito.style.display = "block"
    actualizarTotal();
    contCarrito.innerHTML= "";

    carrito.forEach(producto => {
        const {name, img, precio, cantidad, id} = producto;
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="flexRow contArticulosCarrito">
                <img src="${img}" class="imgCarrito"">
                <div class="flexRowBetweenCarrito">
                    <div class="contInfoCarrito">
                    <p class="textoCarrito">${name}</p>
                    <p class="textoCarrito"> $ ${precio}</p>
                    <p class="textoCarrito">Cantidad: ${cantidad}</p> 
                </div>
                <div class="flexRight">
                    <button class="botonX" value="${id}">X</button>
                </div>
            </div>
        `
        contCarrito.appendChild(div);
    });
});

//Al cerrar el modal de carrito
cruzCarrito.addEventListener("click" , () => {
    sideBar.style.transform = "translateX(-100vw)"
    modal.style.visibility = "hidden"
    cruzCarrito.style.opacity = "0"
    cruzCarrito.style.display = "none"
});

//Al abrir el historial
botonHistorial.addEventListener("click", () => {
    sideBarHistorial.style.visibility = "visible"
    sideBarHistorial.style.transform = "translateY(0px)"
    cerrarHistorial.style.display = "block"
    cerrarHistorial.style.opacity = "1"
    modalHistorial.style.visibility = "visible"
});

//Al cerrar el historial
cerrarHistorial.addEventListener("click", () => {
    sideBarHistorial.style.visibility = "hidden"
    sideBarHistorial.style.transform = "translateX(100vw)"
    cerrarHistorial.style.opacity = "0"
    modalHistorial.style.visibility = "hidden"
});
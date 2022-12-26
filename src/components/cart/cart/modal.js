const carritoIcono = document.getElementById("carritoIcono")
const modal = document.getElementById("modal")
const sideBar = document.getElementById("sideBarCarrito")
const cruzCarrito = document.getElementById("cerrarCarrito")

//Al abrir el modal
carritoIcono.addEventListener("click" , () => {
    modal.style.display = "block"
    cruzCarrito.style.opacity = "1"
    cruzCarrito.style.display = "block"
    sideBar.style.width = "500px"
    actualizarTotal()
    contCarrito.innerHTML= ""

    carrito.forEach(producto => {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flexRow contArticulosCarrito">
                <img src="${producto.img}" class="imgCarrito"">
                <div class="flexRowBetweenCarrito">
                    <div class="contInfoCarrito">
                    <p class="textoCarrito">${producto.name}</p>
                    <p class="textoCarrito"> $ ${producto.precio}</p>
                    <p class="textoCarrito">Cantidad: ${producto.cantidad}</p> 
                </div>
                <div class="flexRight">
                    <button class="botonX" value="${producto.id}">X</button>
                </div>
            </div>
        `
        contCarrito.appendChild(div)
    })
})

//Al cerrar el modal
cruzCarrito.addEventListener("click" , () => {
    modal.style.display = "none"
    cruzCarrito.style.opacity = "0"
    cruzCarrito.style.display = "none"
    sideBar.style.width = "0px"
})
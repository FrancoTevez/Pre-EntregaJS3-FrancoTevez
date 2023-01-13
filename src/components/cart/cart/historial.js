const botonHistorial = document.getElementById("historialIcono")
const modalHistorial = document.getElementById("modalHistorial")
const cerrarHistorial = document.getElementById("cerrarCarritoHistorial")
const contHistorial = document.getElementById("contHistorial")
const sideBarHistorial = document.getElementById("sideBarHistorial")
const vaciarHistorial = document.getElementById("vaciarHistorial")
let historial = []

//Al abrir el historial
botonHistorial.addEventListener("click", () => {
    sideBarHistorial.style.visibility = "visible"
    sideBarHistorial.style.transform = "translateY(0px)"
    cerrarHistorial.style.display = "block"
    cerrarHistorial.style.opacity = "1"
    modalHistorial.style.visibility = "visible"
})

//Al cerrar el historial
cerrarHistorial.addEventListener("click", () => {
    sideBarHistorial.style.visibility = "hidden"
    sideBarHistorial.style.transform = "translateY(900px)"
    cerrarHistorial.style.opacity = "0"
    modalHistorial.style.visibility = "hidden"
})

const actualizarHistorial = () => {
    contHistorial.innerHTML = ""

    historial.forEach(productos => {
        const div = document.createElement("div")
        div.classList.add("divHistorial");
        div.innerHTML = `
            <p class="pProductosComprados">Fecha: ${productos.tiempo}</p>
            <p class="pProductosComprados">Cantidad de Productos: ${productos.cantidad}</p>
            <p class="pProductosComprados">Total gastado: $${productos.precioTotal}</p>
        `
        contHistorial.appendChild(div)
    })
    guardarHistorialStorage(historial)
}

vaciarHistorial.addEventListener("click", () => {
    if(historial.length === 0){
        Toastify({
            text: "El historial está vacio",
            duration: 2500,
            position: "left",
            gravity: "top",
            style: {
                background: "linear-gradient(to right, rgb(0, 57, 143), rgb(13, 0, 61))",
            },
        }).showToast();
    }else{
        historial = []
        actualizarHistorial()
        Toastify({
            text: "Se vació el historial",
            duration: 2500,
            position: "left",
            gravity: "top",
            style: {
                background: "linear-gradient(to right, rgb(0, 57, 143), rgb(13, 0, 61))",
            },
        }).showToast();
    }
})

const guardarHistorialStorage = (historial) => {
    localStorage.setItem('historial', JSON.stringify(historial));
};
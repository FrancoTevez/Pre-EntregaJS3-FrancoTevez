const botonHistorial = document.getElementById("historialIcono");
const modalHistorial = document.getElementById("modalHistorial");
const cerrarHistorial = document.getElementById("cerrarCarritoHistorial");
const contHistorial = document.getElementById("contHistorial");
const sideBarHistorial = document.getElementById("sideBarHistorial");
const vaciarHistorial = document.getElementById("vaciarHistorial");
let historial = [];

//Actualizar el historial por cada entrada
const actualizarHistorial = () => {
    contHistorial.innerHTML = "";

    historial.forEach(producto => {
        const {tiempo, cantidad, precioTotal} = producto;
        const div = document.createElement("div");
        div.classList.add("divHistorial");
        div.innerHTML = `
            <p class="pProductosComprados">Fecha: ${tiempo}</p>
            <p class="pProductosComprados">Cantidad de Productos: ${cantidad}</p>
            <p class="pProductosComprados">Total gastado: $${precioTotal}</p>
        `
        contHistorial.appendChild(div);
    });
    guardarHistorialStorage(historial);
};

//Vaciar el historial
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
        historial = [];
        actualizarHistorial();
        localStorage.removeItem("historial");
        Toastify({
            text: "Se vació el historial",
            duration: 2500,
            position: "left",
            gravity: "top",
            style: {
                background: "linear-gradient(to right, rgb(0, 57, 143), rgb(13, 0, 61))",
            },
        }).showToast();
    };
});

//Guardar el historial
const guardarHistorialStorage = (historial) => {
    localStorage.setItem('historial', JSON.stringify(historial));
};

const obtenerHistorialStorage = () => {
    const historialStorage = JSON.parse(localStorage.getItem('historial'));
    return historialStorage;
};
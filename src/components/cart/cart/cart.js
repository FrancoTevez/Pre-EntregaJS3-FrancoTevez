let carrito = [];

const contenedorProducto = document.getElementById("contenedorArt");

contenedorProducto.addEventListener("click", (e) => {
    if(e.target.id >= 1){
        validarRepetido(e.target.id);
    } 
})

//Agregar productos al carrito o aumentar su cantidad
const validarRepetido = async (id) => {
    productos = await llamarStock()
    const repetido = carrito.find(prod => prod.id == id);

    if(!repetido){
        const producto = productos.find(prod => prod.id == id);
        carrito.push(producto);
        contadorCarrito.innerText = carrito.length;
        actualizarTotal();
        guardarCarritoStorage(carrito);
        Toastify({
            text: `Se agregó ${producto.name} al carrito`,
            duration: 2500,
            position: "left",
            gravity: "bottom",
            style: {
                background: "linear-gradient(to right, rgb(0, 57, 143), rgb(13, 0, 61))",
            },
        }).showToast();
    }else{
        repetido.cantidad++
        actualizarTotal();
    }
}

const contCarrito = document.getElementById("elementosCarrito");
const contadorCarrito = document.getElementById("contaCarrito");
contadorCarrito.innerText = carrito.length;
const total = document.getElementById("totalPaga");
const botonFinalizar = document.getElementById("btnFCompra");
const botonVaciar = document.getElementById("vaciarCarrito")

//Al apretar el boton para eliminar
contCarrito.addEventListener("click" , (e) => {
    if (e.target.value >= 1){
        eliminarProducto(e.target.value)
    }
})

//Eliminar un producto del carrito
const eliminarProducto = (value) => {
    const productoAEliminar = carrito.find(producto => producto.id == value);

    if(productoAEliminar.cantidad > 1){
        productoAEliminar.cantidad = productoAEliminar.cantidad - 1;
        actualizarCarrito();
        actualizarTotal();
        guardarCarritoStorage(carrito);
    }else{
        const prodIndex = carrito.findIndex(producto => producto.id == value);
        carrito.splice(prodIndex, 1);
        actualizarCarrito();
        actualizarTotal();
        contadorCarrito.innerText = carrito.length;
        guardarCarritoStorage(carrito);
    } 
}

//Actualizar el carrito cuando se elimina un producto
const actualizarCarrito = () => {
    contCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const div = document.createElement("div");
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
        contCarrito.appendChild(div);
    })
}

//Valor del total juntando todos los productos
const actualizarTotal = () => {
    const totalPrecio = carrito.reduce((acc,prod) => acc + (prod.cantidad * prod.precio),0);
    total.innerText = `Total a pagar: $${totalPrecio}`
}

const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};

//Comprar productos del carrito
botonFinalizar.addEventListener("click" , () => {
    if(carrito.length === 0){
        Toastify({
            text: "No tienes productos en el carrito",
            duration: 2500,
            position: "left",
            gravity: "top",
            style: {
                background: "linear-gradient(to right, rgb(0, 57, 143), rgb(13, 0, 61))",
            },
        }).showToast();
    }else{
        Toastify({
        text: "La compra se realizó con éxito",
        duration: 2500,
        position: "left",
        gravity: "top",
        style: {
            background: "linear-gradient(to right, rgb(0, 57, 143), rgb(13, 0, 61))",
        },
        }).showToast();
        carrito = [];
        actualizarCarrito();
        actualizarTotal();
        contadorCarrito.innerText = carrito.length;
        localStorage.clear();
    }
})

//Vaciar carrito
botonVaciar.addEventListener("click", () => {
    if(carrito.length === 0){
        Toastify({
            text: "El carrito está vacio",
            duration: 2500,
            position: "left",
            gravity: "top",
            style: {
                background: "linear-gradient(to right, rgb(0, 57, 143), rgb(13, 0, 61))",
            },
        }).showToast();
    }else{
        carrito = []
        actualizarCarrito();
        actualizarTotal();
        contadorCarrito.innerText = carrito.length;
        localStorage.clear();
        Toastify({
            text: "Se vació el carrito",
            duration: 2500,
            position: "left",
            gravity: "top",
            style: {
                background: "linear-gradient(to right, rgb(0, 57, 143), rgb(13, 0, 61))",
            },
        }).showToast();
    }
    
})


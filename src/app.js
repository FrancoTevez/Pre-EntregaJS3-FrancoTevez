//Crear cada producto en el HTML
const contenedorPintar = document.getElementById("contenedorArt");

const pintarProducto = () => {
    
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("articulos")
        div.innerHTML = `
        <article class="flexcolumnBetween height100">
            <div class="articuloParteArriba">
                <p class="pNuevo">NUEVO</p>
                <img src="${producto.img}" alt="imagen botitas nike air more uptempo 96" class="imgZapas">
                <p class="nombreArticulo">${producto.name}</p>
            </div>
            <div class="articuloParteAbajo">
                <p class="pPrecio">$${producto.precio}</p>
                <div class="flexRowBeteenBoton">
                    <p class="envio">ENVÍO GRATIS</p>
                    <a class="boton" id="${producto.id}">+</a>
                </div>               
            </div>       
        </article>
        `
    contenedorPintar.appendChild(div);
    });
}

const inputBuscar = document.getElementById("inputB");

//Buscar un producto con la lupa
inputBuscar.addEventListener("keyup" , () => {
    const buscar = productos.filter(el => (el.name).toLocaleLowerCase().includes((inputBuscar.value).toLocaleLowerCase()));

    contenedorPintar.innerHTML = ""
    buscar.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("articulos");
        div.innerHTML = `
            <article class="flexcolumnBetween height100">
                <div class="articuloParteArriba">
                    <p class="pNuevo">NUEVO</p>
                    <img src="${producto.img}" alt="imagen botitas nike air more uptempo 96" class="imgZapas">
                    <p class="nombreArticulo">${producto.name}</p>
                </div>
                <div class="articuloParteAbajo">
                    <p class="pPrecio">$${producto.precio}</p>
                    <div class="flexRowBeteenBoton">
                        <p class="envio">ENVÍO GRATIS</p>
                        <a class="boton" id="${producto.id}">+</a>
                    </div>               
                </div>       
            </article>
            `
        contenedorPintar.appendChild(div);
    });
});




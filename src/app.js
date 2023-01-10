//Crear cada producto en el HTML
const contenedorPintar = document.getElementById("contenedorArt");
let productos = [];

const pintarProducto = async () => {
    
    productos = await llamarStock();

    productos.forEach(producto => {
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
}

const inputBuscar = document.getElementById("inputB");

//Buscar un producto con la lupa
inputBuscar.addEventListener("keyup" , async () => {
    productos = await llamarStock();
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

const btnCalsados = document.getElementById("calsados");
const btnIndumentaria = document.getElementById("indumentaria");
const btnMarca = document.getElementById("brands");  

btnCalsados.addEventListener("click", async (e) => {
    e.preventDefault();
    productos = await llamarStock();
    const calsados = productos.filter((el) => el.tipo == "Zapatilla");
    contenedorPintar.innerHTML = ""

    calsados.forEach(producto => {
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
})

btnIndumentaria.addEventListener("click", async (e) => {
    e.preventDefault();
    productos = await llamarStock();
    const indumentaria = productos.filter((el) => el.tipo !== "Zapatilla");
    console.log(indumentaria);
    contenedorPintar.innerHTML = ""

    indumentaria.forEach(producto => {
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
})



const llamarStock = async () => {
    try{
        const resp = await fetch("/src/stock.json")
        const data = await resp.json()
        
        return data
    }catch (error){
        Toastify({
            text: `Hubo un error con la carga de productos`,
            duration: 2500,
            position: "left",
            gravity: "bottom",
            style: {
                background: "linear-gradient(to right, rgb(167, 11, 0), rgb(61, 0, 13))",
            },
        }).showToast();
    }
}

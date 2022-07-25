//1. Creo la base de productos mediante una función constructora (con la que agrego un producto, que luego modifico) y un array que contiene el objeto antes creado y otros ya cargados. A éstos les sumo un producto más mediante .push()

function Hamburguesas (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const hamburguesaBronx = new Hamburguesas ("Bronx", 880)

hamburguesaBronx.precio = 980

console.log(hamburguesaBronx)

const productos = [
    hamburguesaBronx,
    {nombre: "Queens", precio: 980},
    {nombre: "Manhattan", precio: 980},
    {nombre: "Brooklyn", precio: 980},
    {nombre: "Big Apple", precio: 980}
]

productos.push({nombre: "Wall Street", precio: 980})

console.log(productos)

//2. Creo el carrito y la función para agregar productos. Luego "invito al usuario" a que seleccione tres hamburguesas. Las agrego yo en esta instancia

const miCarritoDeCompras = []

function agregarAlCarrito(producto) {
    miCarritoDeCompras.push(producto);
}

agregarAlCarrito({nombre: "Queens", precio: 980});
agregarAlCarrito({nombre: "Brooklyn", precio: 980});
agregarAlCarrito({nombre: "Wall Street", precio: 980});

console.log(miCarritoDeCompras)

//3. Creo la función para eliminar productos. Luego "le pido al usuario que indique qué productos quiere eliminar", haciendolo yo en esta instancia.

function eliminarUnProducto (nombreDeLaHamburguesa) {
    let index = miCarritoDeCompras.findIndex((producto) => producto.nombre == nombreDeLaHamburguesa)
    if (index != -1) {
        miCarritoDeCompras.splice(index, 1)
    } else {
        alert("Ese producto no está en el carrito")
    }
}

eliminarUnProducto("Wall Street");

console.log(miCarritoDeCompras)

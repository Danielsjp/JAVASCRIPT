/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Pomelo ( o lo que sea ) 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */
 let totalCompra = 0;
 let productosCarrito = [];

 const pomelo = document.querySelector('#pomelo')
//  const totalCompraDiv = document.getElementById("totalCompra");
const preuFinal = document.getElementById("preuFinal");
const carrito = document.querySelector('#carrito')
const eliminar = document.getElementById("miSpan")

function comprarProducto(producto){
    let kilos = prompt("cuantos kilos?")
    // Seleccionamos el elemento con id 'pomelo'
    const textoProducto = producto.querySelector("p").textContent;
    const nombreProducto = textoProducto.split(":")[0].trim();
    const precioProducto1 = textoProducto.split("€")[0].trim();
    const precioProducto2 = precioProducto1.split(":")[1].trim();
    let total = (parseFloat(precioProducto2) * parseInt(kilos)).toFixed(2);
    // const carrito = document.getElementById("#carrito");
    productosCarrito.push({
        nombre: nombreProducto,
        kilos: kilos,
        precio: precioProducto2,
        total: total
    });

    // Actualizamos el total acumulado
    totalCompra += parseFloat(total);
    preuFinal.innerHTML = `${totalCompra.toFixed(2)}€`;

    // Actualizamos la vista del carrito
    actualizarCarrito();
}


function actualizarCarrito() {
    // Limpiamos el contenido actual del carrito
    carrito.innerHTML = '';

    // Recorremos la lista de productos en el carrito y los mostramos
    productosCarrito.forEach((producto, index) => {
        carrito.innerHTML += `
            <p>
                <span class="miSpan" onclick="eliminarProducto(${index})">❌</span>
                ${producto.nombre} ${producto.kilos} kg x ${producto.precio}€/kg = ${producto.total}€
            </p>
        `;
    });
}

function eliminarProducto(index) {
   
   // Restamos el total del producto eliminado de totalCompra
   totalCompra -= parseFloat(productosCarrito[index].total);

   // Eliminamos el producto del carrito
   productosCarrito.splice(index, 1);

   // Actualizamos la vista con el nuevo total
   preuFinal.innerHTML = `${totalCompra.toFixed(2)}€`;

   // Volvemos a actualizar el carrito
   actualizarCarrito();
}
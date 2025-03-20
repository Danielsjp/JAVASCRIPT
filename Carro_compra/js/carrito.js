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
 const pomelo = document.querySelector('#pomelo')
//  const totalCompraDiv = document.getElementById("totalCompra");
const preuFinal = document.getElementById("preuFinal");
const carrito = document.querySelector('#carrito')


function comprarProducto(producto){
    let kilos = prompt("cuantos kilos?")
    // Seleccionamos el elemento con id 'pomelo'
    const textoProducto = producto.querySelector("p").textContent;
    const nombreProducto = textoProducto.split(":")[0].trim();
    const precioProducto1 = textoProducto.split("€")[0].trim();
    const precioProducto2 = precioProducto1.split(":")[1].trim();
    let total = (parseFloat(precioProducto2) * parseInt(kilos)).toFixed(2);
    // const carrito = document.getElementById("#carrito");
    carrito.innerHTML += `<p>${nombreProducto} ${kilos} kg x ${precioProducto2}€/kg = ${total}€</p>`;
    // precioTotal += total
   // Calculamos el precio total
   // Sumar el precio total al total acumulado
// Sumamos el precio total al total acumulado
totalCompra += parseFloat(total);  

// Actualizamos el total en la sección de compra con innerHTML

preuFinal.innerHTML = `${totalCompra.toFixed(2)}€`;  // Muestra el total acumulado
}



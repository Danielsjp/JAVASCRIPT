// Datos de trabajo

const flores = [
  { nombre: "rosa", color: "rojo", floracion: "primavera", stock: true },
  { nombre: "rosa", color: "blanco", floracion: "verano", stock: true },
  { nombre: "jazmín", color: "blanco", floracion: "verano", stock: false },
  { nombre: "crisantemo", color: "blanco", floracion: "otoño", stock: false },
  { nombre: "cerezo", color: "blanco", floracion: "primavera", stock: false },
  { nombre: "clavel", color: "rojo", floracion: "verano", stock: true },
];

flores.sort((a, b) => {
  return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true });
});

// ==============================================================================
// EJERCICIO 1

// console.log(flores);

// Tiene que mostrarse en el HTML los datos de las flores como lista
// Flor: rosa, de color rojo, florece en primavera y tenemos stock
// Se mostrará el resultado en #ejercicio1

// for clásico
// for (let i = 0; i < flores.length; i++) {
//     console.log(flores[i]);
// }
// Seleccionamos el div donde se mostrará la lista

function mostrarFlores(flores) {
  const divEjercicio = document.getElementById("ejercicio1");

  // Creamos la lista en una variable
  let listaHTML = "<ul>";

  // Bucle para recorrer el array y generar los elementos de la lista
  for (let i = 0; i < flores.length; i++) {
    listaHTML += `<li>Flor: ${flores[i].nombre}, de color ${flores[i].color}, florece en ${flores[i].floracion} y ${flores[i].stock ? "tenemos stock" : "no hay stock"}</li>`;
  }

  listaHTML += "</ul>";

  // Insertamos el HTML en el div
  divEjercicio.innerHTML = listaHTML;
}

// Llamamos a la función pasándole el array de flores
mostrarFlores(flores);


// ==============================================================================
// EJERCICIO 2
// Listar las flores de color blanco que florecen en verano
// Modelo de mensaje de salida:
// Flor: rosa, de color blanco, florece en verano y tenemos stock
// Se mostrará el resultado en #ejercicio2

// const divEjercicio2 = document.getElementById("ejercicio2");


// let listaHTML2 = "<ul>";

// for (let i = 0; i < flores.length; i++) {
  
  // if (flores[i].color == "blanco" &&  flores[i].floracion == "verano")

  // {
  //   listaHTML2 += `<li>Flor: ${flores[i].nombre}, de color ${flores[i].color}, florece en ${flores[i].floracion} y ${flores[i].stock ? "tenemos stock" : "no hay stock"}</li>`;
  // }
  
// }

// listaHTML2 += "</ul>";

// divEjercicio2.innerHTML = listaHTML2;

function mostrarFloresblancas(flores) {
  const divEjercicio = document.getElementById("ejercicio2");

  // Creamos la lista en una variable
  let listaHTML = "<ul>";

  // Bucle para recorrer el array y generar los elementos de la lista
  for (let i = 0; i < flores.length; i++) {

    if (flores[i].color == "blanco" &&  flores[i].floracion == "verano")
    {
      listaHTML += `<li>Flor: ${flores[i].nombre}, de color ${flores[i].color}, florece en ${flores[i].floracion} y ${flores[i].stock ? "tenemos stock" : "no hay stock"}</li>`;
    }
    
  }

  listaHTML += "</ul>";

  // Insertamos el HTML en el div
  divEjercicio.innerHTML = listaHTML;
}

// Llamamos a la función pasándole el array de flores
mostrarFloresblancas(flores);


// ==============================================================================
// EJERCICIO 3

// A partir del formulario incluido, hay que mostrar que datos
// corresponden a la selección realizada.
// Se mostrarán en forma de lista como los modelos anteriores.
// Si no hay ninguna flor que cumpla las condiciones, se mostrará este mensaje:
// "No hay flor que cumpla las condiciones"
// Se mostrará el resultado en #ejercicio3
// const color = document.querySelector('input[name="color"]:checked').value;
// const floracion = document.querySelector('input[name="floracion"]:checked').value;
// const stock = document.querySelector('input[name="stock"]:checked').value; // Convertimos a booleano


const ejercicio3 = document.getElementById("ejercicio3");

const formEj3 = document.forms["formEj3"];
const color = formEj3.color.value;
const floracion = formEj3.floracion.value;
const stock = formEj3["stock"].value;
// console.log(color, floracion, stock);

mensajeEj3(ejercicio3, color, floracion, stock);

formEj3.addEventListener("change", () => {
  const color = formEj3.color.value;
  const floracion = formEj3.floracion.value;
  const stock = formEj3["stock"].value;

  // console.log(typeof stock);
  mensajeEj3(ejercicio3, color, floracion, stock);
});

function mensajeEj3(id, color, floracion, stock) {
  let html = "<ul>";
  let contadorFlores = 0;

  flores.forEach((flor) => {
    if (!flor.stock) {
      textoStock = "no";
    }

    if (
      flor.color == color &&
      flor.floracion == floracion &&
      String(flor.stock) == stock
    ) {
      html += `<li>Flor : ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock} tenemos stock.`;
      contadorFlores++;
    }
  });

  html += "</ul>";

  // solución 1
  // if (html.length == 9) html = '<p>No hay flor que cumpla las condiciones</p>'
  if (contadorFlores == 0)
    html = "<p>No hay flor que cumpla las condiciones</p>";

  id.innerHTML = html;
}



// ==============================================================================
// EJERCICIO 4

// Hacer un formulario para obtener una flor por su nombre.
// Se mostrará el resultado en #ejercicio4


// ==============================================================================
// EJERCICIO 5

// Crea y programa un formulario para añadir flores al array.
// Por ejemplo:
// flor: cyclamen, color:rosa, floracion: invierno, stock:true
// Tiene que actualizarse automáticamente la lista del ejercicio 1


// ============================================================================== 
/* E X T R A S */

// ==============================================================================
// EJERCICIO 6

// Crea y programa un formulario para añadir precios a las flores:
// rosa roja : 8.00€
// rosa blanca : 10.00€
// jazmin: 12.00€
// crisantemo: 5.00€
// cerezo: 25.00€
// cyclamen: 4.50€
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 7

// Crea la forma de eliminar elementos del array
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 8

// Crea la forma de editar elementos del array de flores
// Todas las propiedades deben poder ser editadas: nombre, color, floración, stock  y precio
// Tiene que actualizarse automáticamente la lista del ejercicio 1

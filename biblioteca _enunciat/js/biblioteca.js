// localStorage.removeItem("biblioteca")

// MINI BIBLIOTECA

// const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
    { titulo: "Guerra y Paz", autor: "Lev Tolstoi", categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Anna Karenina", autor: "Lev Tolstoi", categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "L'Odisea", autor: "Homero", categoria: "drama", idioma: "català", epoca: "clásica" },
    { titulo: "Antologia de la poesia medieval catalana", autor: "Diversos", categoria: "poesia", idioma: "català", epoca: "clásica" },
    { titulo: "La Ilíada", autor: "Homero", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Poema del Mio Cid", autor: "Anónimo", categoria: "poesia", idioma: "español", epoca: "clásica" },
    { titulo: "Veinte mil leguas de viaje submarino", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "De la Terra a la Lluna", autor: "Jules Verne", categoria: "aventuras", idioma: "català", epoca: "s.XIX" },
    { titulo: "Cinco semanas en globo", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "Robinson Crusoe", autor: "Daniel Defoe", categoria: "aventuras", idioma: "català", epoca: "clásica" },
    { titulo: "Germinal", autor: 'Émile Zola', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Notre Dame de Paris", autor: 'Victor Hugo', categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "Los Miserables", autor: 'Victor Hugo', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Yo, robot", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Fundació", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Ciberiada", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Solaris", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "El hombre bicentenario", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Tokio Blues", autor: "Haruki Murakami", categoria: "drama", idioma: "español", epoca: "s.XX" },
    { titulo: "Romancero Gitano", autor: "Federico García Lorca", categoria: "poesia", idioma: "español", epoca: "s.XX" },
    { titulo: "Los aventuras de Sherlock Holmes", autor: 'Arthur Conan Doyle', categoria: "misterio", idioma: "español", epoca: "s.XIX" },
    { titulo: "Rebelió a la granja", autor: 'George Orwell', categoria: "drama", idioma: "català", epoca: "s.XX" },
    { titulo: "La Divina Comedia", autor: "Dante Alighieri", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Cròniques Marcianes", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
]



// ==========================================================================================================
// EJERCICIO 1
// Libros disponibleS
// Mostrar la lista de obras alfabéticamente según el título, en forma de lista ordenada

// Llista del llibres
// const listaLibros = document.getElementById("listaLibros");

function mostrarLibros(libros) {
    const divEjer1 = document.getElementById("ejer1");

    // Ordenar los libros alfabéticamente por título
    libros.sort((a, b) => a.titulo.localeCompare(b.titulo));

    // Creamos la lista en una variable
    let listaHTML = "<ol>";

    // Bucle para recorrer el array y generar los elementos de la lista
    for (let i = 0; i < libros.length; i++) {
      listaHTML += `<li>${libros[i].titulo} - ${libros[i].autor}</li>`;
    }

    listaHTML += "</ol>";

    // Insertamos el HTML en el div
    divEjer1.innerHTML = listaHTML;
  }

  // Llamamos a la función pasándole el array de libros
  mostrarLibros(biblioteca);


// ==========================================================================================================
// EJERCICIO 2
// Filtrar las obras según los criterios indicados en el formulario.
// Las obras que cumplan las condiciones se mostrarán dentro del div con id salidaFiltrada
// Las obras se mostrarán según aparece en la imagen modelo1.png
// Hay que aplicar algunos estilos que ya están definidos en el css


// function filtrarLibros() {
//     const categoria = document.querySelector('input[name="categoria"]:checked').value;
//     const idioma = document.querySelector('input[name="idioma"]:checked').value;
//     const epoca = document.querySelector('input[name="epoca"]:checked').value;

//     // Filtrar libros según los criterios seleccionados
//     const librosFiltrados = biblioteca.filter(libro => 
//       (categoria === "todo" || libro.categoria === categoria) &&
//       (idioma === "todo" || libro.idioma === idioma) &&
//       (epoca === "todo" || libro.epoca === epoca)
//     );

//     // Generar la lista con el formato solicitado
//     let listaHTML = "<ul>";
//     for (let i = 0; i < librosFiltrados.length; i++) {
//       listaHTML += `<li>
//                       <span class="autor">${librosFiltrados[i].autor}</span> - 
//                       <span class="obra">${librosFiltrados[i].titulo}</span> 
//                       (<span class="categoria">${librosFiltrados[i].categoria}</span>) 
//                       [${librosFiltrados[i].idioma}]
//                     </li>`;
//     }
//     listaHTML += "</ul>";

//     // Mostrar resultados en el div con los estilos aplicados
//     document.getElementById("ejer2").innerHTML = listaHTML;
//   }

//   // Agregar evento para ejecutar la función al cambiar un filtro
//   document.getElementById("form-filtrado").addEventListener("change", filtrarLibros);

//   // Llamar a la función para mostrar todos los libros al cargar la página
//   filtrarLibros();

    const ejercicio2 = document.getElementById("form-filtrado")   
//  const formEj2 = document.forms["formEj2"];
//  const categoria = formEj2.categoria.value;
//  const idioma = formEj2.idioma.value;
//  const epoca = formEj2.epoca.value;

//  console.log(categoria);
//  console.log(idioma);
//  console.log(epoca);

function filtrarLibros() {
    const categoria = document.querySelector('input[name="categoria"]:checked').value;
    const idioma = document.querySelector('input[name="idioma"]:checked').value;
    const epoca = document.querySelector('input[name="epoca"]:checked').value;
  
    let html = "<ul>";
    let contadorLibros = 0;
  
    biblioteca.forEach((libro) => {
      if (
        (categoria === "todo" || libro.categoria === categoria) &&
        (idioma === "todo" || libro.idioma === idioma) &&
        (epoca === "todo" || libro.epoca === epoca)
      ) {
        html += `<li>
                  <span class="autor">${libro.autor}</span> - 
                  <span class="obra">${libro.titulo}</span> 
                  (<span class="categoria">${libro.categoria}</span>) 
                  [${libro.idioma}]
                </li>`;
        contadorLibros++;
      }
    });
  
    html += "</ul>";
  
    if (contadorLibros === 0) {
      html = "<p>No hay libros que cumplan las condiciones</p>";
    }
  
    document.getElementById("ejer2").innerHTML = html;
  }
  
  // Agregar evento para ejecutar la función al cambiar un filtro
  document.getElementById("form-filtrado").addEventListener("change", filtrarLibros);
  
  // Mostrar todos los libros al cargar la página
  filtrarLibros();

// ==========================================================================================================
// EJERCICIO 3
// Filtrar por autor
// Selección de obras según el nombre o parte del nombre de un autor.
// Al hacer clic sobre el botón buscar se mostrarán las obras cuyos autores cumplen los requisitos.
// La salida por pantalla será en este formato:
// Isaac Asimov : Yo, robot (ciencia-ficción, idioma : español, época : s.XX) 

// Obtener los elementos del DOM
const formularioAutor = document.getElementById("form-autor");
const inputAutor = document.getElementById("autor");
const divEjercicio3 = document.getElementById("ejer3");

// Evento para buscar libros por autor al enviar el formulario
formularioAutor.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe y recargue la página

  // Obtener el autor ingresado por el usuario
  const nombreAutor = inputAutor.value.trim().toLowerCase();

  // Variable para almacenar los libros encontrados
  let librosEncontrados = [];

  // Buscar los libros en la biblioteca
  for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].autor.toLowerCase().includes(nombreAutor)) {
      librosEncontrados.push(biblioteca[i]); // Agregamos el libro a la lista de encontrados
    }
  }

  // Mostrar el resultado
  if (librosEncontrados.length > 0) {
    let html = "<ul>"; // Usamos una lista para mostrar los libros

    librosEncontrados.forEach(libro => {
      html += `<li>
                <span class="autor">${libro.autor}</span> : 
                <span class="obra">${libro.titulo}</span> 
                (<span class="categoria">${libro.categoria}</span>, 
                idioma : <span class="idioma">${libro.idioma}</span>, 
                época : <span class="epoca">${libro.epoca}</span>)
              </li>`;
    });

    html += "</ul>";
    divEjercicio3.innerHTML = html;
  } else {
    // Si no se encuentra ningún libro, mostramos un mensaje
    divEjercicio3.innerHTML = "<p>No se encontraron obras de ese autor.</p>";
  }
});


// ==========================================================================================================
// EJERCICIO 4

// Función para añadir una obra a la biblioteca
function añadirObra(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
  
    // Obtener los valores del formulario
    const autor = document.getElementById("incluir-autor").value.trim();
    const titulo = document.getElementById("incluir-titulo").value.trim();
    const categoria = document.getElementById("incluir-categoria").value.trim();
    const idioma = document.getElementById("incluir-idioma").value.trim();
    const epoca = document.getElementById("incluir-epoca").value.trim();
  
    // Crear el nuevo objeto libro
    const nuevaObra = {
      autor: autor,
      titulo: titulo,
      categoria: categoria,
      idioma: idioma,
      epoca: epoca
    };
  
    // Añadir la nueva obra al array biblioteca
    biblioteca.push(nuevaObra);
  
    // Guardar la nueva biblioteca en localStorage
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
  
    // Limpiar el formulario después de añadir la obra
    document.getElementById("incluirObra").reset();
  
    // Actualizar la lista de libros mostrada
    mostrarLibros(biblioteca);
  }
  
  // Obtener el formulario y agregar el evento submit
  const formularioObra = document.getElementById("incluirObra");
  formularioObra.addEventListener("submit", añadirObra);
  



// ==========================================================================================================
// EJERCICIO 5
// Quitar obras de la biblioteca. Crea en un formulario una etiqueta select con las obras de la biblioteca.
// Al seleccionar una obra y enviar el formulario, se eliminará la obra de la biblioteca.
// Actualizar automáticamente el listado de obras del ejercicio 1
// Actualizar el LocalStorage

// Función para actualizar el listado de libros en el formulario de quitar obra


// Referencias al formulario y a la sección del select
// Referencias a los elementos del DOM

const formQuitarObra = document.getElementById("formQuitarObra");
const selectQuitarObra = document.getElementById("selectQuitarObra");
const btnEliminarObra = document.getElementById("btnEliminarObra");

// Función para mostrar las obras en el formulario de eliminación
function mostrarObrasParaEliminar() {
  selectQuitarObra.innerHTML = ""; // Limpiamos el contenido previo

  // Creamos un select para mostrar las opciones de obra
  const selectElement = document.createElement("select");
  selectElement.id = "selectObraEliminar"; // Le damos un id al select

  // Creamos una opción por cada obra en la biblioteca
  biblioteca.forEach((obra, index) => {
    const opcion = document.createElement("option");
    opcion.value = index; // Usamos el índice para identificar la obra
    opcion.textContent = `${obra.titulo} - ${obra.autor}`;
    selectElement.appendChild(opcion);
  });

  // Añadimos el select al div que contiene las opciones
  selectQuitarObra.appendChild(selectElement);
}

// Llamamos a la función para mostrar las obras al cargar
mostrarObrasParaEliminar();

// Función para eliminar la obra seleccionada
function eliminarObra(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener la obra seleccionada
  const selectObra = document.getElementById("selectObraEliminar");
  const obraSeleccionada = selectObra.value;

  if (obraSeleccionada !== "") {
    // Convertimos el valor seleccionado a un índice entero
    const index = parseInt(obraSeleccionada);

    // Eliminamos la obra de la biblioteca
    biblioteca.splice(index, 1);

    // Actualizamos el localStorage
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));

    // Mostramos un mensaje de confirmación
    alert("Obra eliminada correctamente.");

    // actualizamos el listado del punto 1 
    
    mostrarLibros(biblioteca);
    // Actualizamos la lista visual
    mostrarObrasParaEliminar();
  } else {
    alert("Por favor, selecciona una obra para eliminar.");
  }
}

// Añadimos el evento al formulario para manejar la eliminación
formQuitarObra.addEventListener("submit", eliminarObra);
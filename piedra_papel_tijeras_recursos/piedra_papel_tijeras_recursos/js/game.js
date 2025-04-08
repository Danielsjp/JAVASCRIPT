let buttonNombre = document.querySelector('header button');
let pNombre = document.querySelector('header p');
let divImagen = document.getElementById("divImagen");  // Corregido aquí

let iconos = ['✊', '🤚', '✌']
let nombreUsuario = "";

let victoris = 0;
let derrotis = 0;
let empatis = 0;

buttonNombre.addEventListener("click", () => {
    nombreUsuario = prompt("Tu nombre, por favor ...");
    buttonNombre.style.display = "none";
    pNombre.innerHTML = nombreUsuario;
});

let formJuego = document.forms["formJuego"];

formJuego.addEventListener("submit", (e) => {
    e.preventDefault();
    let jugadaHumano = parseInt(formJuego["jugada"].value);

    let numMinimo = 1;
    let numMaximo = 3;
    let jugadaPC = Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo;
    let mensaje = "";
    let audioVictoria = document.getElementById("victoria");
    let audioEmpate = document.getElementById("empate");
    let audioDerrota = document.getElementById("derrota");

    if (jugadaHumano === jugadaPC) {
        mensaje = `¡Empate,`;
        audioEmpate.play();
        divImagen.innerHTML = "<img src='img/empate.jpg' alt='empate'>";
        empatis++
    } else if ((jugadaHumano === 1 && jugadaPC === 3) || (jugadaHumano === 2 && jugadaPC === 1) || (jugadaHumano === 3 && jugadaPC === 2)) {
        mensaje = `¡Has ganado,!`;
        audioVictoria.play();
        divImagen.innerHTML = "<img src='img/victoria.jpg' alt='victoria'>";
        victoris++
    } else {
        mensaje = `¡Has perdido, !`;
        audioDerrota.play();
        divImagen.innerHTML = "<img src='img/derrota.jpg' alt='derrota'>";
        derrotis++
    }
    // creamos  una tabla con los valores de las partidas finalizadas
    let tabla =
    `
    
    `;

    // respuesta.innerHTML = `<p>${mensaje} ${nombreUsuario} victoris: ${victoris} derrotis: ${derrotis} empatis: ${empatis}</p> `;
    respuesta.innerHTML = `<p>${mensaje} ${nombreUsuario}`;
});

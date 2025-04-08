let buttonNombre = document.querySelector('header button');
let pNombre = document.querySelector('header p');
let divImagen = document.getElementById("divImagen");  // Corregido aquí

buttonNombre.addEventListener("click", () => {
    let nombreUsuario = prompt("Tu nombre, por favor ...");
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
        mensaje = "!Empate!";
        audioEmpate.play();
        divImagen.innerHTML = "<img src='img/empate.jpg' alt='empate'>";
    } else if ((jugadaHumano === 1 && jugadaPC === 3) || (jugadaHumano === 2 && jugadaPC === 1) || (jugadaHumano === 3 && jugadaPC === 2)) {
        mensaje = "!Has ganado!";
        audioVictoria.play();
        divImagen.innerHTML = "<img src='img/victoria.jpg' alt='victoria'>";
    } else {
        mensaje = "!Has perdido!";
        audioDerrota.play();
        divImagen.innerHTML = "<img src='img/derrota.jpg' alt='derrota'>";
    }

    respuesta.innerHTML = `<p>${mensaje}</p>`;
});

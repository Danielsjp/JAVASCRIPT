// import key from "./"
const apiKey = "7268048e6829b1df5dfcc5e82529ae22"; // Tu API Key
const urlBase = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&q=";


const form = document.getElementById("weatherForm");
const inputCiudad = document.getElementById("cityInput");
const divDatos = document.getElementById("divDatos");
icono = "https://www.imelcf.gob.pa/wp-content/plugins/location-weather/assets/images/icons/weather-icons/"

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    const ciudad = inputCiudad.value.trim(); // Obtener la ciudad y eliminar espacios en blanco
    if (ciudad === "") return; // No hacer nada si el input está vacío

    obtenerClima(ciudad);
});

function obtenerClima(ciudad) {
    const url = `${urlBase}${ciudad}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                divDatos.innerHTML = `<p>Error: Ciudad no encontrada</p>`;
                return;
            }

            mostrarClima(data);
        })
        .catch(error => {
            divDatos.innerHTML = `<p>Error al obtener los datos</p>`;
            console.error("Error en la solicitud:", error);
        });
}

function mostrarClima(data) {
    divDatos.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Sensación térmica: ${data.main.feels_like}°C</p>
        <p>Humedad: ${data.main.humidity}%</p>
        <p>Descripción: ${data.weather[0].description}</p>
        <p><span><img src=${icono}${data["weather"][0]["icon"]}.svg" width="50" height="50"></span></p>
    `;
    
}

import { apiKey, apiContami } from './config.js';
const urlBase = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const urlforecast = "https://api.openweathermap.org/data/2.5/forecast?units=metric"


const form = document.getElementById("weatherForm");
const inputCiudad = document.getElementById("cityInput");
const idioma_1 = document.getElementById("languageSelect")
const divDatos = document.getElementById("divDatos");
const divPrevision = document.getElementById("divPrevision");
const divContaminacion = document.getElementById("divContaminacion"); // Add a div in your HTML for AQI display
const icono = "https://www.imelcf.gob.pa/wp-content/plugins/location-weather/assets/images/icons/weather-icons/"


form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    const idioma = idioma_1.value;
    const ciudad = inputCiudad.value.trim(); // Obtener la ciudad y eliminar espacios en blanco
    if (ciudad === "") return; // No hacer nada si el input está vacío

    if (idioma === "ca") {
        traducirACatalan();
    } else {
        restaurarAEspanol();
    }

    obtenerClima(ciudad, idioma);
    obtenerPrevision(ciudad, idioma);
    obtenerContaminacion(ciudad);
});

function traducirACatalan() {
    document.querySelector("h1").textContent = "Consulta el temps";
    document.querySelector("button[type='submit']").textContent = "Cercar";
    document.querySelector("h3").textContent = "Previsió per als propers 5 dies:";
}

function restaurarAEspanol() {
    document.querySelector("h1").textContent = "Consulta el clima";
    document.querySelector("button[type='submit']").textContent = "Buscar";
    document.querySelector("h3").textContent = "Previsión para los próximos 5 días:";
}

function obtenerClima(ciudad, idioma) {
    const url = `${urlBase}&lang=${idioma}&q=${ciudad}&appid=${apiKey}`;

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

function obtenerPrevision(ciudad, idioma){

    const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}&units=metric&lang=${idioma}`;
    console.log(url2);
    fetch(url2)
        .then(response => response.json())
        .then(data2 => {
            if (data2.cod != 200) {
                divPrevision.innerHTML = `<p>Error: ${data2.message}</p>`;
                return;
            }

            mostrarPrevision(data2);
        })
        .catch(error => {
            divPrevision.innerHTML = `<p>Error al obtener los datos</p>`;
            console.error("Error en la solicitud:", error);
        });


}

function mostrarPrevision(data2) {
    // Almacenamos la previsión de los 5 días
    let previsiones = [];
    let diasVistos = new Set(); // Usamos un Set para evitar duplicados de días

    // Configuración de idioma para los días de la semana
    const opcionesFecha = idioma_1.value === "ca" 
        ? { weekday: "long", day: "numeric", month: "long", locale: "ca-ES" }
        : { weekday: "long", day: "numeric", month: "long", locale: "es-ES" };

    // Iteramos sobre los datos de la previsión
    data2.list.forEach(item => {
        // Extraemos la fecha de la previsión en el idioma seleccionado
        const fecha = new Date(item.dt * 1000);
        const dia = fecha.toLocaleDateString(opcionesFecha.locale, opcionesFecha);

        // Solo mostramos el primer dato de cada día
        if (!diasVistos.has(dia)) {
            diasVistos.add(dia);
            previsiones.push({
                dia: dia,
                temp: item.main.temp,
                descripcion: item.weather[0].description,
                icono: item.weather[0].icon
            });
        }

        // Si ya tenemos 5 días, salimos
        if (previsiones.length === 5) return;
    });

    // Ahora construimos el HTML para mostrar las previsiones
    let html = "";
    previsiones.forEach(prevision => {
        html += `
            <div class="prevision-dia">
                <p><strong>${prevision.dia}</strong></p>
                <p>Temperatura: ${prevision.temp}°C</p>
                <p>Descripción: ${prevision.descripcion}</p>
                <p><span><img src="https://www.imelcf.gob.pa/wp-content/plugins/location-weather/assets/images/icons/weather-icons/${prevision.icono}.svg" width="100" height="100"></span></p>
            </div>
        `;
    });

    divPrevision.innerHTML = html;
}

function mostrarClima(data) {
    const idioma = idioma_1.value;

    // Traducciones para catalán
    const traducciones = {
        es: {
            temperatura: "Temperatura",
            sensacion: "Sensación térmica",
            humedad: "Humedad",
            descripcion: "Descripción"
        },
        ca: {
            temperatura: "Temperatura",
            sensacion: "Sensació tèrmica",
            humedad: "Humitat",
            descripcion: "Descripció"
        }
    };

    const textos = idioma === "ca" ? traducciones.ca : traducciones.es;

    // Cambiar el fondo según el icono del clima
    const weatherIcon = data.weather[0].icon;
    cambiarFondo(weatherIcon);

    divDatos.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${textos.temperatura}: ${data.main.temp}°C</p>
        <p>${textos.sensacion}: ${data.main.feels_like}°C</p>
        <p>${textos.humedad}: ${data.main.humidity}%</p>
        <p>${textos.descripcion}: ${data.weather[0].description}</p>
        <p><span><img src=${icono}${data["weather"][0]["icon"]}.svg" width="200" height="200"></span></p>`;
}

function cambiarFondo(icon) {
    const body = document.body;

    // Definir colores según el icono del clima
    const colores = {
        "01d": "#87CEEB", // Cielo despejado (día)
        "01n": "#2C3E50", // Cielo despejado (noche)
        "02d": "#ADD8E6", // Pocas nubes (día)
        "02n": "#34495E", // Pocas nubes (noche)
        "03d": "#B0C4DE", // Nubes dispersas
        "03n": "#566573", // Nubes dispersas (noche)
        "04d": "#778899", // Nubes rotas
        "04n": "#2F4F4F", // Nubes rotas (noche)
        "09d": "#5F9EA0", // Lluvia ligera
        "09n": "#4682B4", // Lluvia ligera (noche)
        "10d": "#6495ED", // Lluvia moderada (día)
        "10n": "#1E90FF", // Lluvia moderada (noche)
        "11d": "#FFD700", // Tormenta eléctrica (día)
        "11n": "#FF8C00", // Tormenta eléctrica (noche)
        "13d": "#F0F8FF", // Nieve
        "13n": "#B0E0E6", // Nieve (noche)
        "50d": "#D3D3D3", // Neblina
        "50n": "#696969"  // Neblina (noche)
    };

    // Cambiar el color de fondo según el icono
    body.style.backgroundColor = colores[icon] || "#FFFFFF"; // Color por defecto: blanco
}

function obtenerContaminacion(ciudad) {
    const urlContaminacion = `http://api.waqi.info/feed/${ciudad}/?token=${apiContami}`;

    fetch(urlContaminacion)
        .then(response => response.json())
        .then(data => {
            if (data.status !== "ok") {
                divContaminacion.innerHTML = `<p>Error: No se pudo obtener el nivel de contaminación</p>`;
                return;
            }

            mostrarContaminacion(data.data.aqi);
        })
        .catch(error => {
            divContaminacion.innerHTML = `<p>Error al obtener los datos de contaminación</p>`;
            console.error("Error en la solicitud:", error);
        });
}

function mostrarContaminacion(aqi) {
    let emoji = "";
    let descripcion = "";

    if (aqi <= 50) {
        emoji = "🟢";
        descripcion = "Bajo";
    } else if (aqi <= 100) {
        emoji = "🟡";
        descripcion = "Moderado";
    } else {
        emoji = "🔴";
        descripcion = "Alto";
    }

    divContaminacion.innerHTML = `
        <h3>Nivel de Contaminación:</h3>
        <p>AQI: ${aqi} ${emoji} (${descripcion})</p>
    `;
}

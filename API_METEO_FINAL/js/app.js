// https://api.openweathermap.org/data/2.5/weather?q=Barcelona&exclude={part}&appid=8642e743857790577108d46b6f31ac60&units=metric&lang=es

// https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=7268048e6829b1df5dfcc5e82529ae22&units=metric&lang=es

let url = "https://api.openweathermap.org/data/2.5/weather?appid=7268048e6829b1df5dfcc5e82529ae22&units=metric&lang=es&q="
url += "Paris"

const divDatos = document.getElementById("divDatos")

fetch(url)
.then(data => data.json())
.then(data => {
// console.log(data)
divDatos.innerHTML += `<p>Ciudad : ${data.name}</p>`
divDatos.innerHTML += `<p>Temperatura Actual: ${data["main"]["temp"]}ºC</p>`
})
import text from "./12_texto.js" 
console.log(text)

const btnTexto = document.getElementById("btntexto")
const divTexto = document.getElementById("divTexto")

btnTexto.addEventListener("click", ()=> {

    fetch("12_texto.txt")
    .then(data => data.text())
    .then(data => {

        console.log(data)

        divTexto.textContent = data

    })
})
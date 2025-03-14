// FUNCIONES
// llamada o invocación ( se puede hacer antes)
console.log(sumar(3,5));













// Declaración (buenas practicas al final del código)
function sumar(num1, num2){
    return num1 + num2
}

function corregirNombre(nombre){


    //let nombre = "mAriA de LaS mErCeDes y dE TodAS lAs SantAS"

// Paso 1: convertir todo en minúsculas

nombre = nombre.toLowerCase()

// paso 2: obtener las palabras

nombre = nombre.split(" ")

let nombreCorregido = "";

for(palabra of nombre){

    console.log(palabra);
    if (palabra != "de" && palabra != "las" && palabra != "y" && palabra != "los")
    {
       let inicial = palabra.at(0).toUpperCase()
       let restoNombre = palabra.slice(1)
       palabra = inicial + restoNombre
    }

    nombreCorregido = nombreCorregido + palabra + " "
    }
    return nombreCorregido
}

console.log(corregirNombre("Hola ManOlo CaraCol"));

// ===============================================================
// Sistema 2
// en este metodo el orden importa

let sumar2 = function (num1, num2){
    return num1 + num2
}

console.log(sumar2(3,4));

// ==============================================================
// Sistema 3 (arrow function)

let sumar3 = (num1, num2) => {

    return num1 + num2
} 

console.log(sumar3(4,5));


//sistema 4

let sumar4 = (num1, num2) => num1 + num2

console.log(sumar4(3,4));

// sistema 5

let sumar5 = num1 => num1*num1

console.log(sumar5(3));

const listaFrutas = ["kiwi", "piña", "pera"]

listaFrutas.forEach((fruta)=>
{
    console.log(fruta)
})


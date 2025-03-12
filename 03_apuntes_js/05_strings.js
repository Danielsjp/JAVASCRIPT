// STRINGS

let palabra = "Abracadabra"

// metodos de JS para STRINGS
// lenght --> obtener la longitud de la cadena
console.log(palabra.length);

console.log(palabra[3]);
console.log(palabra[-1]);
// at(posicion) -->
console.log(palabra.at(-2));

//métodos para pasar el texto a mayusculas y minusculas

let palabraMayus = palabra.toLocaleUpperCase()
palabraMayus
palabraMinus = palabraMayus.toLocaleLowerCase()
palabraMinus

// trim()

palabra2 = "                " + palabra + "         "

console.log(palabra2.length)
palabra2 = palabra2.trim()
console.log(palabra2.length)

// replace("caracter/s", lo que cambias)
console.log(palabra.replace("ab", "ez"))


console.log(palabra.replaceAll("ab", "ai"));

let frase = "Como no estudies JavasScript te vas a enterar"

// startswith()

frase.startsWith("A")

console.log(frase.startsWith("C"));
console.log(frase.endsWith("A"));

// por donde quieres cortar
console.log(palabra.slice(palabra.length/2))
console.log(palabra.slice(1,4));

// split

let lista = []
let string = ""
console.log(frase.split(" "));


let nombre = "mAriA de LaS mErCeDes y dE TodAS lAs SantAS"

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

nombreCorregido
//BUCLES 

const palabra = "Abracadaba"

for (let i = 0; i < palabra.length; i++)
    {
        if (palabra[i] == "c"){
            break
        }
        console.log(palabra[i]);
}

for (let i = 0; i < palabra.length; i++)
    {   
        // palabra[i] = palabra[i].toLocaleLowerCase()

        if (palabra[i].toLocaleLowerCase() == "a")
        {
            continue
        }
        console.log(palabra[i]);
}

// bucle for .. of

for (letra of palabra)
{
    console.log(letra)
}

// while

let control = true
let i = 0
while (!control){
    console.log("TRUE");
    if (i == 3) {
        control = false
    }
    i++
}

let condicion = "jueves"

do {
    console.log("Estaria bien que hoy fuera viernes")
}
while (condicion == "miercoles")
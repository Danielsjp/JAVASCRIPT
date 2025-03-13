// Vamos a tener una palabra y una letra. 
// hay que mostrar un mensahje cuantas veces aparece
// ej la letre aparece 3 veces en la palabra manzana

palabra = "Manzana"
letraBuscada = "n"
contador = 0

for (letra of palabra){
    console.log(letra);
    if (letra == letraBuscada)
    {
        contador++
    }
}

if (contador>0) console.log("La letra: "+ letraBuscada +" aparece "+contador+" veces");

else
{
    console.log("La letra: "+ letraBuscada +" No aparece "+ "en la palabra"+" "+palabra);
}

//test salida con ``

console.log(`La letra ${contador}`);
// Vamos a tener una frase. Por ejemplo:
// Mñana será viernes y aunque va a llover será un día maravilloso
// Hay que mostrar cuantas palabras contienen una letra determinada

frase = "Mañana será viernes y aunque va a llover será un día maravilloso"
letraBuscada = "o"
contador = 0
lista = []
i = 0
lista = frase.split(" ")
laPalabra = [] 
console.log(lista);

for (palabra of lista)
{
    for(caracter of palabra)
    {
        if (caracter == letraBuscada){
            contador++
            console.log(contador);
            break
        }
    }
}
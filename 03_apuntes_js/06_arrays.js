// ARRAYS
// let frutas = [1, 1.2, "hola", true, [4,6]]
let frutas = ["kiwi", "pera", "fresa", "pomelo"]
//              0        1        2         3
// el tamaño de  un array. En python era len)
frutas [3] = "limón"
console.log(frutas)
let arraySize = frutas.length
console.log(arraySize);
// añadir un elemento al final; push()
frutas.push("malocoton")
console.log(frutas)
// como eliminar
let frutaEliminada = frutas.pop()
console.log(frutas)
// añadir un valor al principio
frutas.unshift("Platano")
console.log(frutas)
// eliminar el valor inicial
frutaEliminadaBkp = frutas.shift()
console.log(frutas)
console.log(frutaEliminadaBkp);
//Pasar el array a texto:
console.log(frutas.toString());
console.log(frutas.join(" # "));
// Obtener la posicion de un elemento: index
console.log(frutas.indexOf("pera"))
// -1 indica que algo no existe
console.log(frutas.indexOf("mandarina"))
frutas.push("fresa")
console.log(frutas)
console.log(frutas.indexOf("fresa"));
//cuenta desde el final
console.log(frutas.lastIndexOf("fresa"))
console.log(frutas.at(-1))
//da la vuelta
frutas.reverse(); //modifica
// da la vuelta sin modificar el original
variable = frutas.toReversed()
console.log(variable);
//cortar el array
console.log(frutas)
let extraccion = frutas.slice(1,3)
console.log(extraccion);
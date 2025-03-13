// Objetos

// son como los diccionarios de Python

let alumno = {}

alumno["nombre"] = "María"
alumno["apellido"] = "Pi"
alumno["edad"] = 25

let alumno2 = {nombre: "Pep", apellido: "Guardiola", edad: "30"}

alumno

alumno2

let clase = {

    alumnos : [
        alumno, alumno2
    ]
}

for (claves in alumno){

    console.log(claves, alumno[claves]);
}


// condicionales

//python: if - elif - else
//JS: if - else if - else

const edad = 20

if (edad>=18) 
{
    console.log("Eres mayor de edad");
}
else if  (edad == 17) {
    console.log("Ya te falta poco");
}
else
{
    console.log("Aún no puedes votar")
}

let curso = "Javascript"
let prueba = true

if (curso) {
    let curso = "PHP"
    console.log(curso)
}

console.log(curso);

curso = "PHP"

switch (curso) {

    case  "PHP":
        console.log("PHP?= Te has vuelto loca/o");
        break
    default:
        console.log("Y QUE ESTUDIAS?")
}

const diaSemana = "miercoles"

switch (diaSemana) {

    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":        
        console.log("Es día laborable");
        break    
    case "sabado":
    case "domingo":
        console.log("Es festivo");
        break
    default:
        console.log("No sabes los dias de la semana");
}

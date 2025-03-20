// Control del nombre y apellido del cliente

const nombreForm = document.querySelector('#nombre')
const apellidoForm = document.querySelector('#apellido')

nombreForm.addEventListener("change", () => {

    let nombreRevisado = nombreForm.value.trim()
    const errorNombre = document.querySelector('#errorNombre')
    errorNombre.textContent = ""
    if (nombreRevisado.length < 2){

        errorNombre.textContent = "El nombre debe tener al menos dos caracteres"
        nombreForm.focus()
    }
})

// control de la fecha

let today = new Date()
let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
today = today.toISOString().split('T')[0]
// console.log(today);

tomorrow = tomorrow.toISOString().split('T')[0]

const entrada = document.querySelector('#entrada')
entrada.setAttribute("value", today)
entrada.setAttribute("min", today)

const salida = document.querySelector('#salida')
entrada.setAttribute("value", tomorrow)
entrada.setAttribute("min", tomorow)

entrada.addEventListener('change', () => {

    salida =  new Date(entrada.value)

})

// ventana emergente
// obtener los datos del formulario

const dialog = document.querySelector('#resumen')

const formReserva = document.forms['formReserva']

formReserva.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(formReserva['nombre'].value);
    console.log(formReserva['estancia'].value);
})
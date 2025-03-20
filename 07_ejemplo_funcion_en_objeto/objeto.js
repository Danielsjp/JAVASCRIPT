let cliente = {

    nombre : "Marco",
    apellido : "Perez",
    nombreCompleto : function () {

      return `${this.nombre} ${this.apellido}`
    }
}

console.log(cliente["nombre"]);

console.log(cliente.nombre)
console.log(cliente.nombreCompleto());
// vamos a trabajar para un comercio que vende toda clase de artículo, desde los más
// caros a los más baratos. No obstante pone dos condiciónes a sus clientes:
// el cambio se va devolver en metalico según condiciones:
// --- Será usando la mínima cantidad de billetes y monedas posible

cambio = 457.28
money = [500,200,100,50,20,10,5,1,0.5,0.2,0.1, 0.05, 0.02, 0.01]

let objetoCambio = {} // 200: 2
let parcialCambio = 0;
for (tipoMoney of money){

    let cantidadMoney = parseInt(cambio / tipoMoney)
    if (cantidadMoney == 0) continue
    else {  
        parcialCambio += cantidadMoney * tipoMoney
        objetoCambio[tipoMoney] = cantidadMoney
        cambio = cambio % tipoMoney
    }

}

objetoCambio ['0.01'] = (cambioInicial - parcialCambio) * 100 / 100
objetoCambio




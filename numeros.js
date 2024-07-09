/**
 * Numeros del 1 al 10
 * Autor: Julian Naranjo
 * Fecha: 08/07/2024
 */

    let arregloNumeros = [];
    let resultado = "";
    let mostrar = "";

    for (let iterar=0;iterar<=5;iterar++){
    arregloNumeros.push(iterar);
    }

    for(iterar=0;iterar<arregloNumeros.length;iterar++){
        resultado += '<li class="item">' + arregloNumeros[iterar] + '!</li>'
    }

    console.log(resultado);
    document.getElementById('lista-numero').innerHTML = resultado;

    function factorial(numero) {
        let resultado = 1;
        for (let i = numero; i > 1; i--) {
            resultado = resultado * i;
        }
        return resultado;
    }
    for(let iterar=0;iterar<=5;iterar++){
        let resultado = factorial(iterar);
        mostrar += '<li class="item">El factorial de ' + arregloNumeros[iterar] + ' es ' + resultado + '</li>'
    }

    document.getElementById('lista-resultado').innerHTML = mostrar;
'use strict';

 

const display = document.getElementById('display');

const numeros = document.querySelectorAll('[id*=tecla'); //seleciona todos que tem tecla inclusa no id

const operadores = document.querySelectorAll('[id*=operador')

 let novoNumero = true;

const atualizarDisplay = (texto) => {
    if(novoNumero){
        display.textContent = texto;
        novoNumero = false;
    } else {
        display.textContent += texto; //se eu não colocar o +, os numeros não serão concatenados
    }
}

 

const inserirNumero = (evento) => {

    atualizarDisplay(evento.target.textContent)

}



const selecionarOperador = () => {
    novoNumero = true;
}



numeros.forEach(numeros => numeros.addEventListener('click',inserirNumero))

operadores.forEach(operador => operador.addEventListener('click',selecionarOperador))
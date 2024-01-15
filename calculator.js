'use strict';

 

const display = document.getElementById('display');

const numeros = document.querySelectorAll('[id*=tecla'); //seleciona todos que tem tecla inclusa no id

const operadores = document.querySelectorAll('[id*=operador')

 let novoNumero = true;
 let operador;
 let numeroAnterior;

 const operacaoPendente = () => {
    operador != undefined;
 }

 const calcular = () => {
    if(operacaoPendente()){
        const numeroAtual =parseFloat(display.textContent) ;
         novoNumero = true;
         const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
        if(operador == '+'){
            atualizarDisplay(numeroAnterior + numeroAtual)
        } else if(operador == '-'){
            atualizarDisplay(numeroAnterior - numeroAtual)
        } else if(operador == '*'){
            atualizarDisplay(numeroAnterior * numeroAtual)
        } else if(operador == '/'){
            atualizarDisplay(numeroAnterior / numeroAtual)
        }
    }
 }

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



const selecionarOperador = (evento) => {
    if(!novoNumero){
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior =parseFloat(display.textContent) ;
        
    }
   
}



numeros.forEach(numeros => numeros.addEventListener('click',inserirNumero))

operadores.forEach(operador => operador.addEventListener('click',selecionarOperador))
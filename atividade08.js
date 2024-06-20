/* 
Implemente uma função `range(min, max)` que receba dois números `min` e `max`,
 e retorne um array contendo todos os números inteiros entre `min` e `max`.

Adicione um parâmetro na função `range(min, max, i)` que representa o intervalo 
de variação entre os números a serem preenchidos no array.
*/

function range(min, max, intervalo = 1) {
    let array = [];

    if (min > max) {
        [min, max] = [max, min]; 
    }
    
    for (let i = min; i <= max; i ++) {
        array.push(i);
    }
    
    return array;
}

function lerNumeroInteiro(promptMessage) {
    let input = prompt(promptMessage);
    let numero = parseInt(input);
    if (isNaN(numero)) {
        console.log('Por favor, insira um número inteiro válido.');
        return lerNumeroInteiro(promptMessage); 
    }
    return numero;
}

let min = lerNumeroInteiro('Digite o valor mínimo: ');
let max = lerNumeroInteiro('Digite o valor máximo: ');

resultado = range(min, max);
console.log('Array gerado: ', resultado);

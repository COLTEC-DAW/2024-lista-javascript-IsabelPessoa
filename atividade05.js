/*
Implemente duas funções JavaScript, 
uma para retornar o menor valor entre dois elementos (chamada `min(a, b)`),
e outra para retornar o maior valor entre dois elementos (chamada `max(a, b)`).

*/


function max(a, b) {
    return a > b ? a : b;
}

function min(a, b) {
    return a < b ? a : b;
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
    let numero1 = lerNumeroInteiro('Digite o primeiro número inteiro: '); 
    let numero2 = lerNumeroInteiro('Digite o segundo número inteiro: '); 

    let menor = min(numero1, numero2);
    let maior = max(numero1, numero2);
    
    console.log('Entre '+ numero1 + ' e ' + numero2 + ' o menor é: ' + menor);
    console.log('Entre '+ numero1 + ' e ' + numero2 + ' o maior é: ' + maior);


/*
Implemente uma função que verifique se um número é divisível por 2. 
A função deverá se chamar `mod2(number)` e retornar um valor booleano, 
indicando se o número é ou não divisível.

Extenda o exercício anterior de modo a criar uma função `mod(num, mod)`, 
que verifique se num é divisível por mod.
*/

// óia se é divisivel por 2
function mod2(number) {
    return number % 2 === 0;
}

// óia se é divisivel por outro numero
function mod(num, divisor) {
    return num % divisor === 0;
}

function lerNumeroInteiro(promptMessage) {
    let input = prompt(promptMessage);
    let numero = parseInt(input);
    
    if (isNaN(numero)) {
        console.log('Por favor, insira um número inteiro válido.'); // Se não for inteiro daqui não passa
        return lerNumeroInteiro(promptMessage);
    }
    return numero;
}

let numero = lerNumeroInteiro('Digite um número inteiro para verificar se é divisível por 2.'); // pega o primeiro número

// chama a função pra olhar se é divisível por 2
if (mod2(numero)) {
    console.log(numero + 'é divisível por 2.');
} else {
    console.log(numero + 'não é divisível por 2.');
}

let divisor = lerNumeroInteiro('Agora, digite outro número inteiro para verificar se o primeiro número é divisível por ele:'); // pega o segundo número

// chama a função pra olhar se o primeiro número é divisível pelo segundo número
if (mod(numero, divisor)) {
    console.log(numero + ' é divisível por ' + divisor + '.');
} else {
    console.log(numero + ' não é divisível por ' + divisor + '.');
}


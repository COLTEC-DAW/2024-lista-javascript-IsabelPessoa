/*
Implemente uma função que faça uma determinada verificação de um número, 
retornando sempre verdadeiro ou falso. Essa verificação deverá ser enviada 
como parâmetro, na forma de função.

Teste a função utilizando como verificações se um número é impar, e se um número é primo.
*/

function isOdd(number) {
    return number % 2 !== 0;
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function lerNumero(promptMessage) {
    let input = prompt(promptMessage);
    let number = parseInt(input);
    if (isNaN(number)) {
        console.log('Por favor, insira um número válido.');
        return lerNumero(promptMessage); 
    }
    return number;
}

let numero = lerNumero('Digite um número inteiro: ');

console.log('\nEscolha uma opção de verificação: ');
console.log('1. Verificar se o número é ímpar');
console.log('2. Verificar se o número é primo');

let opcao = parseInt(prompt('Digite o número da opção desejada: '));

let verificar;
switch (opcao) {
    case 1:
        verificar = isOdd;
        break;
    case 2:
        verificar = isPrime;
        break;
    default:
        console.log('Opção inválida. Saindo do programa.');
        return;
}

let resultado = verificar(numero);
console.log(`\nO número ${numero} ${resultado ? 'atende' : 'não atende'} ao critério.`);


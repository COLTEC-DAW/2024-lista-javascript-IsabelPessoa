/*
Implemente uma função que faça a ordenação de um vetor. 
O critério de ordenação deverá ser enviado por parâmetro, 
na forma de função. A ordenação deverá seguir o algoritmo 
bubble sort.

Teste a ordenação criando critérios de ordenação crescente, 
descrente, crescente ímpares, decrescente pares.
*/

function bubbleSort(array, compareFunction) {
    const len = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (compareFunction(array[i], array[i + 1])) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

function lerArray(promptMessage) {
    let input = prompt(promptMessage);
    if (input === null || input.trim() === "") {
        console.log('Por favor, insira um array válido de números separados por vírgula.');
        return lerArray(promptMessage);
    }
    let array = input.split(',').map(num => parseFloat(num.trim()));
    array = array.filter(num => !isNaN(num));
    
    return array;
}

let array = lerArray('Digite um array de números separados por vírgula: ');

function ascending(a, b) {
    return a > b;
}

function descending(a, b) {
    return a < b;
}

function ascendingOdd(a, b) {
    if (a % 2 !== 0 && b % 2 !== 0) {
        return a > b;
    } else if (a % 2 !== 0) {
        return true;
    }
    return false;
}

function descendingEven(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return a < b;
    } else if (b % 2 === 0) {
        return true;
    }
    return false;
}

console.log('\nEscolha uma opção de ordenação: ');
console.log('1. Crescente');
console.log('2. Decrescente');
console.log('3. Crescente de ímpares');
console.log('4. Decrescente de pares');

let opcao = parseInt(prompt('Digite o número da opção desejada: '));

let compareFunction;
switch (opcao) {
    case 1:
        compareFunction = ascending;
        break;
    case 2:
        compareFunction = descending;
        break;
    case 3:
        compareFunction = ascendingOdd;
        break;
    case 4:
        compareFunction = descendingEven;
        break;
    default:
        console.log('Opção inválida. Saindo do programa.');
        return;
}

let sortedArray = bubbleSort([...array], compareFunction);

console.log('Array ordenado: ', sortedArray);

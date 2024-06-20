/*
Implemente uma função `reverseArray(array)` que receba um array como parâmetro e retorne outro array como reverso.
*/

function reverseArray(array) {
    let reversedArray = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    
    return reversedArray;
}

function lerLista(promptMessage) {
    let input = prompt(promptMessage);
    if (input === null || input.trim() === "") {
        console.log('Por favor, insira uma lista válida separada por vírgulas.');
        return lerLista(promptMessage); 
    }
    let lista = input.split(',').map(num => parseInt(num.trim()));

    lista = lista.filter(num => !isNaN(num));
    
    return lista;
}

let listaOriginal = lerLista('Digite uma lista de números separados por vírgula: ');
let listaInvertida = reverseArray(listaOriginal);
console.log('Lista invertida: ', listaInvertida);

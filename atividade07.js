/*
Implemente uma função chamada `countChars(frase, c)` que receba 
como parâmetro uma string e um caractere e retorne quantas vezes 
aquele caracteres aparece na string.
*/ 

function countChars(frase, c) {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === c) {
            contador++;
        }
    }

    return contador;
}

function lerString(promptMessage) {
    let input = prompt(promptMessage);
    if (input === null || input.trim() === "") {
        console.log('Por favor, insira uma string válida.'); 
        return lerString(promptMessage);
    }
    return input;
}

let frase = lerString('Digite uma frase: ');
let caractere = prompt('Digite um caractere para contar na frase:');

if (caractere.length !== 1) {
    console.log('Por favor, insira apenas um caractere.');
    return;
}

let quantidade = countChars(frase, caractere);

console.log('O caractere ' + caractere + ' aparece ' + quantidade + ' vezes na frase.');


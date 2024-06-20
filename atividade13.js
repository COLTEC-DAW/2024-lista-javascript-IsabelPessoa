/*
Implemente uma função que faça a criptografia de uma determinada string. 
O critério de criptografia deverá ser enviado por parâmetro, na forma de função.

Teste a criptografia utilizando como critério a [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar).

*/

function caesarCipherEncrypt(text, shift) {
    return text
        .split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                let code = char.charCodeAt(0);

                if (code >= 65 && code <= 90) {
                    code = ((code - 65 + shift) % 26) + 65;
                } else if (code >= 97 && code <= 122) {
                    code = ((code - 97 + shift) % 26) + 97;
                }

                return String.fromCharCode(code);
            }
            return char;
        })
        .join('');
}

function lerString(promptMessage) {
    let input = prompt(promptMessage);
    if (input === null || input.trim() === "") {
        console.log('Por favor, insira uma string válida.');
        return lerString(promptMessage); 
    }
    return input;
}

let textoOriginal = lerString('Digite a string a ser criptografada: ');

let deslocamento = parseInt(prompt('Digite o deslocamento (número inteiro positivo): '));

if (isNaN(deslocamento) || deslocamento <= 0) {
    console.log('O deslocamento deve ser um número inteiro positivo.');
    return;
}

let textoCriptografado = caesarCipherEncrypt(textoOriginal, deslocamento);
console.log('Texto Criptografado: ', textoCriptografado);

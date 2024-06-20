/*
Implemente uma função que faça transformações nos caracteres de uma string.
A transformação a ser realizada deverá ser enviada por parâmetro, na forma
de função.

Teste a função passando como parâmetro as seguintes transformações:

* Caixa alta nas vogais
* Caixa alta nas consoantes
* Caixa baixa nas vogais
* Caixa baixa nas consoantes

*/

function transformString(string, transformFunction) {
    return string
        .split('') 
        .map(char => transformFunction(char)) 
        .join('');
}

function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
}

function uppercaseVowels(char) {
    return isVowel(char) ? char.toUpperCase() : char;
}

function uppercaseConsonants(char) {
    return isVowel(char) || !(/[a-zA-Z]/.test(char)) ? char : char.toUpperCase();
}

function lowercaseVowels(char) {
    return isVowel(char) ? char.toLowerCase() : char;
}

function lowercaseConsonants(char) {
    return isVowel(char) || !(/[a-zA-Z]/.test(char)) ? char : char.toLowerCase();
}

function lerString(promptMessage) {
    let input = prompt(promptMessage);
    if (input === null || input.trim() === "") {
        console.log('Por favor, insira uma string válida.');
        return lerString(promptMessage); 
    }
    return input;
}

    let textoOriginal = lerString('Digite uma string:');

    console.log('\nEscolha uma opção de transformação: ');
    console.log('1. Caixa alta nas vogais');
    console.log('2. Caixa alta nas consoantes');
    console.log('3. Caixa baixa nas vogais');
    console.log('4. Caixa baixa nas consoantes');

    let opcao = parseInt(prompt('Digite o número da opção desejada: '));

    let transformFunction;
    switch (opcao) {
        case 1:
            transformFunction = uppercaseVowels;
            break;
        case 2:
            transformFunction = uppercaseConsonants;
            break;
        case 3:
            transformFunction = lowercaseVowels;
            break;
        case 4:
            transformFunction = lowercaseConsonants;
            break;
        default:
            console.log('Opção inválida. Saindo do programa.');
            return;
    }

    let textoTransformado = transformString(textoOriginal, transformFunction);
    console.log('Texto Transformado: ', textoTransformado);
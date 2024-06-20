/*
Implemente uma função que crie matrizes com base em uma função matricial 
com base nos índices da matriz. A função matricial deverá ser enviada
por parâmetro, na forma de função.

Teste o exercício passando como parâmetro as seguintes funções matriciais:

* `m[i,j] = i + j`
* `[i,j] = i * j`
* `m[i,j] = i == j ? 1 : 0`
* `[i,j] = i^2/(j+1)`
* `m[i,j] = i > j ? 1 : (i < j ? 5 : 0)`
*/

function createMatrix(rows, cols, matrixFunction) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = matrixFunction(i, j);
        }
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

function lerNumero(promptMessage) {
    let input = prompt(promptMessage);
    let number = parseInt(input);
    if (isNaN(number) || number <= 0) {
        console.log('Por favor, insira um número inteiro positivo válido.');
        return lerNumero(promptMessage);
    }
    return number;
}


let rows = lerNumero('Digite o número de linhas da matriz: ');
let cols = lerNumero('Digite o número de colunas da matriz: ');

console.log('\nEscolha uma função matricial: ');
console.log('1. m[i,j] = i + j');
console.log('2. [i,j] = i * j');
console.log('3. m[i,j] = i == j ? 1 : 0');
console.log('4. [i,j] = i^2 / (j + 1)');
console.log('5. m[i,j] = i > j ? 1 : (i < j ? 5 : 0)');

let opcao = parseInt(prompt('Digite o número da opção desejada: '));

let matrixFunction;
switch (opcao) {
    case 1:
        matrixFunction = (i, j) => i + j;
        break;
    case 2:
        matrixFunction = (i, j) => i * j;
        break;
    case 3:
        matrixFunction = (i, j) => i === j ? 1 : 0;
        break;
    case 4:
        matrixFunction = (i, j) => i ** 2 / (j + 1);
        break;
    case 5:
        matrixFunction = (i, j) => i > j ? 1 : (i < j ? 5 : 0);
        break;
    default:
        console.log('Opção inválida. Saindo do programa.');
        return;
}

let matrix = createMatrix(rows, cols, matrixFunction);

console.log('\nMatriz criada com base na função matricial: ');
printMatrix(matrix);

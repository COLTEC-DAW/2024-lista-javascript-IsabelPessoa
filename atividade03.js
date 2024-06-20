/*
 
### Verificando Palíndromos

Implemente um programa que, dado uma palavra de entrada 
pelo usuário, verifique se essa palavra é um palíndromo. 
Um palíndromo é uma palavra que poder ser lida tanto da 
direita para a esquerda como da esquerda para a direita.

*/

function seraQueEPalindromo(palavra) {
    for (let i = 1; i < palavra.length/2; i++) {
        if (palavra[i-1] != palavra[palavra.length-i]){
            console.log('Não um palindromo.');
            break;
        }
        else if(i < (palavra.length/2)-1){
            console.log('É um palindromo.');
        }
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Insira uma palavra para ver se é um palíndromo: ', palavrinha => {
    
    if(palavrinha.indexOf(' ') >=0)
        console.log('Você deve inserir apenas uma palavra para o teste.');
    else
        seraQueEPalindromo(palavrinha);

    readline.close();
});

/*
 
Tabuleiro de Xadrez

Implemente um programa em JavaScript que imprima na página um tabuleiro de xadrez:
```
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
```
OBS: A quantidade de linhas deve ser informada pelo usuário.

*/

function imprimeXadrez(nLinhas) {
    for (let i = 1; i <= nLinhas; i++) {
        if(i % 2 != 0)
            console.log('# # # # ');
        else
            console.log(' # # # #');
    }    
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Informe a quantidade de linhas: ', linhas => {
    if(isNaN(linhas) || linhas < 1)
        console.log('O número informado deve ser maior do que zero.');
    else
        imprimeXadrez(linhas);
        
    readline.close();
    
});

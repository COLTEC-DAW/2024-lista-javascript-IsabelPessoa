/*
 
### Desenhando um triângulo

Implemente um programa em JavaScript que imprima a seguinte forma no console:
```
##
###
####
#####
######
```
OBS: A quantidade de linhas deve ser informada pelo usuário.


*/

function digitaHashtagPorLinha(nLinha) {
    for(let i = 1; i <= nLinha; i++){
        console.log('#'.repeat(i));
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Informe a quantidade de linhas: ', linhas => {
    linhas = parseInt(linhas);
    if (isNaN(linhas) || linhas < 1) 
        console.log('Por favor, informe um número válido maior que zero.');
    else 
        digitaHashtagPorLinha(linhas);
    readline.close();
});

/*
 
### Um programa diferente...

Escreva um programa que utilize a função console.log para imprimir números de 1 a 100, com duas exceções:

Para números divsíveis por 3: Imprimir Fizz
Para números divisíveis por 5: Imprimir Buzz
Para números divisíveis por 3 e 5: Imprimir FizzBuzz

*/

function imprimeTudo() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            console.log('FizzBuzz');
        else if(i%3 == 0)
            console.log('Fizz');
        else if(i%5 == 0)
            console.log('Buzz');
        else
            console.log(i)
    }
}

imprimeTudo();
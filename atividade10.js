
/*
Implemente uma função `toList(array)` que converta o array `array` para uma lista. 
A lista deverá ter a estrutura abaixo:

```
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```
*/
class ListNode {
    constructor(value) {
        this.value = value;
        this.rest = null;
    }
}

function toList(array) {
    if (array.length === 0) {
        return null;
    }

    let head = new ListNode(array[0]);
    let current = head;

    for (let i = 1; i < array.length; i++) {
        current.rest = new ListNode(array[i]);
        current = current.rest;
    }

    return head;
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

function listToArray(list) {
    let array = [];
    let current = list;
    while (current !== null) {
        array.push(current.value);
        current = current.rest;
    }
    return array;
}

console.log('Vamos converter um array para uma lista encadeada: ');

let array = lerLista('Digite uma lista de números separados por vírgula: ');

let listaEncadeada = toList(array);

console.log('Lista encadeada convertida: ', listToArray(listaEncadeada));


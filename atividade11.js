/*
Implemente uma função chamada `deepEquals(obj1, obj2)` que verifica 
se dois objetos quaisquer possuem **as mesmas propriedades**.

OBS: Você pode, através do próprio JavaScript, iterar sobre cada uma das 
propriedades existentes de um objeto javascript e seus valores. (sei)
*/

function deepEquals(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (let prop in obj1) {
        if (!obj2.hasOwnProperty(prop)) {
            return false;
        }

        if (typeof obj1[prop] === 'object' && typeof obj2[prop] === 'object') {
            if (!deepEquals(obj1[prop], obj2[prop])) {
                return false;
            }
        } else if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }

    return true;
}

function lerObjeto(promptMessage) {
    let input = prompt(promptMessage);
    if (input === null || input.trim() === "") {
        console.log('Por favor, insira um objeto válido.');
        return lerObjeto(promptMessage);
    }
    try {
        let objeto = JSON.parse(input);
        if (typeof objeto !== 'object' || objeto === null) {
            throw new Error('Por favor, insira um objeto válido.');
        }
        return objeto;
    } catch (error) {
        console.log('Por favor, insira um objeto válido.');
        return lerObjeto(promptMessage);
    }
}

let obj1 = lerObjeto('Digite o primeiro objeto: ');

let obj2 = lerObjeto('Digite o segundo objeto: ');

if (deepEquals(obj1, obj2)) {
    console.log('Os objetos têm as mesmas propriedades.');
} else {
    console.log('Os objetos não têm as mesmas propriedades.');
}

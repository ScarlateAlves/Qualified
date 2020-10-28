// Nesse exercício, você irá receber um array de números inteiros, e deve retornar
//  a soma de todos os seus números positivos.

// Exemplo [1,-4,7,12] => 1 + 7 + 12 = 20

// Observação: Caso não tenha nada para ser somado, o valor padrão para a soma será 0.

var arr = [-1, 1, 1]

function somaPositivos(array) {
    var soma = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] > 0) {
            soma += array[index]
        }
    }
    return soma;
}

console.log(somaPositivos(arr))
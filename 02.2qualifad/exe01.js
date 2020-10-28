// A função pickIt receberá um array com números inteiros.
// Sua função deve criar dois arrays distitos para números pares e números ímpares.
// Sua função deve retornar um array que conterá nesta ordem:

// Um array com os números ímpares
// Um array com os números pares
var array = [1, 3, 5, 7, 9, 2]

function pickIt(array) {
    var impares = []
    var pares = []
    for (var index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0) {
            pares.push(array[index]);
        } else {
            impares.push(array[index]);
        }


    }
    return [impares, pares]

}

console.log(pickIt(array))
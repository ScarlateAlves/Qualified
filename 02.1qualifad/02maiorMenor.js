// Sua função maiorEMenor receberá uma string como parâmetro.
//  Separe essa string utilizando o caracter de ' ' e retorne 
//  uma string contendo o maior número e o menor número 
//  (necessariamente nesta ordem).

//  parametros:
// numeros: String
// Uma string contendo números separados por espaço

// Retorno: String
// Dois números separados por espaço, o maior número deve vir primeiro.

var arrayString = "1 7 9 4 5"

function maiorEMenor(array) {
    var listaString
    var n;
    var numeros = []
    var maior = 0;
    var menor = 0;
    listaString = array.split("")

    for (let index = 0; index < listaString.length; index++) {
        if (listaString[index] != " ") {
            n = listaString[index]

            numeros.push(n)
        }

    }

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
    }

    menor = maior
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    if (maior == menor) {
        return maior

    }



    return (maior + " " + menor)

}

console.log(maiorEMenor(arrayString));
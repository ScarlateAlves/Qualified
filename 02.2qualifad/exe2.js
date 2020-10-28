// Sua função maiorEMenor receberá uma string como parâmetro.
//  Separe essa string utilizando o caracter de ' ' e retorne 
//  uma string contendo o maior número e o menor número 
//  (necessariamente nesta ordem).

//  parametros:
// numeros: String
// Uma string contendo números separados por espaço

// Retorno: String
// Dois números separados por espaço, o maior número deve vir primeiro.

var arrayString = "6 6"

function maiorEMenor(array) {
    var listaString
    var n;
    var nu = []
    var maior = 0;
    var menor;
    listaString = array.split("")
    for (let index = 0; index < listaString.length; index++) {
        if (parseInt(listaString[index])) {
            n = listaString[index]
            nu.push(n)
        }
    }
    maior = Math.max.apply(null, nu);
    menor = Math.min.apply(null, nu);
    if (maior == menor) {
        return maior
    }
    return (maior + ' ' + menor)
}
console.log(maiorEMenor(arrayString));
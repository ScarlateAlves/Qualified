function maiorEMenor(numbers) {
    var lista = numbers.split(" ")
    var menor = null;
    var maior = null;

    for (var i = 0; i < lista.length; i++) {
        var numero = parseInt(lista[i]);

        if (maior == null || numero > maior) {
            maior = numero
        }

        if (menor == null || numero < menor) {
            menor = numero
        }
    }

    return (maior + " " + menor)
}

var nu = "1 3 4 -9"

console.log(maiorEMenor(nu))
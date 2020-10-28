var d = [0]

function completeSeries(array) {
    var maior = 0
    var novo = []
    var valor = 0;
    var novo2 = []
    var valor2 = 0

    for (let index = 0; index < array.length; index++) {
        if (array[index] >= 0) {
            valor = array[index]
            novo.push(valor)
        }
    }


    maior = Math.max.apply(null, novo);
    if (maior == 0) {
        return (maior)
    }
    var i = 0
    while (i <= maior) {
        novo2.push(i)
        i++
    }

    return (novo2);
}

console.log(completeSeries(d))
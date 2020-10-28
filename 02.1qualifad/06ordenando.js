var array = [3, -10, 1, 9, 90, 90]

function completeSeries(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            return "invalido"
        }
    }
    var maior = 0
    var novo = []
    for (i = 0; i < array.length; i++) {
        for (var index = 0; index < array.length; index++) {
            if (array[index] == array[index + 1]) {
                aux = array[index]
                array[index] = array[index + 1]
                array[index + 1] = aux
                return novo = 0;
            }
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    for (var i = 0; i <= maior; i++) {
        novo.push(i);


    }
    return novo;
}

console.log(completeSeries(array))
    /*for (i = 0; i < array.length; i++) {
        for (var index = 0; index < array.length; index++) {
            if (array[index] > array[index + 1]) {
                aux = array[index]
                array[index] = array[index + 1]
                array[index + 1] = aux
                array;
            }
        }
    }
    */
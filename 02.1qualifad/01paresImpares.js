var array = [1, 4, 5, 9, 3, 8];

function pickIt(arr) {
    var impares = [],
        pares = [];
    //insira seu código aqui!
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            pares.push(arr[i])

        } else {
            impares.push(arr[i])
        }
    }
    return [impares, pares]
}

console.log(pickIt(array))
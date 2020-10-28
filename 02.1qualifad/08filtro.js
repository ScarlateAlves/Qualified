var array = ["sd", 1, 2, "hf", 98]
var novo = []

function filtro(array) {
    var novoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 0 || array[i] >= 0) {
            novoArray.push(array[i]);
        }

    }
    return (novoArray)
}

console.log(filtro(array));
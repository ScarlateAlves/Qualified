var array = [-1]

function soma(array) {
    var element = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            element += array[i];

        }
    }

    return element;
}

console.log(soma(array));
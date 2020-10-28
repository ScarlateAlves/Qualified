var array = ["Ryan", "Kieran", "Jason", "Yous"]
var certo = [];
for (let index = 0; index < array.length; index++) {
    if (array[index].length == 4) {
        certo.push(array[index])

    }

}

console.log(certo)
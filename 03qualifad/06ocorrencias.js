var array = [6, 9, 3, 4, 82, 11, 3]

var valor = [];
var i = array.indexOf(3)
while (i != -1) {
    valor.push(i)
    i = array.indexOf(3, i + 1)
}

console.log(valor)
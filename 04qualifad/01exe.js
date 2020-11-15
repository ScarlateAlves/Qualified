var num = 12345678;

var string = num.toString()

// console.log(string)

var f = string.split("");

console.log(f)
var valor = f.length
valor = valor - 1

// console.log(valor)
// var foi = f.reverse()
// console.log(foi)
// console.log(foi)

var arr = []
for (let index = valor; index >= 0; index--) {
    arr.push(parseInt(f[index]))
}

console.log(arr)
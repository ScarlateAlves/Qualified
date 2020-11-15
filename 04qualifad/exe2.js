var num = "12934583"

function falsoBinario(num) {
    var num2 = []
    var num3 = []

    for (let index = 0; index < num.length; index++) {
        num2.push(num[index])
    }

    for (let index = 0; index < num2.length; index++) {
        var valor = num2[index]
        if (valor < 5) {
            valor = 0
            num3.push(valor)
        } else if (valor > 5) {
            valor = 1
            num3.push(valor)
        }

    }

    return num3.join("")

}

console.log(falsoBinario(num))
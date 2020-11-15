function somaMista(x) {
    let soma = 0;
    for (let index = 0; index < x.length; index++) {
        let valor = parseInt(x[index])
        soma += valor;
    }
    return soma;
}
let num = [1, "3", 2]
console.log(somaMista(num))
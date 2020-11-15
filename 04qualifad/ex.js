function inverter(num) {
    var string = num.toString()

    console.log(string)

    let arrayString = string.split("");

    console.log(arrayString)

    let valor = arrayString

    var arrayNum = []

    for (let index = 0; index < arrayString.length; index++) {
        arrayNum.push(parseInt(arrayString[index]))
    }

    console.log(arrayNum)
    var arr = []
    for (let index = arrayNum.length; index > arrayNum[0]; index--) {
        arr.push(arrayNum[index])

    }
    return (arr)

}
var num = 12345
console.log(inverter(num))
var array = ["4", "b", "a", "a", "b"]
var array2 = []


// array2 = array.filter(function(este, i) {
//     console.log("foi i:", i)
//     console.log("este", este)
//     console.log("\n")
//     return array.indexOf(este) === i
// })


// console.log(array2)

console.log("-----------proximo-----------")

for (let index = 0; index < array.length; index++) {
    if (array.indexOf(array[index]) === index) {
        array2.push(array[index])
    }

}

console.log(array2)
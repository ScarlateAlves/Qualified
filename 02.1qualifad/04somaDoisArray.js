var array1 = [2, 3]
var array2 = [2, 1]

function arrayPlusArray(arr1, arr2) {
    var resultado1 = 0
    var resultado2 = 0
    for (var index = 0; index < arr1.length; index++) {
        resultado1 += arr1[index]
    }

    for (var jndex = 0; jndex < arr2.length; jndex++) {
        resultado2 += arr2[jndex]
    }

    return resultado2 + resultado1;

}

console.log(arrayPlusArray(array2, array1))
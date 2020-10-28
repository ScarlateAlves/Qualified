function filterList(array) {
    var novoArray = []
    var num;
    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i])) {
            num = array[i]
            novoArray.push(num);
        }

    }
    return (novoArray)
}

var n = [1, 2, 'a', 'b'];
console.log(filterList(n))
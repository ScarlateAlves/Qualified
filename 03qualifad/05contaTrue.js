var array = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]

var r = 0
for (let index = 0; index < array.length; index++) {
    if (array[index] == true) {
        r++
    }

}
console.log(r)
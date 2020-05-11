function sortInPlace(array){
    for(let i = 0; i < array.length; i++) {
        randomi = Math.floor(Math.random() * (array.length - 1))
        randomj = Math.floor(Math.random() * (array.length - 1))

        swap(array, randomi, randomj)
    }

    return array
}

function swap(array, i, j) {
    const tmp = array [i]
    array[i] = array[j]
    array[j] = tmp
}

console.log(sortInPlace([3, 9, 1, 14, 17, 24, 22, 20]))

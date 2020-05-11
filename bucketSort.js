function swap(array, i, j) {
    const tmp = array [i]
    array[i] = array[j]
    array[j] = tmp
}

function bucketSort(array, max, min){
    const maxVal = max
    const minVal = min

    result = [minVal]

    for(let i = 1; i < array.length - 1; i++){
        if(array[i] === maxVal || array[i] === minVal) {
            continue
        }
        result.push(array[i])
        if(result[i] < result[i-1]){
            swap(result, i, i-1)
        }
    }

    result.push(maxVal)

    return result
}

console.log(bucketSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40], 49, 1))
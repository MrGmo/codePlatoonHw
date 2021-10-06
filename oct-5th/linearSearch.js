bList = ["b", "a", "n", "a", "n", "a", "s"]

//part 1
function linearSearch (char, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            return i
        }
    }
    return undefined
}


//part 2
function linearSearch (char, arr) {
    let resultArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            resultArr.push(i)
        }
    }
    return resultArr
}

console.log(linearSearch("a", bList))
//[ 1, 3, 5 ]
function ninetyNineBottles(num) {
    let n = num
    let result = ''
    while (num > 2) {
        result += `${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, ${num-1} bottles of beer on the wall.` + '\n'
        num--
    }
    if (num == 2) {
        result += `${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, ${num-1} bottle of beer on the wall.` + '\n' + ` ${num-1} bottle of beer on the wall, ${num-1} bottle of beer.`
        num--
    }
    if (num === 1) {
        result += ` Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${n} bottles of beer on the wall.`
    }
    return result
}


console.log(ninetyNineBottles(99))
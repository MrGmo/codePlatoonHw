function nthFib (num) {
    if (num === 1) {
        return 0
    }
    if (num === 2) {
        return 1
    }
   return nthFib(num-1) + nthFib(num-2)
}

console.log(nthFib(5))
console.log(nthFib(10))
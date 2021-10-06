function romanNumerals(num) {
      let romanArr = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']]

      if (num === 0) {
        return ''
      }
    
      for (let i = 0; i < romanArr.length; i++) {
        if (num >= romanArr[i][0]) {
          return romanArr[i][1] + romanNumerals(num-romanArr[i][0])
        }
      }
    }
    
    
console.log(romanNumerals(4))
// 'IV'
console.log(romanNumerals(944))
//  'CMXLIV'
console.log(romanNumerals(150))
//  # CL
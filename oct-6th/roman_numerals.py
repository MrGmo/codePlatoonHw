def to_roman(num):
  romanArr = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']]

  if num == 0:
    return ''

  for i in range(len(romanArr)):
    if (num >= romanArr[i][0]):
      return romanArr[i][1] + to_roman(num-romanArr[i][0])


print(to_roman(4)) 
# 'IV'
print(to_roman(944))
# 'CMXLIV'
print(to_roman(150))
# CL
def bottle_song(num):
  result_str = ''
  n = num
  for i in range(num,0,-1):
    if num > 2:
      result_str += f'{num} bottles of beer on the wall, {num} bottles of beer. Take one down and pass it around, {num-1} bottles of beer on the wall. '
      num -= 1
    if num == 2:
      result_str += f'{num} bottles of beer on the wall, {num} bottles of beer. Take one down and pass it around, {num-1} bottle of beer on the wall. '
      num -= 1
    if num == 1:
      result_str += f'Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, {n} bottles of beer on the wall.'
      break
  return result_str

print(bottle_song(3))

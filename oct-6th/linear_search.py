b_list = ['b', 'a', 'n', 'a', 'n', 'a', 's']

#part 1
# def linear_search(char,arr):
#   for i in range(len(arr)):
#     if char == arr[i]:
#       return i
#   return None

#part 2
def linear_search(char,arr):
  result = []
  for i in range(len(arr)):
    if char == arr[i]:
      result.append(i)
  return result


print(linear_search('a', b_list))
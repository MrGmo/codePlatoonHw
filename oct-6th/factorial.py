def factorial(num):
  if num <= 1:
    return 1
  return factorial(num-1) * num


print(factorial(4))
#4
print(factorial(7))
#5040
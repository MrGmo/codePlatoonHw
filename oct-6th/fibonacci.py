def fibonacci(num):
  if num == 1:
    return 0
  if num <= 2:
    return 1
  return fibonacci(num-1) + fibonacci(num-2)


print(fibonacci(5))
# 3
print(fibonacci(10))
# 34
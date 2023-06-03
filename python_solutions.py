def abbrev_name(name):
   name_upper_case = name.upper()
   result = [word[0] for word in name_upper_case.split()]
   return result[0] + '.' + result[1]

print(abbrev_name('sam smith'))

def greet(name):
    return f'Hello, {name} how are you doing today?'

print(greet('Ryan'))

def opposite(number):
  if number < 0: 
    return abs(number)
  elif number == 0:
    return 0
  else: 
    return -number

print(opposite(7))

def validate_hello(greetings):
  result = greetings.lower()
  list = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
  if any(item in result for item in list):
    return True
  else: 
    return False

print(validate_hello('ciao bella!'))

def name_shuffler(str_):
  list_strings = str_.split()
  list_strings.reverse()
  separator = ' '
  return separator.join(list_strings)

print(name_shuffler('john Smith'))

def lovefunc( flower1, flower2 ):
  if (flower1 % 2) == 0 and (flower2 % 2) != 0: 
    return True
  elif (flower1 % 2) != 0 and (flower2 % 2) == 0:
    return True
  else: 
    return False
    
print(lovefunc(4, 2))

def paperwork(n, m):
  if n < 0 or m < 0: 
    return 0
  elif n < 0 and m < 0:
    return 0
  else: 
    return n * m

print(paperwork(5, 5))

def no_ifs_no_buts(a, b):
  if a > b:
    return f'{a} is greater than {b}'
  elif b > a: 
    return f'{b} is greater than {a}'
  else: 
    return f'{a} is equal to {b}'

print(no_ifs_no_buts(5, -4))

# not using conditional logic with if/elif/else or ternary operator or switch case
# solution: use while statement 

def no_ifs_no_(a, b):
    while a > b:
        return f"{a} is greater than {b}"
    while a < b:
        return f"{a} is smaller than {b}"
    while a == b:
        return f"{a} is equal to {b}"
      
print(no_ifs_no_(5, -4))

from math import sqrt

def find_next_square(sq):
  # check that there is no remainder (perfect square)
  if sqrt(sq) % 1 == 0:
  # take the square root of number 
  # add 1 to that new number value = 11 + 1 = 12
  # take the square of 12 = 144 
  # return new number as an integer 
    return int(sqrt(sq)+ 1)**2
  else:
  # otherwise return -1 if not a perfect square 
    return -1
     
print(find_next_square(121))

# 121 --> 144
# 625 --> 676
# 114 --> -1 since 114 is not a perfect square

from math import sqrt

def solve(n):
  # take square root of number and assign to variable 
  # turn number into integer instead of float 
  # after getting square root, 
  # take squre of number 
  # check if square of number is equal to number passed in as parameter 
  # return True 
  # otherwise, return False
  
   sq_root = int(sqrt(n))
   if (sq_root**2) == n:
     return True
   else: 
     return False

print (solve(36))


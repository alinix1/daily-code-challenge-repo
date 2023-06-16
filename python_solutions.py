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

import re

def same_case(a, b): 

  match_case1 = re.match(r'^[a-z]+$', a) 
  
  match_case2 = re.match(r'^[a-z]+$', b)  

  match_case3 = re.match(r'^[A-Z]+$', a) 

  match_case4 = re.match(r'^[A-Z]+$', b) 
  
  if match_case1 and match_case2:
    return 1
  elif match_case3 and match_case4:
    return 1
  elif match_case1 and match_case4:
    return 0
  elif match_case3 and match_case2:
    return 0
  else:
    return -1

print(same_case('?', 'B'))

def remove_char(s):
    return s[1:-1]

print(remove_char('hello'))

# ('hello') --> ell
# input: string 
# output: string that is modified with first character and last character removed 

def positive_sum(arr):
  result = [item for item in arr if item > 0]
  sum = 0

  for i in range(0, len(result)):
    sum = sum + result[i]

  if not sum: 
    return 0
  else:
    return sum
  
print(positive_sum([1,-4,7,12]))

def no_space(x):
  return x.replace(" ", "")

print(no_space('8 j 8   mBliB8g  imjB8B8  jl  B'))

def no_space_other(x):
  x_join = "".join(x.split())
  return x_join
  
print(no_space_other('8 j 8   mBliB8g  imjB8B8  jl  B'))

def summation(num):
  result = 0
  for i in range(1, num + 1):
    result += i
  return result

print(summation(8))

# 2 -> 3 (1 + 2)
# 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

def find_needle(arr):
  index = arr.index('needle')
  return f'found the needle at position {index}'

print(find_needle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

def rps(p1, p2):
  outcomes = {'rock', 'paper', 'scissors'}
  for x in outcomes: 
    if p1 == 'rock' and p2 == 'scissors':
      return 'Player 1 won!'
    elif p1 == 'paper' and p2 == 'scissors':
      return 'Player 2 won!'
    elif p1 == 'scissors' and p2 == 'paper':
      return 'Player 1 won!'
    elif p1 == 'rock' and p2 == 'paper':
      return 'Player 2 won!'
    elif p1 == 'scissors' and p2 == 'rock':
      return 'Player 2 won!'
    elif p1 == 'paper' and p2 == 'rock':
      return 'Player 1 won!'
    elif p1 == 'paper' and p2 == 'paper':
      return 'Draw!'
    elif p1 == 'rock' and p2 == 'rock':
      return 'Draw!'
    elif p1 == 'scissors' and p2 == 'scissors':
      return 'Draw!'

print(rps('paper', 'paper'))

def rps_other(p1, p2):
    if p1 == p2:
        return 'Draw!'
    elif (p1 == 'rock' and p2 == 'scissors') or (p1 == 'scissors' and p2 == 'paper') or (p1 == 'paper' and p2 == 'rock'):
        return 'Player 1 won!'
    else:
        return 'Player 2 won!'

print(rps_other('rock', 'paper'))

def maps(arr):
  return [x * 2 for x in arr]

print(maps([1, 2, 3]))

def dna_to_rna(dna):
  result = list(map(lambda x: x.replace('T', 'U'), dna))
  final = "".join(result)
  return final

print(dna_to_rna("GCAT"))

def grow(arr):
  result = 1
  for x in arr:
    result *= x
  return result

print(grow([1,2,3,4]))



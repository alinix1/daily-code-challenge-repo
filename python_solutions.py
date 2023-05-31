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
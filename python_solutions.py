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
def abbrev_name(name):
   name_upper_case = name.upper()
   result = [word[0] for word in name_upper_case.split()]
   return result[0] + '.' + result[1]

print(abbrev_name('sam smith'))
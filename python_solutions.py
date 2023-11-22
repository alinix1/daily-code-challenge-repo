from collections import Counter
import math
import re
from math import sqrt


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


def lovefunc(flower1, flower2):
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


def find_next_square(sq):
    # check that there is no remainder (perfect square)
    if sqrt(sq) % 1 == 0:
        # take the square root of number
        # add 1 to that new number value = 11 + 1 = 12
        # take the square of 12 = 144
        # return new number as an integer
        return int(sqrt(sq) + 1)**2
    else:
        # otherwise return -1 if not a perfect square
        return -1


print(find_next_square(121))

# 121 --> 144
# 625 --> 676
# 114 --> -1 since 114 is not a perfect square


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


print(solve(36))


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


print(positive_sum([1, -4, 7, 12]))


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


print(find_needle(["hay", "junk", "hay", "hay",
      "moreJunk", "needle", "randomJunk"]))


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


def rps_other1(p1, p2):
    outcomes = {'rock', 'paper', 'scissors'}
    outcome = None

    if p1 == p2:
        outcome = 'Draw!'
    else:
        switch_case = p1 + p2
        switch_case_reverse = p2 + p1

        switch_outcomes = {
            'rockscissors': 'Player 1 won!',
            'paperscissors': 'Player 2 won!',
            'scissorspaper': 'Player 1 won!',
            'rockpaper': 'Player 2 won!',
            'scissorsrock': 'Player 2 won!',
            'paperrock': 'Player 1 won!'
        }

        outcome = switch_outcomes.get(
            switch_case, switch_outcomes.get(switch_case_reverse, None))

    return outcome


print(rps_other1('paper', 'paper'))


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


print(grow([1, 2, 3, 4]))


def human_years_cat_years_dog_years(human_years):
    catYears = 0
    dogYears = 0
    if human_years == 1:
        catYears += 15
        dogYears += 15
        return [human_years, catYears, dogYears]
    elif human_years == 2:
        catYears += 24
        dogYears += 24
        return [human_years, catYears, dogYears]
    elif human_years > 2:
        catYears += 24
        dogYears += 24
        years = human_years - 2
        catYears += years*4
        dogYears += years*5
        return [human_years, catYears, dogYears]
    else:
        return [0, 0, 0]


print(human_years_cat_years_dog_years(2))


def get_count(sentence):
    vowels = ['a', 'e', 'i', 'o', 'u']
    result = [vowel for vowel in sentence if vowel in (vowels)]
    return len(result)


print(get_count('bcdfghjklmnpqrstvwxz yeaaaaaaa'))


def to_jaden_case(str):
    import string
    result = string.capwords(str)
    return result


print(to_jaden_case("How can mirrors be real if our eyes aren't real"))


def remove_smallest(numbers):
    my_list = numbers.copy()
    if my_list == []:
        return []
    my_list.remove(min(my_list))
    return my_list


print(remove_smallest([2, 1, 5, 4, 3]))


def descending_order(num):
    return int("".join(sorted(str(num), reverse=True)))


print(descending_order(42145))


def descending_order(num):
    result1 = str(num)
    result2 = list(result1)

    result3 = sorted(result2, reverse=True)

    result4 = "".join(result3)

    result5 = int(result4)
    return result5


print(descending_order(42145))


def maskify_fun(cc):
    if cc == '':
        return ''

    strNum = cc[:-4]
    replaceStr = re.sub('.', '#', strNum)
    lastFour = cc[-4:]

    result = replaceStr + lastFour
    return result


print(maskify_fun("4556364607935616"))


def maskify(cc):
    n = 4
    replacementStr = '####'
    result = cc[:-n] + replacementStr
    return result


print(maskify("4556364607935616"))


def reverse_words(text):
    text = text[::-1].split(" ")

    result = text.copy()
    result.reverse()
    final = ' '.join(result)
    return final


print(reverse_words('This is an example!'))


def is_ruby_coming(lst):
    if not any(x['language'] == 'Ruby' for x in lst):
        return False
    else:
        return True


list1 = [
    {'firstName': 'Sofia', 'lastName': 'I.', 'country': 'Argentina',
        'continent': 'Americas', 'age': 35, 'language': 'Java'},
    {'firstName': 'Lukas', 'lastName': 'X.', 'country': 'Croatia',
        'continent': 'Europe', 'age': 35, 'language': 'Python'},
    {'firstName': 'Madison', 'lastName': 'U.', 'country': 'United States',
        'continent': 'Americas', 'age': 32, 'language': 'Ruby'}
]

print(is_ruby_coming(list1))


def is_sorted_and_how(lst):
    if lst == sorted(lst):
        return 'yes, ascending'
    elif lst == sorted(lst, reverse=True):
        return 'yes, descending'
    return 'no'


print(is_sorted_and_how([10, 9, 8, 3, -11]))


def open_or_senior(data):
    result = []
    for x in data:
        if x[0] >= 55 and x[1] > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result


print(open_or_senior([(45, 12), (55, 21), (19, -2), (104, 20)]))


def century(year):
    return math.ceil(year / 100)


print(century(1705))


def get_length_of_missing_array(arr):
    if not arr or [] in arr or None in arr:
        return 0

    sorted_arr = sorted(arr, key=len)

    for x in range(1, len(sorted_arr)):
        if len(sorted_arr[x]) - len(sorted_arr[x - 1]) > 1:
            # Return the missing length
            return len(sorted_arr[x - 1]) + 1

    return len(sorted_arr[-1]) + 1


print(get_length_of_missing_array(
    [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))


def find_short(s):
    lst = s.split()
    sorted_lst = sorted(lst, key=len)
    # sort_str = s.sort()
    print(sorted_lst)
    return len((sorted_lst[0]))


print(find_short("bitcoin take over the world maybe who knows perhaps"))


def reverse_words1(text):
    final = text[::-1].split(' ')
    print(final)

    reversed_list = []
    for x in final:
        reversed_list = [x] + reversed_list

    return ' '.join(reversed_list)


print(reverse_words1("This is an example!"))


def capitals(string):
    result = []
    for i in range(len(string)):
        if string[i].isupper():
            result.append(i)
    return result


print(capitals('OneTwoThree'))


def disemvowel(string_):
    vowels = {'i', 'o', 'a', 'u', 'e', 'I', 'E', 'O', 'A', 'U'}
    string_.lower()
    return ''.join([c for c in string_ if c not in vowels])


print(disemvowel('LOL'))


def square_digits(num):
    final = []
    list_of_digits = [int(i) for i in str(num)]

    for x in list_of_digits:

        result = x ** 2
        final.append(result)
    result = ''.join(str(x) for x in final)
    return int(result)


print(square_digits(1245))


def square_digits1(num):

    list_of_digits = [int(i) for i in str(num)]

    square_nums = list(map(lambda x: x ** 2, list_of_digits))

    final = ''.join(str(x) for x in square_nums)
    return int(final)


print(square_digits1(1245))


def most_frequent_item_count(collection):

    item_counts = Counter(collection)

    if not item_counts:
        return 0

    most_common = item_counts.most_common(1)

    return most_common[0][1]


result = most_frequent_item_count([3, -1, -1])
print(result)


def solution(s):
    result_upper = re.findall(r'[A-Z][a-z]*', s)

    if result_upper:
        result_lower = re.split(r'([A-Z][a-z]*)', s)

        final = ' '.join(filter(lambda x: x, result_lower))
        return final
    else:
        return s


print(solution("HelloDudeHello"))


def solution1(s):
    string_result = ""

    for char in s:
        if char.upper() == char:
            string_result += " " + char

        else:
            string_result += char

    return string_result


print(solution1("helloworld"))

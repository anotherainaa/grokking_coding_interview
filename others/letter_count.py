def letter_count(s):
    map = {}
    for x in s: 
        if x in map: 
            map[x] += 1
        else: 
            map[x] = 1
    return map

print(letter_count("codewars"))
print(letter_count("aabc"))